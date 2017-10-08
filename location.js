// Take either a current location or remote location and get the lat/lon coordinates
// Make a weather api request with those coordinates and get weather info for 5 days.
// weather info is date, temperature, weather description, humidity and wind type
//
// Fill weatherRow component with the weather info for those 5 days and store them in an array.
// Export this array to App.js and there, display the rows in a scroll view.
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WeatherRow from './weatherRow';


export default class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherJSON: null,
            weatherShow: null
        }
        // this.weatherJSON();
    }

    componentWillMount(){

    }
    convertDay(timeStamp) {
        const days = ["Mon","Tues","Wed","Thurs","Fri","Sat", "Sun"];
        const testDate = new Date(timeStamp * 1000);
        const testDay = testDate.getDay();
        console.log("the test day is: " + testDay);
        console.log("the day ISSSSS: " + days[testDay]);
        return days[testDay]
    }

    createWeatherComponents(weatherData){
        const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        const daysTimeStamp = weatherData //array of days [0 - 6]
        var weatherWeekObj = [];
        var weatherShow = [];
        for (const [index, element] of days.entries()){
            var currentDay = daysTimeStamp[index];
            weatherShow.push(<WeatherRow key={index} day={this.convertDay(currentDay.time)} temp={currentDay.temperatureHigh} description={currentDay.summary}/>);
            console.log("index: " + index);
            if (index == days.length - 1){
                console.log("we reached it");
                this.setState({weatherShow: weatherShow});
            }
        }
    }

    weatherJSON(){
        const apikey = '2a479a5ffb1ba14071e4c9bc65704b63';
        const path = `https://api.darksky.net/forecast/2a479a5ffb1ba14071e4c9bc65704b63/42.3601,-71.0589`;
        console.log("it is fetching");
        fetch(path)
        .then(res => res.json())
        .then((json) => {
            console.log(json.daily.data);
            this.setState({ weatherJSON: json.daily.data}, function(){
                this.createWeatherComponents(this.state.weatherJSON);
            });
        })
        .catch(err => console.log(err));
    }

    showWeather(){
        if (this.state.weatherShow != null){
            return this.state.weatherShow;
        }else{
            return <Text>{''}</Text>
        }
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {this.showWeather()}
                </ScrollView>
            </View>
        )
    }
}
