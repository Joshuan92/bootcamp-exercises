<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ruler</title>

    <style>
    .ruler{
    display:flex;
    }
    .cm,
    .mm {
        border-left: 1px solid #555;
        height: 0.4rem;
        width: 0;
    }
    
    .mm.longer{
        height: 0.8rem;
    }
    .cm {
        height: 1.4rem;
    }
    .cm > span,
    .mm > span {
        display: block; 
        margin-top:2rem;
        margin-left: -.25rem;
    }
    
    </style>
</head>
<body>

    <?php 

        $size = $_GET['size']; // in mm
        $interval = $_GET['interval']; // in mm
    
    ?>

    <div class='ruler'>
        <?php for ($j=0; $j < $size/10 ; $j++) : ?>
            <div style="margin: 0 {{$interval*10}}px" class='cm'><span><?php echo floor($j*1)?></span></div>
            <?php for ($i=1; $i <= 10/$interval -1 ; $i++) : ?>
                <div style="margin: 0 {{$interval*10}}px" class='mm'></div>
            
            <?php endfor ?>
        <?php endfor ?>
        <div style="margin: 0 {{$interval*10}}px" class='cm'><span><?php echo floor($j*1)?></span></div>

    </div>



        {{-- <div style="margin: 0 10px" class='mm longer'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        
        <div style="margin: 0 10px" class='cm'><span>1</span></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm longer'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        
        <div style="margin: 0 10px" class='cm'><span>2</span></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm longer'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        <div style="margin: 0 10px" class='mm'></div>
        
        <div style="margin: 0 10px" class='cm'><span>3</span></div>
    </div> --}}
    
</body>
</html>