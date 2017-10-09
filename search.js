import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class SubmitCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ''
    }
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type in a new city!"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                 () => this.props.onSubmit(this.state.text)
              }>
              <Text style = {styles.submitButtonText}> Submit </Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = {

    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },

    submitButtonText:{
        color: 'white'
    }
}

// <Text style={{padding: 10, fontSize: 42}}>
//   {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
// </Text>
