<?php


namespace App\Http\Controllers\Provider;


use App\Http\Controllers\DaemonController;
use Illuminate\Support\Facades\DB;
use mysqli;

class Multicraft extends DaemonController
{
    public static function getAll(Mysqli $mysqli)
    {
        return $mysqli->query("SELECT * FROM server")->fetch_all();
    }
}