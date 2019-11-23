<?php

preg_match('#<.*>#', '<h1>Headline</h1>', $matches); // matches the entire string

var_dump($matches);

preg_match('#<.*?>#', '<h1>Headline</h1>', $matches); // matches just <h1>

var_dump($matches);

$string = '"Wingardium Leviosa!" yelled Harry. "Alohomora!" followed Ron.';


preg_match_all('#"(.+?)"#', $string, $matches);

var_dump($matches);