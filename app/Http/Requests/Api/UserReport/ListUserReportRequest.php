<?php
declare(strict_types=1);

namespace App\Http\Requests\Api\UserReport;

use App\Dto\Brand\ListBrandDto;
use App\Dto\UserReportDto\ListUserReportDto;
use Illuminate\Foundation\Http\FormRequest;

class ListUserReportRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }

    /**
     */
    public function getDto(): ListUserReportDto
    {
        return new ListUserReportDto(
                $this->get('sortDesc'),
                $this->get('sortBy'),
                $this->get('status'),
                $this->get('perPage'),
                $this->get('search'),
                $this->get('q')
        );
    }

}
