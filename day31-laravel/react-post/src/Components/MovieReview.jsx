import React from 'react';
import MovieFavorite from './MovieFavorite.jsx';

export default class MovieReview extends React.Component
{

    constructor(props) {

        super(props);

        this.state = {

            movie_data: null
        }

        this.movie_id = 488;
    }

    componentDidMount = () => {
        fetch(`http://www.mw-day31.test/api/movie?id=${this.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                    movie_data: json_data
                })
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://www.mw-day31.test/api/review', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify ({
            "movie_id": 488,
            "user_id": 1,
            "text": this.state.text,
            "rating": 6
        })
    })
        
    }
    
    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    render() {

        let movie = 'Loading...';

        if (this.state.movie_data !== null) {
            movie = (
                <div className="movie">
                    <h2>{this.state.movie_data.name}</h2>
                    <img src={ this.state.movie_data.poster_url} alt={this.state.movie_data.name}/>
                    
                </div>
            )
        }

        

        return (
            <form action="" method="post" onSubmit={ this.handleSubmit}>
                

                { movie }
                <br />

                <textarea name="text" id="" cols="30" rows="10" value={ this.state.text} onChange={this.handleTextChange}></textarea>
                <br />
                <br />
                <input type="submit" value="Sumbit"/>
                

                <MovieFavorite 
                movie_id={this.movie_id}
                
                />

            </form>
        )
    }
}