<?php

// $fruit_colors = [
//     'Apple' => 'Red',
//     'Pear' => 'Green',
//     'Orange' => 'Orange'
// ];

// foreach($fruit_colors as $fruit => $color)
// {
//     echo "The {$fruit} is {$color}.<br>";
// }

// var_dump($fruit_colors);

// asort($fruit_colors);
// var_dump($fruit_colors);

$cars_i_want = [];
var_dump($cars_i_want);

$cars_i_want[] = 'Aston Martin';
$cars_i_want[] = 'Bugatti';
$cars_i_want[] = 'Ferrari';
$cars_i_want[] = 'Lamborghini';
$cars_i_want[] = 'Maserati';
$cars_i_want[] = 'Mercedes';
$cars_i_want[] = 'Porsche';
$cars_i_want[] = 'Skoda';


var_dump($cars_i_want);

echo "For myself I would buy " . $cars_i_want[1] . ".<br>";
echo "For my spouse I would buy {$cars_i_want[3]}.<br>";

$cars_i_want[4] = 'Smart';

echo "For my kids I would buy {$cars_i_want[4]}.<br>";

echo '<ul>';

foreach($cars_i_want as $car)
{
    echo "<li>{$car}</li>";
}
echo '</ul>';

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];

echo array_search(1150000, $car_prices);
echo '<br>';
echo '<br>';

foreach($car_prices as $car => $price)
{
    echo "You can have {$car} for {$price}.<br>";
}

