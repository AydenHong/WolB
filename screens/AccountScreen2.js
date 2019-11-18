/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import CancelButton from '../components/CancelButton';
import { Divider } from 'react-native-elements';
import { Ionicons } from "@expo/vector-icons";

export default class MyComponent extends Component {

  functionOne(){
    this.props.navigation.navigate('Home')
  };

  functionTwo(){
    Alert.alert('결제가 완료 \n됐습니다.')
  };

  functionCombined(){
    this.functionTwo();
    this.functionOne();
  };

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: <CancelButton onPress={() => navigation.navigate('Home')}/>,
      title: '계좌 등록',
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

        <Text style={{fontSize: 20, fontWeight: 'bold', padding: 25, marginTop: 35}}>보유 계좌 (매성준님)</Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.bankimages}
            source={{uri: 'https://post-phinf.pstatic.net/MjAxNzA4MDJfMjEy/MDAxNTAxNjAxNzcwNDEz.o_TRfvx1Lb5jaehAVZNMs3NCjL_DB3CmaA_mzxN6QJ4g.DivsPXGnEvHHMwvoK8E73AnBb1kOLz71rK4gZm1cn8Mg.JPEG/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC3.jpg?type=w1200'}}>
          </Image>
          <View style={styles.banktext}>
          <Text style={{fontSize: 12}}>카카오뱅크 통장 - 보통예금</Text>
          <Text>201,000 원</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.bankimages}
            source={{uri: 'https://ncache.ilbe.com/files/attach/new/20150801/377678/97310469/6305648353/31736c09975f42dd212ee0d5163fc4e3.png'}}>
          </Image>
          <View style={styles.banktext}>
          <Text style={{fontSize: 12}}>신한예금통장 - 저축예금</Text>
          <Text>1,899,000 원</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.bankimages}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUt5JsTYSD_hOHToVtQBN2b_UPf4N4u5IYX0r6DoBhRlWW5Ndb&s'}}>
          </Image>
          <View style={styles.banktext}>
          <Text style={{fontSize: 12}}>하나은행통장 - 보통예금</Text>
          <Text>20,821,000 원</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.bankimages}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3AavWvxpZTKWtCyTzWbije6dcbQLWYWnSLseXEgY5JQwk5xdb'}}>
          </Image>
          <View style={styles.banktext}>
          <Text style={{fontSize: 12}}>우리은행저축통장 - 저축예금</Text>
          <Text>682,420 원</Text>
          </View>
        </View>
        <View style={styles.grayline}/>

        <View style={{flex:1, flexDirection: 'row'}}>

          <TouchableOpacity style={styles.icon}>
            <Ionicons
              name={'ios-shuffle'}
              size={70}
              color={'black'}/>
            <Text style={{fontSize: 12, paddingRight:10}}>편집/북마크</Text>
          </TouchableOpacity>

          <Divider style={styles.divider}/>

          <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Account2')}>
            <Ionicons
              name={'ios-add-circle-outline'}
              size={70}
              color={'black'}/>
            <Text style={{fontSize: 12, paddingLeft: 7}}>계좌 연결</Text>
          </TouchableOpacity>

          <Divider style={styles.divider}/>

          <TouchableOpacity
            style={styles.icon}
            onPress={() => this.functionCombined()}
            >
            <Ionicons
              name={'ios-cash'}
              size={70}
              color={'black'}/>
            <Text style={{fontSize:12, paddingLeft: 7}}>자동 이체</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.grayline2}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bankimages:{
    width:50,
    height: 50,
    marginLeft: 30,
    marginTop: 20,
    marginRight: 25
  },
  banktext:{
    flexDirection: 'column',
    marginTop: 25
  },
  grayline:{
    borderColor: 'whitesmoke',
    borderBottomWidth: 10,
    marginTop: 125,
  },
  divider:{
    height: 90,
    width: 2,
    marginTop: 15
  },
  icon:{
    paddingTop: 25,
    paddingLeft: 40,
    paddingRight: 25,
    flex: 1
  },
  grayline2:{
    borderColor: 'whitesmoke',
    borderBottomWidth: 10,

  },
  header:{
    padding:5,
    paddingRight: 18
  }
});
