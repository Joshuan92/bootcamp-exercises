import React from 'react';

export default class App extends React.Component {
    constructor (props) {
        super (props);

        let grid = [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
        ];

        const symbols = ['X', 'O'];

        this.state = {

            grid: grid,
            player: null,
            value: null
        }

    

    }

    handleOnClick = (event) => {

            const board = document.getElementsByClassName('card');
            console.log(event.target.classList.indexOf('highlighted'));

           
            

            if (event.target.classList){
                
                if (this.state.player === 'X'){
                        
                    for (const element of board){
                
                        element.addEventListener('click', event.target.classList.add('highlighted')); 
                        this.setState( {player: 'O'} );
                    }

                }
                else{

                    for (const element of board){
                
                        element.addEventListener('click', event.target.classList.add('highlighted2')); 
                        this.setState( {player:'X'} );
                    }

                }

            }
    }

    render () {

        console.log(this.state.grid);
        

        return (

            <>


                <div className="game">
                    <div className="grid">
                            { this.state.grid.map(row =>
                            <div className="row">{row.map(card => 
                                <div className="card" onClick={this.handleOnClick}>{card}
                                </div>)
                            }
                            </div> )}
                    </div>

                </div>

            </>
            
        )

    }
}