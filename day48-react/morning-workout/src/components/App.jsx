import React, { useEffect, useState } from "react";
import UserCard from './UserCard.jsx';



const App = () => {
  const [users, setUsers] = useState([]);

  const url = 'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/';


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(users => {
        setUsers(users);
      });
  }, []);


  useEffect(() =>{

    console.log(users)
    
    }
    
  ,[users]);
  

  return (
    <>

      {users ? users.map(user => {

        console.log(user);


        return (


          <div className="container">

            <UserCard user={user}/>

          </div>

        )


       
        

        
        
        })
    
    : <div style={{ fontSize: "6rem" }}>Loading....</div>}

  </>

)}

export default App;
