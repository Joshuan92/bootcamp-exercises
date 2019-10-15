<?php

include 'data.php';
require_once '../src/Celebrity/Celebrity.php';

$celebrities = [];

foreach ($data as $value)
{
    $newCelebrity = new Celebrity;
    $newCelebrity->fromArray($value);
    
    $celebrities[] = $newCelebrity;
}

header('Content-type: application/json');

echo json_encode($celebrities);