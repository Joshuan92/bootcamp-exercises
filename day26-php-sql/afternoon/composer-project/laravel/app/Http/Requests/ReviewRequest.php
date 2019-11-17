<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'value' => 'required|numeric|min:0|max:10',
            'text' => 'required|min:10|max:160'
        ];
    }

    public function messages()
    {
        return [
            
            'value.required' => 'THAT IS COMPLETELY WRONG!',
            'text.required' => 'THAT IS COMPLETELY, UTTERLY WRONG!'

        ];
    }
}
