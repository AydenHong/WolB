import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Ionicons,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { requireNativeViewManager } from '@unimodules/core';


export default class LogInScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Login',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 20
      }
    }
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

        <View style={styles.logo}>
              <Image
                style={{width: 180, height: 180}}
                source={require('../assets/images/Logo.png')}/>
        </View>
        <View style={styles.map2}>
          <Text style={{fontSize: 21, fontWeight: 'bold'}}>월비(WolB)</Text>
        </View>

        <View style={styles.text}>
          <Text style={{paddingLeft: 25, fontSize: 15,}}>Email</Text>
          <TextInput style={styles.arrange}
            placeholder="메일 주소를 입력해 주세요."
            multiline={false}
            onChangeText={(text) => this.setState({ content: text })}
          />

          <Text style={{paddingLeft: 25, fontSize: 15}}>Password</Text>
          <TextInput style={styles.arrange2}
            placeholder="비밀번호를 입력해 주세요."
            multiline={false}
            onChangeText={(text) => this.setState({ content: text })}
            secureTextEntry={true}
            />

            <TouchableOpacity style={{alignItems: 'flex-end', paddingRight: 50, marginBottom: 20}}
                onPress={() => {
                  Alert.alert('경표씨 화이팅')
                }}>

              <Text>Forget Password?</Text>
            </TouchableOpacity>
        </View>


        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.LogInButton}
            onPress={() => this.props.navigation.push('Home')}>
          <Text style={styles.logInText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.CacaoButton}
            onPress={() => {
              Alert.alert('카카오로그인~')
            }}>
          <Text style={styles.logInText}>카카오 계정으로 로그인 하기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.GoogleButton}
            onPress={() => {
              Alert.alert('구글로그인~')
            }}>
          <Text style={styles.logInText}>google계정으로 로그인 하기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 60, paddingRight: 70}}>
              <Text style={{fontSize : 15}}>You don't have any account?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SingUp')}
              >
                <Text style={{fontSize : 15 , color: '#43DE67'}}>Register</Text>
              </TouchableOpacity>
            </View>

        </View>


      </View>
      </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold'
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
  arrange2: {
    color: 'gray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 10

  },
  button: {
    alignItems: 'flex-end',
    backgroundColor: 'white',
    marginRight: 50,
  },
  LogInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43DE67',
    width: 300,
    height: 50,

  },
  CacaoButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8E600',
    width: 300,
    height: 50,

  },
  GoogleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4080F8',
    width: 300,
    height: 50,

  },
  buttonStyle: {
    paddingTop: 10,
    paddingVertical:10,

    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  logo: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map2: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {

    justifyContent: 'flex-end',
    paddingTop: 60,
  },
  logInText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    paddingRight:10,
    paddingBottom: 10,


  },

});
