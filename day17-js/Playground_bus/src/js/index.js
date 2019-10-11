/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
class Bus {
  constructor(direction, stations, seats, passengers) {
    this.direction = direction;
    this.stations = stations;
    this.seats = seats;
    this.passengers = passengers;
    this.lastStation = this.stations[0];
  }

  current() {
    return this.lastStation;
  }

  next() {
    this.lastStation = ++this.stations;
    return this.lastStation;
  }
}

const routes = [
  new Bus('Prague to Vienna', ['Prague', 'Jihlava', 'Brno', 'Břeclav', 'Vienna'], 80, 10),
  new Bus('Vienna to Prague', ['Vienna', 'Břeclav', 'Brno', 'Jihlava', 'Prague'], 80, 50),
];
