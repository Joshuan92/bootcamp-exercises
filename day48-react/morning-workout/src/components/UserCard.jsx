import React, { useEffect, useState } from "react";

const UserCard = (props) => {

const { user } = props;
  

  return (

    <div className="card_container">
        <div className="card_details">
            <h1>{user.name}</h1>
            <p>Age:{user.age}</p>
            <p>Job: {user.job}</p>
        </div>
    </div>
  )

}


export default UserCard;