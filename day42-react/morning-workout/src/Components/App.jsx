import React from 'react';


export default class App extends React.Component {

    constructor (props){
        super (props);

        this.state = {

            data: null
        }
    }

    componentDidMount = () => {

        fetch("https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05")
        .then(response => response.json())
        .then(dataResponse => this.setState({ 
            data: dataResponse 
        }));


    }

    render ()
    {

        if (this.state.data.attendance)
        {

            const date = this.state.data.attendance.map(person => new Date(person.from))
            const hours = date.map(date => date.getHours()) 
            const minutes = date.map(date => date.getMinutes()) 


            console.log(hours);
            console.log(minutes);
            
        }
        


        return (

            <>
            
                <h1>Datum: {this.state.data.date ? this.state.data.date : 'Loading...'}</h1>
                <h2>Attendance: </h2>
        


                <ul>
                    {this.state.data.attendance ? this.state.data.attendance.map(person => 
                        <li>Name: {person.name} (present since: {person.from}) </li>

                    ) : "Loading..."}
                </ul>

            </>

        )

    }

}