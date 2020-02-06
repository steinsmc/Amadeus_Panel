<?php


namespace App\Http\Controllers;


use App\Daemon;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Provider\Multicraft;
use Illuminate\Support\Facades\DB;

class DaemonController extends Controller
{
    public function all()
    {
        $daemons = Daemon::all();
        foreach ($daemons as $daemon){
            $mysql = mysqli_connect($daemon->database_ip,$daemon->database_user,$daemon->database_password,$daemon->database_name,$daemon->database_port);
            return Multicraft::getAll($mysql);
        }
    }
}