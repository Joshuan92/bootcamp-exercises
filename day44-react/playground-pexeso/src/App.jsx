import React from 'react';

import A from './componets/A.jsx'
import B from './componets/B.jsx'
import C from './componets/C.jsx'
import D from './componets/D.jsx'


export default class App extends React.Component {
    constructor (props) {
        super (props);

        let grid = [
            [null, null],
            [null, null],
            [null, null],
            [null, null]
        ];

        const componets = [<A/>, <B/>, <C/>, <D/>];

        let counts = [0, 0, 0, 0];

        for (let i = 0; i < 4; i++){
            for(let j = 0; j<2;j++){
                let index;
                do {
                    index = Math.floor(Math.random()*componets.length)
                }
                while(counts[index] == 2)

                grid[i][j] = componets[index];
                counts[componets]++;

            }
        }
        
        this.state = {

            grid: grid
        }
    }



    render () {

       


        return (
            <div className="game">
                <div className="grid">
                        { this.state.grid.map(row =>
                        <div className="row">{row.map(card => 
                            <div className="card">{card}</div>)
                        }
                        </div> )}
                </div>

            </div>
            
            
        )
    }
}