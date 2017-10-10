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
            currentCity: null
        }
    }

    componentWillMount(){
    }

    setCity(city){
        if (city){
            console.log("set city is: " + city)
            this.setState({currentCity: city});
        }
    }

    showState(){
        console.log("THE NEW CITY IS: " + this.state.currentCity);
        if (this.state.currentCity != null){
            console.log("THE NEW NEW CITY IS: " + this.state.currentCity);
            return (
                <View style= {styles.locationContainer}>
                    <LocationData currentCity={this.state.currentCity}/>
                </View>
            )
        }
    }



    render() {

        // pass city into location component as prop
        return (
            <View style= {styles.container}>
                <View style= {styles.cityContainer}>
                    <SubmitCity onSubmit={(term) => {
                        console.log("the new city is: ", term);
                        this.setCity(term);
                    }} />
                </View>

                {this.showState()}
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
