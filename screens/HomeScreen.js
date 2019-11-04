/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Ionicons,
  TouchableOpacity
} from 'react-native';

export default class MyComponent extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: <View style={styles.header}/>,
      headerRight: <View style={styles.header}>
                      <TouchableOpacity><Text style={{fontSize: 15, color: 'gray'}}>Cancel</Text></TouchableOpacity>
                    </View>,
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
          placeholder="주민등록번호를 입력해주세요 (-포함)"
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}/>
        <Text style={{paddingLeft: 25, fontSize: 15}}>휴대전화 번호</Text>
        <TextInput style={styles.arrange}
          placeholder="휴대폰 번호를 입력해주세요. (-제외)"
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold'
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

});
