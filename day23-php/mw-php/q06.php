<?php

$calling_codes = [
    'AR' => '+54',
    'CZ' => '+420',
    'DE' => '+49',
    'HU' => '+36',
    'US' => '+1'
];

$country_names = [
    'US' => 'USA',
    'HU' => 'Hungary',
    'CZ' => 'Czechia',
    'AR' => 'Argentina',
    'DE' => 'Germany',
    'DK' => 'Denmark',
    'IN' => 'India'
];

$resulting_array = [];

foreach ($calling_codes as $short1 => $calling_code)
{
    foreach($country_names as $short2 => $country_name)
    {
        if($short1 === $short2)
        {
            $resulting_array[] = 'The calling code of ' . $country_name . ' is ' . $calling_code . '.';
        }
    }
    
}

var_dump($resulting_array);