<?php


require_once 'api/DB/DB.php';
require_once 'api/DB/DB_functions.php';

require_once 'src/Game/Game.php';

//connect to database
connect('localhost','games', 'root','rootroot');

$results = [];


// get data from URL
$orderway = isset($_GET['way']) && strtolower($_GET['way']) == 'desc' ? 'DESC' : 'ASC';

$query = "SELECT * 
            FROM `games`
            WHERE 1
            ORDER BY {$orderway} ";
            

//run the query
$results = select($query, [], 'Game');

// $games = [];

// foreach ($results as $value)
// {
//     $newGame = new Game;
//     $newGame->fromArray($value);
    
//     $games[] = $newGame;
// }

header('Content-type: application/json');

echo json_encode($results);

// var_dump($_GET);