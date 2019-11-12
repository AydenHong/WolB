import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Ionicons,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import NextButton from '../components/NextButton';
import CancelButton from '../components/CancelButton';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class HostInfoScreen extends Component {

  functionOne(){
    this.props.navigation.navigate('Home')
  };

  functionTwo(){
    Alert.alert('집주인에게 계약생성 \n요청을 보냈습니다.')
  };

  functionCombined(){
    this.functionTwo();
    this.functionOne();
  };

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: <CancelButton
          onPress={() => this.props.navigation.push('Home')}/>,

      title: '집주인 정보',
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
        <Text style={styles.title}>집주인 정보</Text>
        <Text style={{paddingLeft: 25, fontSize: 15, paddingTop: 10}}>집주인 이름</Text>
        <TextInput style={styles.arrange}
          placeholder="이름을 입력해주세요."
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}
        />
        <Text style={{paddingLeft: 25, fontSize: 15}}>집주인 연락처</Text>
        <TextInput style={styles.arrange}
          placeholder="연락처를 입력해주세요 (-제외)"
          multiline={false}
          onChangeText={(text) => this.setState({ content: text })}/>
        <Text style={{paddingLeft: 25, fontSize: 15}}>임대 개시일</Text>
        <TextInput style={styles.arrange}
           placeholder="임대 개시 날짜를 입력해 주세요."
           multiline={false}
           onChangeText={(text) => this.setState({ content: text })}
        />
         <Text style={{paddingLeft: 25, fontSize: 15}}>임대 종료일</Text>
         <TextInput style={styles.arrange}
           placeholder="임대 종료 날짜를 입력해 주세요."
           multiline={false}
           onChangeText={(text) => this.setState({ content: text })}
         />

         <Text style={{paddingLeft: 25, fontSize: 15}}>임대료</Text>
         <TextInput style={styles.arrange}
           placeholder="임대료를 입력해 주세요."
           multiline={false}
           onChangeText={(text) => this.setState({ content: text })}
         />

           <NextButton
             title='계약 생성'
             onPress={() => this.functionCombined()}
          />

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

    color: 'gray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 30
  },
  redtap: {
    paddingTop: 8,
    color: 'gray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 50,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 30
  },

  title: {
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 50
  },


});
