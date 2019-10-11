import React from 'react';
import ReactDOM from 'react-dom';

import Question from './question/question.jsx';

import './index.scss';
import './index.html';

const questions = [
  { owner: 'banana', question: 'Anal pain.' },
  { owner: 'hafacek', question: 'lesoparky jsou spatnr' },
  
]



class App extends React.Component {
  render() {
    return (
      <>
        {questions.map(item => (
        <Question 

        owner={item.owner}
        question={item.question}
        
        />
        
        ))}
      </>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
