import React, { useState } from "react";

const formStyle = { display: "flex", flexDirection: "column", height: '300px', width:  '300px', alignItems: 'space-between'}
const divStyle = { display: "flex", width:  '300px', justifyContent: 'space-between' }
const buttonStyle = { border: '1px solid blue', margin: '5px'}

const URL = 'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod'
const App = props => {
  // Declare the proper variables for state using useState
  const [formInputValues, setFormInputValue] = useState({email: '', password: ''})

  const [message, setMessage] = useState();

  // Make the inputs 'controlled input' using the function below
  const handleTextValueChange = e => {

    const id = e.target.id
    const val = e.target.value

    console.log(formInputValues)


    setFormInputValue(prevValues => { 

      return {

        ...prevValues,
            [id]: val

      }
      })

  };

  const handleSubmitClick = (e) => {
    e.preventDefault()
    // When the submit button is clicked, submit a POST request to the above URL
    // It will always return an error
    // Find the error message in the returned body and add the error message to the bottom of the form
    console.log("clicked", formInputValues)

    fetch(URL, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-type': 'application/json'

            },
            body: JSON.stringify({ // is this function ok?
                "email": formInputValues.email,
                "password": formInputValues.password
                })
        })
            .then(response => response.json())
            .then(data => {
              setMessage(data.error.message)
              console.log(data.error.message)
            })
            .catch(e => {
              console.log('err', e);
            })

    }

  return (
    <form style={formStyle}>
      <div style={divStyle}>
        <p>Email</p>
        <input
          type="email"
          id="email"
          value={formInputValues.email}
          onChange={handleTextValueChange}
        />
      </div>
      <div style={divStyle}>
        <p>Password</p>
        <input
          type="password"
          id="password"
          value={formInputValues.password}
          onChange={handleTextValueChange}
        />
      </div>
      <button style={buttonStyle} onClick={handleSubmitClick}>Submit</button>

      {message && <h3 style={{ color: 'red'}}>{message}</h3>}


    </form>
  );
};

export default App;