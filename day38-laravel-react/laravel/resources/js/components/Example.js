import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {

    constructor(props){
        super(props);

        this.state = {
            userId : null,
            user : null
        }
    }

    componentDidMount(){

        const userId = document.getElementById('user_id').value;
        document.getElementById('getElem')

        this.setState({

            userId: document.getElementById('user_id').value,
            user: JSON.parse(document.getElementById('user').value)

        })
    }
    render() {

        console.log(user);
        
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hello no. {this.state.userId} </div>
                            <div className="card-header">Hello {this.state.user ? this.state.user.name : ''} </div>

                            <div className="card-body">I'm banana!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('my-react')) {
    ReactDOM.render(<Example />, document.getElementById('my-react'));
}
