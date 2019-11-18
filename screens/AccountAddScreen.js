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
  Button,
  Image
} from 'react-native';
import NextButton from '../components/NextButton';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SmallButton from '../components/SmallButton';
import CancelButton from '../components/CancelButton';

export default class ContractInfoScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: <CancelButton onPress={() => navigation.navigate('Home')}/>,
      title: '계좌 연결',
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
      <View style={{flexDirection:'row'}}>
        <Text style={{paddingBottom:  25, paddingLeft: 25, fontSize: 18, fontWeight: 'bold', paddingTop: 10}}>선택하신 은행:  우리은행</Text>
        <Image style={styles.right}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3AavWvxpZTKWtCyTzWbije6dcbQLWYWnSLseXEgY5JQwk5xdb'}}/>
      </View>
        <Text style={{paddingLeft: 25, fontSize: 15}}>계좌 번호</Text>

        <TextInput style={styles.arrange}
          placeholder="계좌번호를 입력해주세요. (-제외)"
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}
        />
        <Text style={{paddingLeft: 25, fontSize: 15}}>이름</Text>
        <TextInput style={styles.arrange}
          placeholder="이름을 입력해주세요."
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}/>

        <View style={styles.container2}>
          <SmallButton onPress={() => this.props.navigation.navigate('Bank')}
          title='은행선택'
          />
        <SmallButton onPress={() => Alert.alert('인증금액을 송금 했습니다.')}
          title='인증금액 송금'
          />
        </View>
        <Text style={{paddingLeft: 25, fontSize: 15}}>인증금액 입력</Text>
        <View style={styles.container2}>
          <TextInput style={styles.arrange2}
            placeholder="계좌로 받으신 인증금액을 입력해주세요."
            multiline={false}
            onChangeText={(text) => this.setState({ content: text })}>
          </TextInput>
          <View style={styles.right}>
            <TouchableOpacity onPress={() => Alert.alert('계좌 인증이 완료 되었습니다.')}><Text style={styles.authColor}>계좌 인증</Text></TouchableOpacity>
          </View>
        </View>
        <NextButton
          title='다음 단계로'
          onPress={() => this.props.navigation.navigate('Account3')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingBottom: 30,
    paddingTop: 30
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
  marginLeft   : 10,
  height: 45,
  width: 45
},
  container2 : {

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
