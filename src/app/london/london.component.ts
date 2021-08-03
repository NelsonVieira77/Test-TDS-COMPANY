import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.scss']
})
export class LondonComponent implements OnInit {


  WeatherData: any;
  weather: any;
  rain: boolean;
  sunny: boolean;
  clouds: boolean;

  constructor(
    private elementRef: ElementRef,
    private router: Router) { }

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=86af2ffa1ea9da4b41402b2aa26a55ca')
      .then(response => response.json())
      .then(data => { this.setWeatherData(data); })

    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }


  setWeatherData(data) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    // this.WeatherData.temp = (this.WeatherData.weather.main);
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    for (var i = 0; i < data.weather.length; i++) {
      var value = data.weather[i];
      this.weather = value.main; // desnecessário, mas coloquei para clarificar
    }
    if (this.weather == "Rain") {
      this.rain = true;
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#545F6A';
    } else if (this.weather == "Sunny") {
      this.sunny = true;
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#0881F9';
    } else if (this.weather == "Clouds") {
      this.clouds = true;
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3B6F6F';
    }
    else if (this.weather == "Smoke") {
      this.clouds = true;
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#136060';
    }
    this.WeatherData.sunset_time = this.WeatherData.sunset_time.slice(0, -3);

  }
  voltar() {
    this.router.navigate([''])
  }

}
