import React from 'react';

export default class MovieFavorite extends React.Component
{
    constructor(props) {

        super(props);

        this.state = {

            favorite: null
        }

        this.user_id = 1;

    }

    componentDidMount = () => {
        fetch(`http://www.mw-day31.test/api/movies/favorite?user_id=${this.user_id}&movie_id=${this.props.movie_id}`)
            .then(response => response.json())
            .then(json_data => {
                this.setState({
                        favorite: json_data.favorite
                    })
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://www.mw-day31.test/api/movies/favorite/toggle', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify ({
                "movie_id": this.props.movie_id,
                "user_id": this.user_id
            })

        
            
        })

        .then(response => response.json())
        .then(json_data => {
            console.log(json_data);
            
            this.setState({
                    favorite: json_data.data.favorite
                })
    })
        
    }

   

    render()
    {
        console.log(this.state.favorite);

        let favorite = this.state.favorite ? "Hell, yeah!" : "Nope, not at all.";
        

        return (

            <div>
                <p>Is it your favorite movie? {favorite}</p>
                <form action="" method="post" onSubmit={ this.handleSubmit}>

            
                     <input type="submit" value="Sumbit" />
            

                </form>
            </div>

        


        
        
        )
        
    }
}