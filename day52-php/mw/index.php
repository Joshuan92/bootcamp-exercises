<?php

$html = file_get_contents('index.html');

var_dump($html);

$pos = 0;

var_dump($pos);

$pos = strpos($html, 'data-slug', $pos + 1 );

var_dump($pos);

$pos = strpos($html, 'data-slug', $pos + 1 );

var_dump($pos);

$pos = strpos($html, 'data-slug', $pos + 1 );

var_dump($pos);

$pos = strpos($html, 'data-slug', $pos + 1 );

var_dump($pos);

?>
