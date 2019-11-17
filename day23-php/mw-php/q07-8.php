<?php

class Address 
{
    public $name = null;
    public $street = null;
    public $house_nr = null;
    public $city = null;
    public $country = null;
    public $postal_code = null;

    static protected $local_country = null;


    public static function setLocalCountry($country_name)
    {
        return self::$local_country = $country_name;
    }

    public function isLocal()
    {
        if($this->country === self::$local_country)
        {
            return true;
        }
        else{

            return false;
        }
    }
    
}


$country = new Address;
$country = Address::setLocalCountry('czechia');

var_dump($country);

$czechia = new Address();
$czechia->country = 'czechia';

var_dump($czechia->isLocal());

$germany = new Address();
$germany->country = 'germany';

var_dump($germany->isLocal());

