import React from 'react'

const Friend = props => {

console.log(props);



    return (


        <div>{props.match.params.id}</div>
    )
};

export default Friend;