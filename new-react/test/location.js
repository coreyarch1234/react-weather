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
            weatherWeekObj:  "hh",
            weatherArray: [""]
        }
        this.findWeather();
    }

    componentWillMount(){
        //set the state of the weather description
        // this.findWeather();
    }
    convertDay(timeStamp) {
        const days = ["Mon","Tues","Wed","Thurs","Fri","Sat", "Sun"];
        const testDate = new Date(timeStamp * 1000);
        const testDay = testDate.getDay();
        console.log("the test day is: " + testDay);
        console.log("the day ISSSSS: " + days[testDay]);
        return days[testDay]
    }
    //fetch the weather info for 5 days
    findWeather() {
        const apikey = '6c407087861910b3e50bd32e9989c59d';
        const path = `https://api.darksky.net/forecast/96173cf95fce5fe7455bd3745d1436da/42.3601,-71.0589`;
        fetch(path)
        .then(res => res.json())
        .then((json) => {
            console.log(json);
            const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
            const daysTimeStamp = json.daily.data; //array of days [0 - 6]

            const dayOne = daysTimeStamp[0];
            const dayTwo = daysTimeStamp[1];
            const dayThree = daysTimeStamp[2];
            const dayFour = daysTimeStamp[3];
            const dayFive = daysTimeStamp[4];
            const daySix = daysTimeStamp[5];
            const daySeven = daysTimeStamp[6];

            var weatherWeekObjUpdated =
            [[this.convertDay(daysTimeStamp[0].time),dayOne.summary,dayOne.temperatureHigh],[this.convertDay(daysTimeStamp[1].time),dayTwo.summary,dayTwo.temperatureHigh],[this.convertDay(daysTimeStamp[2].time),dayThree.summary,dayThree.temperatureHigh],
            [this.convertDay(daysTimeStamp[3].time),dayFour.summary,dayFour.temperatureHigh],[this.convertDay(daysTimeStamp[4].time),dayFive.summary,dayFive.temperatureHigh], [this.convertDay(daysTimeStamp[5].time),daySix.summary,daySix.temperatureHigh], [this.convertDay(daysTimeStamp[6].time),daySeven.summary,daySeven.temperatureHigh]]

            var weatherItems = [<WeatherRow key= "1" day={weatherWeekObjUpdated[0][0]} temp={weatherWeekObjUpdated[0][1]} description={weatherWeekObjUpdated[0][2]} />,<WeatherRow key= "2" day={weatherWeekObjUpdated[1][0]} temp={weatherWeekObjUpdated[1][1]} description={weatherWeekObjUpdated[1][2]} />,
            <WeatherRow key= "3" day={weatherWeekObjUpdated[2][0]} temp={weatherWeekObjUpdated[2][1]} description={weatherWeekObjUpdated[2][2]} />,<WeatherRow key= "4" day={weatherWeekObjUpdated[3][0]} temp={weatherWeekObjUpdated[3][1]} description={weatherWeekObjUpdated[3][2]} />,
            <WeatherRow key= "5" day={weatherWeekObjUpdated[4][0]} temp={weatherWeekObjUpdated[4][1]} description={weatherWeekObjUpdated[4][2]} />,<WeatherRow key= "6" day={weatherWeekObjUpdated[5][0]} temp={weatherWeekObjUpdated[5][1]} description={weatherWeekObjUpdated[5][2]} />,
            <WeatherRow key= "7" day={weatherWeekObjUpdated[6][0]} temp={weatherWeekObjUpdated[6][1]} description={weatherWeekObjUpdated[6][2]} />]
            // var weatherWeekObjUpdated = {
            //     dayOne: [this.convertDay(daysTimeStamp[0].time),dayOne.summary],
            //     dayTwo: {
            //         day: this.convertDay(daysTimeStamp[1].time),
            //         description: dayTwo.summary
            //     },
            //     dayThree: {
            //         day: this.convertDay(daysTimeStamp[2].time),
            //         description: dayThree.summary
            //     },
            //     dayFour: {
            //         day: this.convertDay(daysTimeStamp[3].time),
            //         description: dayFour.summary
            //     },
            //     dayFive: {
            //         day: this.convertDay(daysTimeStamp[4].time),
            //         description: dayFive.summary
            //     },
            //     daySix: {
            //         day: this.convertDay(daysTimeStamp[5].time),
            //         description: daySix.summary
            //     },
            //     daySeven: {
            //         day: this.convertDay(daysTimeStamp[6].time),
            //         description: daySeven.summary
            //     }
            // }
            // console.log("HERE IS THE OBJECT: " + weatherWeekObjUpdated.dayOne.day)
            console.log("weatherItems: " + weatherItems);
            this.setState({ weatherWeekObj: weatherWeekObjUpdated, weatherArray: weatherItems});
        })
        .catch(err => console.log(err));
    }


    showWeather(){
        if (this.state.weatherWeekObj[2]){
            return (
                [
                    <WeatherRow key= "1" day={this.state.weatherWeekObj[0][0]} temp={this.state.weatherWeekObj[0][1]} description={this.state.weatherWeekObj[0][2]} />,
                    <WeatherRow key= "2" day={this.state.weatherWeekObj[1][0]} temp={this.state.weatherWeekObj[1][1]} description={this.state.weatherWeekObj[1][2]} />,
                    <WeatherRow key= "3" day={this.state.weatherWeekObj[2][0]} temp={this.state.weatherWeekObj[2][1]} description={this.state.weatherWeekObj[2][2]} />,
                    <WeatherRow key= "4" day={this.state.weatherWeekObj[3][0]} temp={this.state.weatherWeekObj[3][1]} description={this.state.weatherWeekObj[3][2]} />,
                    <WeatherRow key= "5" day={this.state.weatherWeekObj[4][0]} temp={this.state.weatherWeekObj[4][1]} description={this.state.weatherWeekObj[4][2]} />,
                    <WeatherRow key= "6" day={this.state.weatherWeekObj[5][0]} temp={this.state.weatherWeekObj[5][1]} description={this.state.weatherWeekObj[5][2]} />,
                    <WeatherRow key= "7" day={this.state.weatherWeekObj[6][0]} temp={this.state.weatherWeekObj[6][1]} description={this.state.weatherWeekObj[6][2]} />
                ]
            )

        }else{
            return <Text>{''}</Text>
        }
    }


    render(){
        return (
            <View>
                <ScrollView>
                    {this.showWeather()}

                </ScrollView>
            </View>

        )
    }
}
