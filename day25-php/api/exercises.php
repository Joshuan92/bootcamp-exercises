<?php

// function headline($text)
// {
//     echo "<h1>{$text}</h1>";
// }

// headline('banan');

// $inches = 12;

// function inchesToCentimeters($inch)
// {
//     return $inch*2.54;
// }

// echo inchesToCentimeters($inches);

$C = 100;

function celsiusToFahrenheit($celsius)
{
    return (9/5) * $celsius + 32;
}

echo celsiusToFahrenheit($C);