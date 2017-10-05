import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayTemp from './dayTemp';

export default class App extends React.Component {
    constructor(props){
        super(props);

        // this.days = [];

        this.state = {
            weatherDescription: null,
            humidity: null,
            wind: null
        }
    }

    componentWillMount(){
        //set the state of the weather description
        // this.findWeather();
    }

    //fetch the description of the weather of San Francisco and set the state
    findWeather() {
        const apikey = '6c407087861910b3e50bd32e9989c59d';
        const path = `http://api.openweathermap.org/data/2.5/weather?appid=${apikey}&q=san+francisco`;
        fetch(path)
        .then(res => res.json())
        .then((json) => {
            // console.log(json);
            if (json.cod === 200){
                const description = json.weather[0].main;
                const weatherHumidity = json.main.humidity;
                const windValue = json.wind.speed;
                if (windValue < 5.0){
                    windValue = "Calm";
                }
                if (windValue > 5.0 && windValue < 15.0){
                    windValue = "Moderate";
                }
                if (windValue > 15.0){
                    windValue = "Extreme";
                }
                console.log(description);
                console.log(weatherHumidity);
                console.log(windValue);
                this.setState({weatherDescription: description, humidity: weatherHumidity, wind: windValue});
            }else{
                console.log("not status 200");
                this.setState({weatherDescription: null});
            }
        })
        .catch(err => console.log(err));
    }
    //display the weather description if it is not null
    showWeather(){
        if (this.state.weatherDescription){
            return (
                [
                <Text key = "description" style= {styles.weatherDescription}>{this.state.weatherDescription}</Text>,
                <Text key = "humidity" style= {styles.weatherDescription}>Humidity: {this.state.humidity}%</Text>,
                <Text key = "wind" style= {styles.weatherDescription}>Wind: {this.state.wind}</Text>
                ]
            )

        }else{
            return <Text style= {styles.weatherDescription}>{''}</Text>
        }
    }



    render() {
        //Update Day
        const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        const date = new Date();
        const dayNumber = date.getDay();
        const day = days[dayNumber];

        //Update Month
        var months = new Array();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
        const monthNumber = date.getMonth();
        const month = months[monthNumber];

        // utc -> new Date(utc * 1000)

        //Update Month
        const weatherArray = ["72˚", "65˚", "64˚", "74˚", "80˚", "69˚", "63˚"];
        const currentWeather = weatherArray[dayNumber];

        //get all of the days/temperatures components in an array
        const listDaysTemp = () => {
            return days.map((day, index) => {
                return <DayTemp key = {index} valueDay = {days[index]} valueWeather = {weatherArray[index]} />
            })
        }

        return (
            <View style= {styles.container}>
                <Text style= {styles.state}>San Francisco</Text>
                <Text style= {styles.date}>{day}, {month} {dayNumber + 1}</Text>
                <Text style= {styles.currentWeather}>{currentWeather}</Text>

                <View style= {styles.weatherContainer}>
                    {this.showWeather()}
                </View>

                {/* REACT COMMENT */}
                <View style= {styles.dayContainer}>
                    {listDaysTemp()}
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
        justifyContent: 'center',
        height: '100%',
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



// const MyText = (props) => {
// return (
//     <View style={{display:flex, flexDirection:column, justifyContent:center, height:props.height}}>
//         <Text style={props.textStyle}>{props.text}</Text>
//     </View
//     )
// }

// const SimpleComponent = () => {
//     const mapper = () => {
//
//     }
//
//     return ();
// }


// var function scope

// function() {
//     var x = 0; // only available in this function
//     for (var i = 0; i < 10; i++) {
//
//     }
//
//     // i is function scope
// }
//
// for (var i = 0; i < 10; i++) {
//
// }
//
// // i is global
//
//
// // let block scope
//
// for(let i = 0; i < 9; i++) {
//     // i only available in this block!
// }
//
//
// {
//     let g = 88;
//     // only in this block g
// }
