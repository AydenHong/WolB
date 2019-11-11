/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Ionicons,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
import NextButton from '../components/NextButton';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

export default class ContractInfoScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {

      title: '계약관리',
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
        <Text style={styles.title}>세입자 인증</Text>
        <Text style={{paddingLeft: 25, fontSize: 15}}>세입자 이름</Text>
        <TextInput style={styles.arrange}
          placeholder="이름을 입력해주세요."
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}
        />
        <Text style={{paddingLeft: 25, fontSize: 15}}>주민등록번호</Text>
        <TextInput style={styles.arrange}
          placeholder="주민등록번호를 입력해주세요. (-포함)"
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}/>
        <Text style={{paddingLeft: 25, fontSize: 15}}>휴대전화 번호</Text>
        <View style={styles.container2}>
          <TextInput style={styles.arrange2}
            placeholder="휴대폰 번호를 입력해주세요. (-제외)"
            multiline={false}
            onChangeText={(text) => this.setState({ content: text })}>
          </TextInput>
          <View style={styles.right}>
            <TouchableOpacity onPress={() => Alert.alert('입력하신 번호로 \n인증번호를 전송 했습니다.')}><Text style={styles.authColor}>인증번호 발송</Text></TouchableOpacity>
          </View>
        </View>
        <Text style={{paddingLeft: 25, fontSize: 15}}>인증 번호</Text>
        <View style={styles.container2}>
          <TextInput style={styles.arrange2}
            placeholder="SMS로 받으신 인증번호를 입력해주세요."
            multiline={false}
            onChangeText={(text) => this.setState({ content: text })}>
          </TextInput>
          <View style={styles.right}>
            <TouchableOpacity onPress={() => Alert.alert('휴대폰 인증이 완료 되었습니다.')}><Text style={styles.authColor}>휴대폰 인증</Text></TouchableOpacity>
          </View>
        </View>
        <NextButton
          title='다음 단계로'
          onPress={() => this.props.navigation.navigate('Address')}/>
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

});
