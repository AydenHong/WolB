/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import NextButton from '../components/NextButton';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CancelButton from '../components/CancelButton'



export default class LoanScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: <CancelButton onPress={() => navigation.navigate('Home')}/>,
      title: '대출 현황',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 20
      }
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/docu.png')}
          style={styles.pic}
        />
        <NextButton
        title='뒤로 가기'
        onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'

  },
  title: {
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },
  header:{
    padding:5,
    paddingRight: 18
  },
  arrange: {
    paddingTop: 8,
    color: 'gray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 30
  },
  right      : {
  paddingRight : 15,
  marginLeft   : 'auto'
},
  container2 : {
    width          : '100%',
    // height: '100%',
    flexDirection  : 'row',
    alignItems     : 'center',
    justifyContent : 'space-between',
    padding        : 5,
    // marginTop      : 15
},
  authColor:{
    color: 'tomato',
    paddingRight: 30,
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  arrange2: {
    paddingTop: 8,
    color: 'gray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 30
  },
  pic: {
    width: 380,
    height: 650,
    padding:5,
    backgroundColor: 'red',
    resizeMode: 'stretch',
  }
});
