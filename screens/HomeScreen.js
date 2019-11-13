/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class HomeScreen extends Component {


  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'HOME',
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
      <View
      style={{
        borderBottomColor : 'lightgray',
        borderBottomWidth : 1,
        paddingTop: 20
      }}
    />
        <Image style={{width:420, height: 320, alignSelf : 'center'}}
          source={{uri: 'http://www.insjournal.co.kr/news/photo/201907/478_378_3522.png'}}/>
        <View
        style={{
          borderBottomColor : 'lightgray',
          borderBottomWidth : 1,
        }}
        />
        <View style={styles.container2}>
          <TouchableOpacity style={styles.iconpadding} onPress={() => this.props.navigation.navigate('Contract')}>
            <Image style={styles.iconsize}
                         source={{uri: 'http://www.pngmart.com/files/8/Contract-PNG-HD.png'}}>
            </Image>
            <Text
            style={styles.iconfont}>계약 관리</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconpadding} onPress={() => this.props.navigation.navigate('Account')}>
            <Image style={styles.iconsize}
                         source={{uri: 'http://www.pngnames.com/files/4/Bank-PNG-Photo-Background.png'}}>
            </Image>
            <Text
            style={styles.iconfont}>계좌 등록</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconpadding} onPress={() => this.props.navigation.navigate('Payment')}>
            <Image style={styles.iconsize}
                         source={{uri: 'https://img.icons8.com/plasticine/2x/us-dollar.png'}}>
            </Image>
            <Text
            style={styles.iconfont}>선납 할인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.iconpadding2} onPress={() => this.props.navigation.navigate('Loan')}>
            <Image style={styles.iconsize}
                         source={{uri: 'https://cdn0.iconfinder.com/data/icons/30-hardware-line-icons/64/Search-512.png'}}>
            </Image>
            <Text
            style={styles.iconfont}>대출 현황</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconpadding2} onPress={() => this.props.navigation.navigate('Board')}>
            <Image style={styles.iconsize}
                         source={{uri: 'https://www.nempos.com/media/filer_public_thumbnails/filer_public/26/c6/26c65d48-ed1c-41c0-b85d-e71058025208/img-dashboard.png__500x500_q85_crop_subsampling-2_upscale.png'}}>
            </Image>
            <Text
            style={styles.iconfont}>대쉬 보드</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconpadding2} onPress={() => this.props.navigation.navigate('Request')}>
            <Image style={styles.iconsize}
                         source={{uri: 'https://images.vexels.com/media/users/3/136398/isolated/preview/b682d2f42a8d5d26e484abff38f92e78-flat-message-icon-by-vexels.png'}}>
            </Image>
            <Text
            style={styles.iconfont}>요청 하기</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line:{
    borderBottomColor:  'lightgray',
    borderBottomWidth: 1
  },
  container2: {
    flexDirection: 'row',
    marginTop: 30
  },
  iconfont:{
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 15
  },
  iconsize:{
    width: 80,
    height: 80
  },
  iconpadding:{
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  iconpadding2:{
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
  }
});
