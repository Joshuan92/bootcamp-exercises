import React from 'react';
import './answer.scss';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: null,
    };
  }

  render() {
    return (
      <div className="answer">
        <div className="answer__user">
          { this.props.user }
        <div className="answer__text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
