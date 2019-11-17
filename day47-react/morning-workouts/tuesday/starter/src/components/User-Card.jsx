import React, { Component } from 'react'

class UserCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { user, index } = this.props

		console.log(user);
		
		return (
			<div
				// className={`card_container${
				// 	index === selectedUserIndex ? ' selected_user' : ''
				// }`}
				// onClick={() => {
				// 	setSelectedUser(index)
				// }}
			>
				<h5>{user.name}</h5>
				<div className='card_details'>
					<p>Age: {user.age}</p>
					<p>Rank: {user.rank}</p>
				</div>
			</div>
		)
	}
}

export default UserCard