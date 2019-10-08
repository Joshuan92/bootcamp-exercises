import React from 'react';
import ReactDOM from 'react-dom';

import Day from './forecast/forecast.jsx';
import './forecast/style.css';
import './index.html';

const forecast = [
  {
    weekday: 'Mon',
    weather: 'cloudy',
    tempDay: 18,
    tempNight: 11,
  },
  {  
    weekday: 'Tue',
    weather: 'partly-cloudy',
    tempDay: 21,
    tempNight: 15,
  },
  {  
    weekday: 'Wed',
    weather: 'rainy',
    tempDay: 8,
    tempNight: 1,
  },
  {  
    weekday: 'Thu',
    weather: 'snowy',
    tempDay: -2,
    tempNight: -7,
  },
  {  
    weekday: 'Fri',
    weather: 'stormy-rain',
    tempDay: 28,
    tempNight: 21,
  },
  {  
    weekday: 'Sat',
    weather: 'stormy',
    tempDay: 35,
    tempNight: 27,
  },
  {  
    weekday: 'Sun',
    weather: 'sunny',
    tempDay: 28,
    tempNight: 22,
  },
];

class App extends React.Component {
  render() {
    return (
      <>
      {forecast.map(item => (
        <Day
        weekday= {item.weekday}
        weather= {item.weather}
        tempDay= {item.tempDay}
        tempNight= {item.tempNight}
        />

        
      ))}
    </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.week-forecast'));
