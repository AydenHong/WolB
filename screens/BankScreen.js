import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import CancelButton from '../components/CancelButton';

export default class MyComponent extends Component {

    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};

      return {
        headerRight: <CancelButton onPress={() => navigation.navigate('Home')}/>,
        title: '은행 선택',
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
        <Text style={styles.banktitle}>은행 선택</Text>
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <TouchableOpacity style={styles.banklist} onPress={() => this.props.navigation.navigate('AccountAdd')}>
            <Text style={styles.banktext}>우리</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>국민</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>SC제일</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>농협</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>신한</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>KEB</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>한국시티</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>기업</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>경남</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>광주</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>대구</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>도이치</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>부산</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>HSBC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>저축은행</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>MG</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>수협</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>신협</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>우체국</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>산업</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>전북</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>제주</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>중국건설</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.banklist}>
            <Text style={styles.banktext}>카카오</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banktitle: {
    fontSize: 25,
    marginTop: 50,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  banklist:{
    flex:1,
    padding: 10,
    textAlign: 'center',
  },
  banktext:{
    color: 'royalblue',
    fontSize: 20,
    textAlign: 'center'
  }

});
