<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDaemonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('daemons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('type');
            $table->string('daemon_ip',128);
            $table->integer('daemon_port');
            $table->string('daemon_password',128);

            $table->string('database_type');
            $table->string('database_ip',128);
            $table->integer('database_port');
            $table->string('database_user');
            $table->string('database_password');
            $table->string('database_name');

            $table->integer('memory');
            $table->integer('level');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daemons');
    }
}
