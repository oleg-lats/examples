<?php

namespace App\Enums;

enum UserFileStatusEnum: string
{
    case Error = 'Error';
    case Uploaded = 'Uploaded';
    case InProcess = 'In Process';
    case Done = 'Done';
}
