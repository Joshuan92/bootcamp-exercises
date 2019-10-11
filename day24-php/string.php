<?php

$year = 1415;
$place = 'Azincourt';

$quote = "In the year {$year} a battle of {$place} was fought.";

echo $quote;

$number = 0;
$number++;
var_dump($number);

$number = 0;
var_dump($number++);

$number = 0;
var_dump(++$number);

$owns_a_car = false;
$is_rich = false;
 
echo 'He goes to work by ' . ($owns_a_car ? 'car' : ($is_rich ? 'motorcycle' : 'bicycle'));

$username = 'Jan';
 
echo 'Hello' . ($username ?: 'unknown person');


