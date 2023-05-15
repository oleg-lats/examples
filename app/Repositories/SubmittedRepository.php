<?php

namespace App\Repositories;

use App\Dto\Submitted\ListSubmittedDto;
use App\Models\UserFile;
use Illuminate\Pagination\LengthAwarePaginator;

class SubmittedRepository
{

    private UserFile $userFile;
    private const PER_PAGE = 10;

    /**
     * @param UserFile $userFile
     */
    public function __construct(UserFile $userFile)
    {
        $this->userFile = $userFile;
    }

    public function getList(ListSubmittedDto $listDto): LengthAwarePaginator
    {
        $brands = $this->userFile->query();

        // search
        if ($listDto->search) {
            $brands->where('name', 'LIKE', '%' . $listDto->search . '%');
        }

        if (in_array($listDto->sortBy, $this->userFile::TABLE_SORT_FIELDS, true)) {
            $brands->orderBy($listDto->sortBy, $listDto->getSortDesc());
        }

        if ($listDto->status) {
            $brands->where('status', $listDto->status === 'active');
        }

        $perPage = $listDto->perPage ?? self::PER_PAGE;

        return $brands->paginate($perPage);
    }
}
