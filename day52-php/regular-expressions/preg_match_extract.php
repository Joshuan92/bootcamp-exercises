<?php 

$urls = [

    'microsoft.',
    'www.codingbootcamp.cz',
    'google.com',
    'script.aculo.us',
    'apiary.io'
];

foreach ($urls as $url) {
    preg_match('#(\.)([a-z]+)?$#i', $url, $matches);

    var_dump($matches[1]);


}