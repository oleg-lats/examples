<?php

namespace App\Http\Api\UserReports\Actions;

use App\Http\Api\UserReports\Responders\GetUserReportsResponder;
use App\Http\Controllers\Api\ActionController;
use App\Http\Requests\Api\UserReport\ListUserReportRequest;
use App\Http\Resources\Api\ReportUsers\ReportUserResource;
use App\Models\UserReport;
use App\Repositories\UserReportRepository;
use Illuminate\Support\Collection;
use ReflectionException;
use Throwable;

/**
 * @OA\Get (
 *   summary="Get user reports by user",
 *   description="Get user reports list",
 *   path="/user-reports",
 *   tags={"User Reports"},
 *   @OA\Parameter(
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
 *   @OA\Response(
 *     response=200,
 *     description="OK",
 *     @OA\JsonContent(ref="#/components/schemas/GetUserReportResource")
 *  ),
 *
 * )
 * @throws ReflectionException
 */

class GetUserReportsActionController extends ActionController
{
    public function __invoke(
        ListUserReportRequest $request,
        UserReportRepository $repository,
        GetUserReportsResponder $responder

    ) {
        $data = $repository->getList($request->getDto());

        return $responder->respond([
            'data'  => $this->convertToArray($data->getCollection()),
            'total' => $data->total(),
        ]);
    }

    private function convertToArray(Collection $data): array
    {
        return $data->map(static function (UserReport $report) {
            try {
                return new ReportUserResource($report);
            } catch (Throwable $e) {
                logger()->error("Report #$report->id can't be converted to array " . $e);

                return null;
            }
        })
            ->filter(fn($item) => $item !== null)
            ->toArray();
    }
}
