<?php

namespace App\Http\Api\Submitted\Actions;

use App\Http\Api\Submitted\Responders\GetSubmittedResponder;
use App\Http\Requests\Api\Submitted\ListSubmittedRequest;
use App\Http\Resources\Api\Submitted\SubmittedItemResource;
use App\Models\UserFile;
use App\Repositories\SubmittedRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use ReflectionException;
use Throwable;

/**
 * @OA\Get (
 *   summary="Get Submitted",
 *   description="Get submitted list",
 *   path="/submitted",
 *   tags={"Submitted"},
 *     security={{"bearer_token":{}}},
 * @OA\Parameter(
 *     name="sortDesc",
 *     description="Sort Desc",
 *     in="query",
 *     @OA\Schema(type="string", example="name")
 *   ),
 *   @OA\Parameter(
 *     name="sortBy",
 *     description="Sort By",
 *     in="query",
 *     @OA\Schema(type="string", example="name")
 *   ),
 *   @OA\Parameter(
 *     name="status",
 *     description="Status",
 *     in="query",
 *     @OA\Schema(type="string", example="name")
 *   ),
 *   @OA\Parameter(
 *     name="perPage",
 *     description="Status",
 *     in="query",
 *     @OA\Schema(type="integer", example="10")
 *   ),
 *   @OA\Parameter(
 *     name="search",
 *     description="Search",
 *     in="query",
 *     @OA\Schema(type="string", example="search")
 *   ),
 *   @OA\Parameter(
 *     name="search",
 *     description="Search",
 *     in="query",
 *     @OA\Schema(type="string", example="search")
 *   ),
 *
 *   @OA\Response(
 *     response=200,
 *     description="OK",
 *     @OA\JsonContent(ref="#/components/schemas/GetDatatablesSubmittedResource")
 *  ),
 * )
 * @throws ReflectionException
 */
class GetSubmittedAction
{
    public function __invoke(
        ListSubmittedRequest  $request,
        SubmittedRepository   $repository,
        GetSubmittedResponder $responder
    ): JsonResponse
    {
        $data = $repository->getList($request->getDto());

        return $responder->respond([
            'data' => $this->convertToArray($data->getCollection()),
            'total' => $data->total(),
        ]);
    }

    private function convertToArray(Collection $data): array
    {
        return $data->map(static function (UserFile $userFile) {
            try {
                return new SubmittedItemResource($userFile);
            } catch (Throwable $e) {
                logger()->error("Submitted #$userFile->id can't be converted to array " . $e);

                return null;
            }
        })
            ->filter(fn($item) => $item !== null)
            ->toArray();
    }
}
