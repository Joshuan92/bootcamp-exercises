import React, { Component } from "react";
import UserList from './User-list.jsx';
import UserPanel from './User-panel.jsx';

class App extends Component {
  render() {
    return (
      <>
        <div style={{ fontSize: "6rem" }}>Loading...</div>
        <UserList/>
        <UserPanel/>

      </>
    );
  }
}

export default App;
