<?php

var_dump(__FILE__);

var_dump(__DIR__);

var_dump(pathinfo(__FILE__));


switch (pathinfo(__FILE__, PATHINFO_EXTENSION) ){
    case 'php': 
    echo 'banana';
    break;
    case 'jpeg': 
    echo 'bananas';
    break;
}

var_dump(
    scandir(__DIR__) 
);

$directory_handle = opendir((__DIR__));

var_dump($directory_handle);

// mkdir('2020');

// rmdir('2020');


var_dump(
    is_dir('2019')
);



$file_handle = fopen('photos.txt', 'r');

while(false !== ($line = fgets($file_handle)))
{
    var_dump($line);
}
fclose($file_handle);

$file_handle = fopen('2019/info.txt', 'a');

    for($i =0; $i < 10; $i++)
    {
        fwrite($file_handle, 'Photos from our 2019 vacation'."\r\n");
    }

fclose($file_handle);

$data = [
    'Bruce',
    'Wayne',
    'Billionare',
    1939,
    'njdsnjdfnjdsfnjkfnkjfknjsdnjdf
    jnkfdsndsnsnkjfsdnjfsdjknfd
    jkdskjfskjbfdsbjkadbdshjhj
    bananas'
];

$fh = fopen('data.csv', 'w');

while (false !== ($line = fgetcsv($fh))){
    var_dump($line);
}

fclose($fh);

var_dump(
    file('photos.txt')
);

var_dump(
    file_get_contents('photos.txt')
);

file_put_contents(
    'data.json',
    json_encode($data)
);

var_dump(
    json_decode(file_get_contents('data.json'))
);

unlink('data.json');
