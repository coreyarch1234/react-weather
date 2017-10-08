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

        const dayOne = daysTimeStamp[0];
        const dayTwo = daysTimeStamp[1];
        const dayThree = daysTimeStamp[2];
        const dayFour = daysTimeStamp[3];
        const dayFive = daysTimeStamp[4];
        const daySix = daysTimeStamp[5];
        const daySeven = daysTimeStamp[6];

        var weatherWeekObj =
        [[this.convertDay(daysTimeStamp[0].time),dayOne.summary,dayOne.temperatureHigh],[this.convertDay(daysTimeStamp[1].time),dayTwo.summary,dayTwo.temperatureHigh],[this.convertDay(daysTimeStamp[2].time),dayThree.summary,dayThree.temperatureHigh],
        [this.convertDay(daysTimeStamp[3].time),dayFour.summary,dayFour.temperatureHigh],[this.convertDay(daysTimeStamp[4].time),dayFive.summary,dayFive.temperatureHigh], [this.convertDay(daysTimeStamp[5].time),daySix.summary,daySix.temperatureHigh], [this.convertDay(daysTimeStamp[6].time),daySeven.summary,daySeven.temperatureHigh]]

        var weatherShow = [
            <WeatherRow key= "1" day={weatherWeekObj[0][0]} temp={weatherWeekObj[0][1]} description={weatherWeekObj[0][2]} />,
            <WeatherRow key= "2" day={weatherWeekObj[1][0]} temp={weatherWeekObj[1][1]} description={weatherWeekObj[1][2]} />,
            <WeatherRow key= "3" day={weatherWeekObj[2][0]} temp={weatherWeekObj[2][1]} description={weatherWeekObj[2][2]} />,
            <WeatherRow key= "4" day={weatherWeekObj[3][0]} temp={weatherWeekObj[3][1]} description={weatherWeekObj[3][2]} />,
            <WeatherRow key= "5" day={weatherWeekObj[4][0]} temp={weatherWeekObj[4][1]} description={weatherWeekObj[4][2]} />,
            <WeatherRow key= "6" day={weatherWeekObj[5][0]} temp={weatherWeekObj[5][1]} description={weatherWeekObj[5][2]} />,
            <WeatherRow key= "7" day={weatherWeekObj[6][0]} temp={weatherWeekObj[6][1]} description={weatherWeekObj[6][2]} />
        ]
        this.setState({weatherShow: weatherShow});
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
