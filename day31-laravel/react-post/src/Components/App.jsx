import React from 'react';
import MovieReview from './MovieReview.jsx';
// import MovieFavorite from './MovieFavorite.jsx';


export default class App  extends React.Component {
    render()
    {
        return (
            <main>
                <h1>The APP component</h1>

                <MovieReview />
                
            </main>
            

        )
    }
}