import React from 'react';
import './style.css';

export default class Day extends React.Component {
  render() {
    return (
      <div class="day-forecast">
        <div class="day-forecast__header">{this.props.weekday}</div>
        <div class="day-forecast__body">
          <div class={`day-forecast__image weather-${this.props.weather}`}></div>
          <div class="day-forecast__temps">
            <span class="temp-day">{this.props.tempDay}</span>
            <span class="temp-night">{this.props.temp}</span>
          </div>
        </div>
      </div>
    );
  }
}

