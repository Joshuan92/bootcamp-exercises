<?php 

$paragraph = 'And then it happened .....';


$paragraph = str_replace('.......','...', $paragraph);

$paragraph = preg_replace('#\.{4,}#','...', $paragraph);

var_dump($paragraph);

$paragraphs = [
    'And then it happened.......',
    'And the boy never smiled again....           ',
    'So ends the story of the cowboy and the samurai ....'

];

$paragraphs = array_map(function($paragraph){

    return preg_replace('#\.{4,}/s#','...', $paragraph);

}, $paragraphs);

var_dump($paragraphs);
