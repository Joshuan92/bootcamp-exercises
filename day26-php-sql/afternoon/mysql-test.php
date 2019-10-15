<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';

require_once 'Country.php';
require_once 'Region.php';

//connect to database
connect('localhost','world', 'root','rootroot');


$query = 'DELETE 
            FROM `region`
            WHERE `slug` LIKE ?';



//run the query
$results = delete($query, ['%america%']);

// $populations = array_map(function($country){

//     return $country->getFormattedPopulation();

// }, $results);

var_dump($results);



