<?php

namespace App\Services;

use App\Models\HealthReport;
use App\Models\HealthReportDietGenes;
use App\Models\UserFile;
use App\Models\UserReport;
use App\Models\UserReportDetails;

class GenerateReportService
{
    private UserFile $userFile;

    /**
     * @param UserFile $userFile
     */
    public function __construct(UserFile $userFile)
    {
        $this->userFile = $userFile;
    }

    public function generateReports(): void
    {


    }
}
