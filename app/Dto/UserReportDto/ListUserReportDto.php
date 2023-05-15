<?php

namespace App\Dto\UserReportDto;

class ListUserReportDto
{

    private string|null $sortDesc;
    private string|null $sortBy;
    private string|null $status;
    private int|null $perPage;
    private string|null $search;
    private string|null $q;

    /**
     * @param string|null $sortDesc
     * @param string|null $sortBy
     * @param string|null $status
     * @param int|null $perPage
     * @param string|null $search
     * @param string|null $q
     */
    public function __construct(?string $sortDesc, ?string $sortBy, ?string $status, ?int $perPage, ?string $search, ?string $q)
    {
        $this->sortDesc = $sortDesc;
        $this->sortBy = $sortBy;
        $this->status = $status;
        $this->perPage = $perPage;
        $this->search = $search;
        $this->q = $q;
    }

    /**
     * @return string|null
     */
    public function getSortBy(): ?string
    {
        return $this->sortBy;
    }

    /**
     * @return string|null
     */
    public function getStatus(): ?string
    {
        return $this->status;
    }

    /**
     * @return int|null
     */
    public function getPerPage(): ?int
    {
        return $this->perPage;
    }

    /**
     * @return string|null
     */
    public function getSearch(): ?string
    {
        return $this->search;
    }

    /**
     * @return string|null
     */
    public function getQ(): ?string
    {
        return $this->q;
    }

    public function getSortDesc(): string
    {
        return ($this->sortDesc === 'false') ? 'asc' : 'desc';
    }


}
