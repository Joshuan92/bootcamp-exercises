<?php 

function headline ($text, $level = 1)
{
    return "<h{$level}>{$text}</h{$level}>";
}

echo headline("hafaci", 2);


echo headline("bananas");