import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="celebrities">
                <div className="celebrity"><img src={this.props.image_url}
                    alt={this.props.name}/>
                <div className="text">
                    <h2>{this.props.name}</h2>
                    <div className="earnings">
                        <h3>Desription:</h3>{this.props.description}
                    </div>
                    <div className="age">
                        <h3>Rating:</h3>{this.props.rating}
                    </div>
                    <div className="citizenship">
                        <h3>Released at:</h3>{this.props.released_at}
                    </div>
                </div>
             </div>
                
            </div>
        );
    }
}