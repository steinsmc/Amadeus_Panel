<?php


namespace App\Http\Controllers;


use App\Daemon;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Provider\Multicraft;
use Illuminate\Support\Facades\DB;

class DaemonController extends Controller
{
    public function getAll()
    {
        $daemons = Daemon::all();
        return $daemons;
    }
}