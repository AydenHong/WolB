/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import NextButton from '../components/NextButton';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CancelButton from '../components/CancelButton'

export default class HomeScreen extends Component {

  functionOne(){
    this.props.navigation.navigate('Account3')
  };

  functionTwo(){
    Alert.alert('선택하신 금액을 \n결제했습니다.')
  };

  functionCombined(){
    this.functionTwo();
    this.functionOne();
  };

    static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: <CancelButton onPress={() => navigation.navigate('Home')}/>,
      title: '선납',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 20
      }
    }
  }

  constructor (props) {
    super(props)
    this.state={
      data:['\n\n 3개월 옵션 \n \n      500,000 x 3 = 1,500,000원',
            '\n\n 6개월 옵션 \n \n      450,000 x 6 = 2,700,000원',
            '\n\n 12개월 옵션 \n \n      400,000 x 12 = 4,800,000원'],
      checked:0,

  }
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>선납하기</Text>
        {
          this.state.data.map((data,key)=>{
            return(
              <View key={data}>
                {this.state.checked==key?
                  <TouchableOpacity style={styles.btn}>
                    <Image style={styles.radio} source={{url:'http://d30y9cdsu7xlg0.cloudfront.net/png/868143-200.png'}}/>
                    <Text>{data}</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={()=>{this.setState({checked:key})}} style={styles.btn}>
                    <Image style={styles.radio} source={{url:'http://d30y9cdsu7xlg0.cloudfront.net/png/868142-200.png'}}/>
                    <Text>{data}</Text>
                  </TouchableOpacity>
                }
              </View>
            )
          })
        }
        <NextButton
          title='결제하기'
          onPress={() => this.functionTwo()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
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
  radio: {
    height: 20,
    width: 20,
    marginRight: 20
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50,
    marginBottom: 60,


  }

});
