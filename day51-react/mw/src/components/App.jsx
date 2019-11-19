import React, { useState, useEffect } from "react";
import Nav from './Nav.jsx'
import Actor from './Actor.jsx'


const App = () => {



    const [actors, setActors] = useState ({id: null});
    const [loading, setLoading] = useState (true);
    const [actorsID, setActorID] = useState (true);
    
    const actorsIDs = [22616, 19302];

    async function fetchData() {

        let id = 22616

        const actor = await fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${id}`);
        const actorResponse = await actor.json();

        const rating = await fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${id}/ratings`);
        const ratingResponse = await rating.json();

        const genre = await fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${id}/genres`);
        const genreResponse = await genre.json();

        let newActor = {
                name: null,
                movies_total: null,
                ratings: [],
                genres: []
            }
        newActor.name = actorResponse.name
        newActor.movies_total = actorResponse.movies_total
        newActor.ratings = ratingResponse
        newActor.genres = genreResponse

        setActors({...actors, 
            [id]: newActor
        })
        setLoading(false)

    }


        useEffect(() => { 
            fetchData()
        }, []) 


    let content = ('');

    if(loading)
    {
        content = <div>Loading...</div>;

       
    }
    else if (!loading)
    {
        content = <Actor data={actors}/>
    }



    return (

        <>

            <Nav data={actors}/>
            { content }

        </>

   
    )


}

export default App;