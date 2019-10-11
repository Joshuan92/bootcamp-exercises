import React from 'react';
import './question.scss';
import Answer from '../answer/answer.jsx';

const answers = [
  { user: 'baked_turtle', text: 'Your question is stupid.' },
  { user: 'naked_eye', text: 'Chill out, man!' },
  { user: 'faked_icecream', text: 'Holy Moly!' },
]

export default class Question extends React.Component {
  render() {
    return (
      <div className="question">
        <div className="question__line">{this.props.question}</div>
        <div className="question__user">{this.props.owner}</div>
      
      {answers.map(item => (
        <Answer
        user= {item.user}
        text= {item.text}
        
        />
      ))}
      
      </div>
    );
  }
}
