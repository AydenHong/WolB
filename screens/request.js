/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import NextButton from '../components/NextButton';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


export default class LoanScreen extends Component {

  functionOne(){
    this.props.navigation.navigate('Home')
  };

  functionTwo(){
    Alert.alert('집주인에게 요청사항을 \n 보냈습니다.')
  };

  functionCombined(){
    this.functionTwo();
    this.functionOne();
  };

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {

      title: '요청 하기',
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

      <View style={styles.text}>
        <Text style={{paddingLeft: 25, fontSize: 20}}>요청사항 :</Text>
        <TextInput style={styles.arrange}
                   placeholder="요청사항을 입력해 주세요."
                   multiline={true}
                   onChangeText={(text) => this.setState({ content: text })}
        />
      </View>

      <View style={styles.postingBox}>
							<Text
								style={{
									fontSize     : 20,
									color        : '#43DE67',
									textAlign    : 'center',
									marginTop    : 20,
									marginBottom : 35
								}}
							>
								사진이나 영상을 올려주세요
							</Text>
							<TouchableOpacity >
								<Ionicons
									name={'ios-add-circle'}
									size={80}
									color="#43DE67"
									style={{ textAlign: 'center' }}
								/>
							</TouchableOpacity>
      </View>
        <NextButton
                title= '제출 하기'
                onPress={() => this.functionTwo()}
        />

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  postingBox    : {
		height          : 220,
    backgroundColor : '#DEFFDB',


  },
  text: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 160,
    marginBottom: 50
  },
  arrange: {

    color: 'gray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 30
  },

});
