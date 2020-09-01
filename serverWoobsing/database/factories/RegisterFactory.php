<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Register;
use Faker\Generator as Faker;

$factory->define(Register::class, function (Faker $faker) {
    return [
        'name' =>$faker -> firstName,
        'last_name' =>$faker -> lastName,
        'phone' =>$faker -> numberBetween($min = 100000 , $max = 9999999, $function ='sqrt'),
        'email' =>$faker->unique()->safeEmail,
        'address' =>$faker -> city,
    ];
});
