import React, { Component } from 'react'

import UserCard from './User-Card.jsx';


class UserList extends Component {

	constructor (props) {
		super(props);

		this.state = {

			users: null

		};
	}

	componentDidMount() {
    fetch("https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/")
        .then(response => response.json())
        .then(data => this.setState({ users: data }));
  }

	render() {

		console.log(this.state.users);
		
		return <div className='card_list'>{ this.state.users ? this.state.users.map((user, index) => 
			<UserCard
				key={index}
				index={index}
				user={user}
				// setSelectedUser={setSelectedUser}
				// selectedUserIndex={selectedUserIndex}
			/>) : "Loading..."}</div>
	}
}

export default UserList
