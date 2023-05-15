<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UserReport extends Model
{

    public const RELATION_DETAILS = 'details';

    protected $casts = [
        'created_at' => 'datetime'
    ];

    public function details(): HasMany
    {
        return $this->hasMany(UserReportDetails::class, 'user_report_id', 'id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
