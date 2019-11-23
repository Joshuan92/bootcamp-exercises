<?php

preg_match('#<[^>]+>#', '<h1><h2><span><div>', $matches);


var_dump($matches);

preg_match_all('#<([^>]+)>#', '<h1><h2><span><div>', $matches);


var_dump($matches);

$css = "
button {
    background-color: red;
    color: white;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    cursor: pointer;
}";

preg_match_all('#[\s\{]([a-zA-Z\-]+)\s*:#', $css, $matches);

var_dump($matches[1]);