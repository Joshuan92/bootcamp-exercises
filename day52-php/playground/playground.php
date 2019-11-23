<?php

// //Exercise 1

// $urls = [
//     'www.example.com',
//     'https://codingbootcamp.cz',
//     'nytimes.com',
//     'http://home',
//     'http.transferprotocols.io',
//     'https://drive.google.com'
// ];


// function addScheme($url){
//     return 'http://' . $url;
// }

// foreach ($urls as $url) {

   

//     $httpFound = preg_match('#https*:#', $url);

//     if(!$httpFound){
//         echo addScheme($url) . "\n";
//     }
    
// }

// $urls = [
//     'https://www.kinobox.cz/5film/258309-harry-potter-a-kamen-mudrcu',
//     'https://www.kinobox.cz/film/32715-harry-potter-a-tajemna-komnata',
//     'https://www.kinobox.com/movie/36087-harry-potter-and-the-prisoner-of-azkaban',
//     'https://www.kinobox.cz/film/37125-harry-potter-a-ohnivy-pohar',
//     'https://kinobox.cz/film/256303-harry-potter-a-fenixuv-rad',
//     '/film/258806-harry-potter-and-the-12-blood-prince',
//     'http://www.kinobox.cz/film/125336-harry-potter-a-relikvie-smrti-cast-1',
//     'https://www.kinobox.cz/film/125517-8th-harry-potter'
// ];



// foreach ($urls as $url) {

//     preg_match('#\/([0-9]+)\-#', $url, $movie_ids);

//     var_dump($movie_ids);
// }


// $urls = [
//     'https://www.imdb.com/title/tt0372784/?ref_=nv_sr_2?ref_=nv_sr_2',
//     'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_1?ref_=nv_sr_1',
//     'https://www.imdb.com/title/tt1345836/?ref_=nv_sr_2?ref_=nv_sr_2'
// ];

// $result = [];

// foreach ($urls as $url) {

//     preg_match('#\/(tt[0-9]+)\/#', $url, $movie_ids);

//     $result[] = $movie_ids[1];
// }

// var_dump($result);





// $html = (
// '<div class="product" data-slug="bicycle-12">
//     12" Bicycle
// </div>
// <div class="product" DATA-SLUG="helmet-pink">
//     A pink helmet
//     <div class="for">For kids 5-9 years old</div>
// </div>
// <div data-slug="cycling-gloves" class="product">
//     Cycling gloves
// </div>
// <div class="in-basket" data-slug="repair-kit">
//     Bicycle repair kit
//     <div class="amount">1</div>
// </div>'
// );

// $results = [];

// preg_match_all('#data-slug=\"(.*?)\"#i', $html, $slug);

// $results[] = $slug[1];

// $array = [];

// var_dump($results);



// for ($i = 0; $i < count($results[0]); $i++) {
//     $array[] = $results[0][$i] ;
// }

// var_dump($array);


$html = (
    '<div class="product" data-slug="bicycle-12">
        12" Bicycle
    </div>
    <div class="product" DATA-SLUG="helmet-pink">
        A pink helmet
        <div class="for">For kids 5-9 years old</div>
    </div>
    <div data-slug="cycling-gloves" class="product">
        Cycling gloves
    </div>
    <div class="in- " data-slug="repair-kit">
        Bicycle repair kit
        <div class="amount">1</div>
    </div>'
    );
    
    $results = [];
    
    preg_match_all('#data-slug=\"(.*?)\" #i ', $html, $slug);