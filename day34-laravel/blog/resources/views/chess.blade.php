<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chessboard</title>

    <style>
            .board .row {
                width: 24em;
                display: flex;
            }
            .board .row > div {
                width: 3em;
                height: 3em;
            }
            .board .white {
                background-color: #c2c2c2;
            }
            .board .black {
                background-color: #525252;
            }

            .board {
                background-image: url('king.png');
            }
        
        </style>
</head>

<body>
        <div class="board">
            @for ($j = 0; $j < 8 ; $j++)
            <div class="row">
                @for ($i = 0; $i<8; $i++)
                    <div class="<?php echo ($j + $i) %2 == 0 ? 'white' : 'black'?>">
                        <?php if ($j == 3 && $i == 1) : ?>
                        <img src="http://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/king.png" alt="king">
                        <?php endif  ?>
                    </div>
                    

                @endfor
            </div>
            @endfor
        </div>

        
</body>
</html>