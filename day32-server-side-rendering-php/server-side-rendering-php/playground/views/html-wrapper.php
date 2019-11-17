<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>My eshop</title>

    <link rel="stylesheet" href="css/main.css" />

</head>
<body>

    <div id="page">

        <!-- header -->
        <?php 
            include 'header.php';
        ?>

        <!-- topmenu -->
        <?php 
            include 'topmenu.php';
        ?>

        <div id="content">

            <!-- layout -->
            <?php 

                    include $layout . '/layout.php';

                
            ?>

        </div>

        <!-- footer -->
        <?php 
                include 'footer.php';
        ?>

    </div>

</body>
</html>