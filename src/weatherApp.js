export class weatherApp {
  //weather stats
  condition = document.querySelector('.condition');
  location = document.querySelector('.location');
  icon = document.querySelector('.icon');
  degree = document.querySelector('.degree');
  feellike = document.querySelector('.feellike');
  wind = document.querySelector('.wind');
  humidity = document.querySelector('.humidity');
  searchLocation = 'thailand';

  //apisearch
  apiSearch = document.querySelector('.api-search');
  warning = document.querySelector('.warning');

  constructor() {
    this._fetchData();
    this._searchDate();
  }

  async _fetchData() {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=991ba51eacc4429ebf5131813231011&q=${this.searchLocation}`,
        { mode: 'cors' }
      );
      const data = await response.json();
      this.warning.classList.add('hide');
      this._insertHTML(data);
    } catch (err) {
      this.warning.classList.remove('hide');
      console.log('Something is wrong ->' + err);
    }
  }

  _insertHTML(data) {
    this.condition.textContent = `${data.current.condition.text}`;
    this.icon.src = `${data.current.condition.icon}`;
    this.location.textContent = `${data.location.name} , ${data.location.country}`;
    this.degree.textContent = `${data.current.temp_c}°C`;
    this.feellike.textContent = `FEELS LIKE : ${data.current.feelslike_c} °C`;
    this.wind.textContent = `WIND : ${data.current.wind_mph} MPH`;
    this.humidity.textContent = `HUMIDITY : ${data.current.humidity}%`;
  }

  _searchDate() {
    this.apiSearch.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.searchLocation = this.apiSearch.value;
        this._fetchData();
        this.apiSearch.value = '';
      }
    });
  }
}
