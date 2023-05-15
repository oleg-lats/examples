<?php

namespace App\Support\ApiResponse;

use Illuminate\Support\ServiceProvider;

class APIResponseServiceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function register()
    {
        $this->app->bind("api.response", ApiResponse::class);
    }

    /**
     * @return void
     */
    public function boot()
    {
        //
    }
}
