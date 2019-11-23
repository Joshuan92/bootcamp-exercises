<?php

$words = explode('-', 'product-name-as-a-slug');

var_dump($words);

$words = preg_split('#[\-_]#', 'product-name-as-slug');

var_dump($words);

$view_path = 'product/detail/partials.buttons.buy';

$parts = preg_split('#[/\.]#', $view_path);

var_dump($parts);


$parts = preg_split('#[\\\.]#', '/', $view_path);

var_dump($parts);

