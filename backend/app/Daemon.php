<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Daemon extends Model
{
    protected $table = 'daemons';

    protected $hidden = [
        'daemon_password','database_password'
    ];
}
