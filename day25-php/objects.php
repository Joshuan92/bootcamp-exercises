<?php

require_once 'User.php';

$steve = new User('steve', 'sdfjkndsnjk');

$steve->id = 1;
$steve->name = 'Steven';

$steve->dumpMe();

$bob = new User('bob', 'sdfsdfds');

$bob->dumpMe();