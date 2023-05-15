<?php

namespace App\Services;

use JetBrains\PhpStorm\NoReturn;
use Sanity\Client as SanityClient;

class SanityService
{
    private SanityClient $client;

// SANITY TYPES
//    "reportsSNPs"
//    "gene"
//    "combinedReport"
//    "healthReport"
//    "geneSNP"
//    "diet"
//    "SNPCategories"
//    "riskMatrixCategory"
//    "riskMatrix"
//    "reportsExtraContent"
//    "system.group"
//    "system.listener"
//    "system.retention"
//    "sanity.imageAsset"
//    "movie"
//    "person"
//    "screening"

    private const TYPE_GENE = 'gene';
    private const TYPE_DIET = 'diet';
    private const TYPE_REPORT = 'reportsSNPs';
    private const TYPE_HEALTH_REPORT = 'healthReport';
    private const TYPE_COMBINED_REPORT = 'combinedReport';

    #[NoReturn] public function __construct()
    {
        $projectId = config('sanity.projectId');
        $dataset = config('sanity.dataset');
        $token = config('sanity.token');

        $this->client = new SanityClient([
            'projectId' => $projectId,
            'dataset' => $dataset,
            'useCdn' => false,
            'apiVersion' => '2019-01-29',
            // Note that you cannot combine a token with the `useCdn` option set to true,
            // as authenticated requests cannot be cached
            'token' => $token,
        ]);
    }

    public function importGenes()
    {
        return $this->client->fetch(
            '*[_type == $type]',
            ['type' => self::TYPE_GENE]
        );
    }

}
