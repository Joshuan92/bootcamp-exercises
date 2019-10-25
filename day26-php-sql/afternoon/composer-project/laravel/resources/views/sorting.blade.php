<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sorting</title>
</head>
<body>

    <?php 

    function createRandomArray($length){
        $data = [];
        for($i = 0; $i < $length; $i++){
            $data[] = rand(1, 99);
        }
        return $data;
    }
    
    function echoArray($array){
        echo '<pre>' . implode('; ', $array) . '</pre>';    
    }
    
    // generate random array with length 5
    $data = createRandomArray(15);


    echo('Unsorted array:');
    echoArray($data);

    for($j = 0; $j < count($data)-1; $j++){

        for($i = 0; $i < count($data)-1-$j; $i++){

                if ($data[$i+1]<$data[$i])
                {
                    $tmp      = $data[$i];
                    $data[$i] = $data[$i+1];
                    $data[$i+1] = $tmp;
                }
   
        }
    }

    echo('Sorted array:');
    echoArray($data);
?>
    
</body>
</html>