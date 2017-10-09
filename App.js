import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DayTemp from './dayTemp';
import WeatherRow from './weatherRow';
import LocationData from './location';
import SubmitCity from './search';

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentCity: "San Francisco"
        }
    }

    componentWillMount(){
        //set the state of the weather description
        // this.findWeather();
    }

    //fetch the description of the weather of San Francisco and set the state
    // `http://api.openweathermap.org/data/2.5/weather?appid=${apikey}&q=san+francisco`
    // findWeather() {
    //     const apikey = '6c407087861910b3e50bd32e9989c59d';
    //     const path = `https://api.darksky.net/forecast/96173cf95fce5fe7455bd3745d1436da/42.3601,-71.0589`;
    //     fetch(path)
    //     .then(res => res.json())
    //     .then((json) => {
    //         console.log(json);
    //         const description = json.currently.summary;
    //         const weatherHumidity = json.currently.humidity;
    //         var windValue = json.currently.windSpeed;
    //         console.log("the windSpeed is: " + windValue);
    //         if (windValue < 5.0){
    //             windValue = "Calm";
    //             console.log("the windSpeed is: " + windValue);
    //         }
    //         if (windValue > 5.0 && windValue < 15.0){
    //             windValue = "Moderate";
    //             console.log("the windSpeed is: " + windValue);
    //         }
    //         if (windValue > 15.0){
    //             windValue = "Extreme";
    //             console.log("the windSpeed is: " + windValue);
    //         }
    //         this.setState({weatherDescription: description, humidity: weatherHumidity, wind: windValue});
    //     })
    //     .catch(err => console.log(err));
    // }
    // //display the weather description if it is not null
    // showWeather(){
    //     if (this.state.weatherDescription){
    //         return (
    //             [
    //             <Text key = "description" style= {styles.weatherDescription}>{this.state.weatherDescription}</Text>,
    //             <Text key = "humidity" style= {styles.weatherDescription}>Humidity: {this.state.humidity}%</Text>,
    //             <Text key = "wind" style= {styles.weatherDescription}>Wind: {this.state.wind}</Text>
    //             ]
    //         )
    //
    //     }else{
    //         return <Text style= {styles.weatherDescription}>{''}</Text>
    //     }
    // }



    render() {
        //Update Day
        // const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        // const date = new Date();
        // const dayNumber = date.getDay();
        // const day = days[dayNumber];
        // const testDate = new Date(1507176000 * 1000);
        // const testDay = testDate.getDay();
        // console.log("the day is: " + days[testDay + 1]);
        //
        // //Update Month
        // var months = new Array();
        // var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
        // const monthNumber = date.getMonth();
        // const month = months[monthNumber];
        //
        // // utc -> new Date(utc * 1000)
        //
        // //Update Month
        // const weatherArray = ["72˚", "65˚", "64˚", "74˚", "80˚", "69˚", "63˚"];
        // const currentWeather = weatherArray[dayNumber];
        //
        // //get all of the days/temperatures components in an array
        // const listDaysTemp = () => {
        //     return days.map((day, index) => {
        //         return <DayTemp key = {index} valueDay = {days[index]} valueWeather = {weatherArray[index]} />
        //     })
        // }

        // pass city into location component as prop
        return (
            <View style= {styles.container}>
                <View style= {styles.cityContainer}>
                    <SubmitCity onSubmit={(term) => {
                        console.log("the new city is: ", term);
                        this.setState({currentCity: term});
                    }} />
                </View>
                <View style= {styles.locationContainer}>
                    <LocationData currentCity={this.state.currentCity}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        // backgroundColor: 'purple'

    },

    cityContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '20%',
        // backgroundColor: 'purple'

    },

    locationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '80%',
        // backgroundColor: 'purple'

    },
    state: {
        fontSize: 40,
        fontWeight: '300',
        paddingBottom: 5,
        // flex: 1
    },
    date:{
        fontSize: 25,
        fontWeight: '200',
        paddingBottom: 10,
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
       fontSize: 90,
       paddingBottom: 5,
    //    flex: 1,
    //    backgroundColor: 'cyan'
    },
    weatherDescription: {
       fontSize: 18,
       paddingBottom: 10,
       fontWeight: '100',
       marginRight: 25
   },
   weatherContainer: {
       flexDirection: 'column',
       alignItems: 'center',
   }
});

//
// <View style= {styles.dayContainer}>
//     {listDaysTemp()}
// </View>
