<?php

namespace App\Repositories;

use App\Dto\UserReportDto\ListUserReportDto;
use App\Models\UserReport;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;

class UserReportRepository
{
    private UserReport $userReport;
    private const PER_PAGE = 10;

    /**
     * @param UserReport $userReport
     */
    public function __construct(UserReport $userReport)
    {
        $this->userReport = $userReport;
    }

    public function getList(ListUserReportDto $listDto): LengthAwarePaginator
    {
        $userReports = $this->userReport->query();

        $userReports->where('user_id', Auth::user()->id);

        // search
        if ($listDto->getSearch()) {
            $userReports->where('name', 'LIKE', '%' . $listDto->getSearch() . '%');
        }

        if ($listDto->getStatus()) {
            $userReports->where('status', $listDto->getStatus() === 'active');
        }

        $perPage = $listDto->getPerPage() ?? self::PER_PAGE;

        return $userReports->paginate($perPage);
    }


}
