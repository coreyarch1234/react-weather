// Take either a current location or remote location and get the lat/lon coordinates
// Make a weather api request with those coordinates and get weather info for 5 days.
// weather info is date, temperature, weather description, humidity and wind type
//
// Fill weatherRow component with the weather info for those 5 days and store them in an array.
// Export this array to App.js and there, display the rows in a scroll view.
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WeatherRow from './weatherRow';

var moment = require('moment');
// var current = moment();
// var currentDay = current.format("DD");
// var currentMonth = current.format("MMMM");



export default class Location extends React.Component {
    constructor(props){
        super(props);

        this.current = moment();
        this.currentDay = this.current.format("DD");
        this.currentDayName = this.current.format("dddd");
        this.currentMonth = this.current.format("MMMM");
        this.currentCity = props.currentCity;

        this.state = {
            weatherJSON: null,
            weatherShow: null
        }
        this.weatherJSON();
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
            weatherShow.push(<WeatherRow key={index} day={this.convertDay(currentDay.time)} temp={Math.round(currentDay.temperatureHigh)} description={currentDay.summary}/>);
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
            this.setState({weatherJSON: json.daily.data}, function(){
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

    showCurrentDateTemp(){
        console.log("this is reached");
        console.log("current day name: "  + this.currentDayName);
        console.log("current day name: "  + this.currentMonth);
        console.log("current day name: "  + this.currentDay);
        if (this.state.weatherJSON != null){
            return (
                <View style= {styles.container}>
                    <Text style= {styles.state}>{this.currentCity}</Text>
                    <Text style= {styles.date}>{this.currentDayName}, {this.currentMonth} {this.currentDay}</Text>
                    <Text style= {styles.weatherDescription}>{this.state.weatherJSON[0].summary}</Text>
                    <Text style= {styles.currentWeather}>{this.state.weatherJSON[0].temperatureHigh}˚</Text>
                </View>
            )
        }else{
            return <Text>{''}</Text>
        }
    }

    render() {
        return (
            <View>

                <ScrollView contentContainerStyle={style.center}>
                    {this.showWeather()}
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }

});


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        // backgroundColor: 'purple'

    },
    state: {
        fontSize: 40,
        fontWeight: '300',
        paddingBottom: 10,
        // flex: 1
    },
    date:{
        fontSize: 25,
        fontWeight: '200',
        paddingBottom: 15,
        // flex: 1
    },
    dayTemp: {
        width: 50,
        height: 50
    },
    dayContainer: {
       flexDirection: 'row',
    },
    currentWeather: {
       fontSize: 70,
       paddingBottom: 5,
    //    flex: 1,
    //    backgroundColor: 'cyan'
    },
    weatherDescription: {
       fontSize: 18,
       paddingBottom: 10,
       fontWeight: '100',
       margin: 'auto'
   },
   weatherContainer: {
       flexDirection: 'column',
       alignItems: 'center',
   }
});
