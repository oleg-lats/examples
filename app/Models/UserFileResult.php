<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserFileResult extends Model
{

    protected $fillable = [
        'user_file_id',
        'rsid_number',
        'chromosome',
        'position',
        'genotype_major',
        'genotype_minor'
    ];

    public const RELATION_USER_FILE = 'user_file';

    public function user_file(): BelongsTo
    {
        return $this->belongsTo(UserFile::class);
    }
}
