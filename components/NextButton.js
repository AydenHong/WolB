/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

export default class MyComponent extends Component {

  static defaultProps = {
    title: 'Button',
    // onPress: () => {},
    color: 'white'
};

constructor(props) {
    super(props);
    this.state = {};
}

  render() {
    return (
      <View style={styles.buttonStyle}>
        <TouchableOpacity
              style={styles.bigButton}
              onPress={this.props.onPress}>
            <Text style={styles.title}>{this.props.title}</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#43DE67',
    width: 300,
    height: 50,

  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 50
  },
  title:{
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'

  }
});
