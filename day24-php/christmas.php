<?php

$days_to_christmas = 158;

while ($days_to_christmas > 0) {
    $days_to_christmas--;
    echo "There are still {$days_to_christmas} days to christmas.<br>";
}

$days_to_christmas = 158;

do  {
    $days_to_christmas--;
    echo "There are still {$days_to_christmas} days to christmas.<br>";
}
while ($days_to_christmas > 0);

for ($number = 0; $number < 10; $number++) {
    echo "There are still {$number} days to christmas.<br>";
}