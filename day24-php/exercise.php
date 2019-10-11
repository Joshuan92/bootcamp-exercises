<?php

$time_served = 0;

while ($time_served < 10)
{
    if ($time_served == 1){
        
        echo "The prisoner has served {$time_served} year.<br>";
        $time_served++;
    }
    echo "The prisoner has served {$time_served} years.<br>";
    $time_served++;
}

echo '<br>';
$time_served = 0;


do{
    if ($time_served == 1){
        
        echo "The prisoner has served {$time_served} year.<br>";
        $time_served++;
    }
    echo "The prisoner has served {$time_served} years.<br>";
    $time_served++;
} while ($time_served < 10);

echo '<br>';

for ($time_to_serve = 5; $time_to_serve >= 0; $time_to_serve--)
{

    if ($time_to_serve == 0){
        
        echo "The prisoner should be released.<br>";
    }

    else{
        echo "The prisoner has {$time_to_serve} years to serve.<br>";
    }
}

echo '<br>';


for ($time_to_serve = 10; $time_to_serve >= 0; $time_to_serve--)
{
    echo "The prisoner has {$time_to_serve} years to serve.<br>";
    if ($time_to_serve >5){
        continue;
    }
    echo "Going to a parole hearing...<br>";

    if ($time_to_serve === 2){
        echo "Paroled!<br>";
        break;
    }
       
}