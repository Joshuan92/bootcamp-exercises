<?php

$strings = [
    '12345',
    '123-product',
    'product-123',
    'product-name',
    'Product name',
    'manager@eshop.com',
    '<h1>
        Product name
     </h1>'
];

$results = [];


foreach ($strings as $string) {

    $pattern = '#\d#';
    $pattern = '#\d#';
    $pattern = '#^\d+$#';
    $pattern = '#^\d+$#';
    $pattern = '#product#';
    $pattern = '#^[^\s]+@[^\s]+\.[a-z]{1-4}$#';
    $pattern = '#^[a-zA-Z0-p_\-]+$#';
    $pattern = '#^[\w\-]+$#';





    if (preg_match($pattern, $string)) {

        $results[] = $string;
        
    }

    
}

var_dump($results);



?>