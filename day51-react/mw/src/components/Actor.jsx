import React from "react";
import Chart from 'react-google-charts';

const Actor = (props) => {

    console.log('actor_props', props.data[22616])

    let genres = props.data[22616].genres
    let ratings = props.data[22616].ratings

    console.log(genres);
    console.log(ratings);
    

    return (

        <>
            <h1>{props.data[22616].name}</h1>
            <h3>Movies total: {props.data[22616].movies_total}</h3>

            <Chart
                width={300}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={ratings}
                options={{
                title: 'Movie Ratings Over Time',
                chartArea: { width: '50%' },
                hAxis: {
                    title: 'Average Rating',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Year',
                },
                }}
                legendToggle
            />

        </>

    
    )

    


}

export default Actor;