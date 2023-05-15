<?php

namespace App\Models;

use App\Enums\UserFileStatusEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UserFile extends Model
{

    protected $fillable = [
        'user_id',
        'slug',
        'name',
        'tmp_name',
        'size',
        'mime',
        'status'
    ];

    protected $casts = [
        'status' => UserFileStatusEnum::class
    ];

    public const TABLE_SORT_FIELDS = [
        'name',
        'slug',
        'tmp_name',
        'size',
        'mime',
        'status'
    ];

    public const RELATION_USER = 'user';
    public const RELATION_RESULTS = 'results';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function results(): HasMany
    {
        return $this->hasMany(UserFileResult::class, 'user_file_id', 'id');
    }

}
