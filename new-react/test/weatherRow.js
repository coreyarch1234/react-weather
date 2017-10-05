//This component takes in a date, temperature, weather description, humidity and wind type
// It displays thise data in a weatherRow. Export this weather row.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default WeatherRow(props) = () => {
    return (
        <View style = {styles.dayTemp}> //row
            <Text>Day</Text>
            <Text>Temperature</Text>

            <View style = {styles.weatherInfo}> // column
                <Text>WeatherDescription</Text>
                <Text>Humidity</Text>
                <Text>Wind Type</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dayTemp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
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

    }
});
