<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class BuildApiDocsCommand extends Command
{
    protected $signature = 'api:docs';

    protected $description = 'Swager generate';

    public function handle()
    {
        $this->call('l5-swagger:generate', ['--all' => true]);
    }
}
