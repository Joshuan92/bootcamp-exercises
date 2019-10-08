import React from 'react';
import './index.scss';

export default class TermDatabase extends React.Component {
  render() {
    return (
      <div className="term">
        <div className="term__name">
          {this.props.term}
        </div>
        <div className="term__definition">{this.props.definition}</div>
      </div>
    );
  }
}
