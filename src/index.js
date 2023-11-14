import { weatherApp } from './weatherApp.js';

class indexJs {
  constructor() {
    this.weatherApp = new weatherApp();
  }
}

const newList = new indexJs();
