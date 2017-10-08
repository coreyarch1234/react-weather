//This component takes in a date, temperature, weather description, humidity and wind type
// It displays thise data in a weatherRow. Export this weather row.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default WeatherRow = (props) => {
    return (
        <View style = {styles.dayTemp}>
            <Text>{props.day}</Text>
            <Text>{props.temp}</Text>

            <View style = {styles.weatherInfo}>
                <Text>{props.description}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    dayTemp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingTop: 50,
        width: '100%',
        // backgroundColor: 'purple'
    },
    day: {
        fontSize: 20,
        fontWeight: '200',
        paddingBottom: 4
    },
    weather: {
        fontSize: 18,
        fontWeight: '400'
    },
    weatherInfo: {
        flexDirection: 'column'
    }
});
