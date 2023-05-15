<?php

namespace App\Http\Requests\Api\Submitted;

use App\Dto\Submitted\ListSubmittedDto;
use Illuminate\Foundation\Http\FormRequest;
use ReflectionException;

class ListSubmittedRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }

    /**
     * @throws ReflectionException
     */
    public function getDto(): ListSubmittedDto
    {
        return new ListSubmittedDto([
                'sortDesc' => $this->get('sortDesc'),
                'sortBy'   => $this->get('sortBy'),
                'status'   => $this->get('status'),
                'perPage'  => $this->get('perPage'),
                'search'   => $this->get('search'),
                'q'        => $this->get('q'),
            ]
        );
    }
}
