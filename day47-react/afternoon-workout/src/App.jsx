import React, {useState, useEffect} from 'react';

const App = () => {

    const [characters, setcharacters] = useState(null)
    const [film, setFilm] = useState(null)

    useEffect(() => {
        fetch ('https://swapi.co/api/people')
        .then(response => response.json())
        .then(data => setcharacters(data.results))
        
    }, [])

    useEffect(() => {
        console.log('characters', characters);
    },[characters])

    useEffect(() => {

        if (characters) {
            const filmUrl = characters[0].films[0];
            console.log(filmUrl);
            
            fetch(filmUrl)
                .then(res => res.json())
                .then(filmData => {
                setFilm(filmData);
                })
                .catch(err => {
                console.log("err", err);
                });
        }
        

        // fetch (
            
            
            // )
        // .then(response => response.json())
        // .then(data => setcharacters(data.results))
        

        
    },[characters])

    useEffect(() => {
        console.log('film', film);
    },[film])

    
    
    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        {characters && characters.map((character, index) => {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>{index}: {character.name}</h2>
            {character.films.map((filmUrl, index) => {
            return <a href={filmUrl}>{`film ${index}`}</a>
            })}
            </div>
        )
        })}

        {/* <p>{film && film.title}</p> */}
        </div>
  )
    
}

export default App;