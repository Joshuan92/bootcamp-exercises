<?php

$first_name = 'Martin';
$surname = 'Hanzlik';
$year_of_birth = 1992;
$height = 185;

echo 'First name: ' . $first_name . '<br>';
echo 'Second name: ' . $surname . '<br>';
echo 'Year of birth: ' . $year_of_birth . '<br>';
echo 'Height: ' . $height . ' cm<br>';

define('SERVER_SOFTWARE', 'Apache');
echo 'This server is running on ' . SERVER_SOFTWARE . '.<br>';

function greet ($whom)
{
    echo "Hello, {$whom}.<br>";
}

greet('Martin');

function sayHi ($whom)
{
    return 'Hello, ' . $whom . '.<br>';
}

echo sayHi('Petr');

function truncateString (&$string, $size)
{
    $string = mb_substr($string, 0, $size);
}

$sentence = 'Quick brown fox jumps over the lazy dog.';
echo $sentence;

truncateString($sentence, 10);
echo '<br>';

echo $sentence;
