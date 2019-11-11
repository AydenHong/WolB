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

export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: <View style={styles.headerLeft}>
      <TouchableOpacity><Text style={{fontSize: 15, color: 'gray'}}>Back</Text></TouchableOpacity>
    </View>,
      headerRight: <View style={styles.header}>
                      <TouchableOpacity><Text style={{fontSize: 15, color: 'gray'}}>Cancel</Text></TouchableOpacity>
                    </View>,
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
        <Text style={{paddingLeft: 25, fontSize: 15, paddingTop: 30}}>집주인 이름</Text>
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
         
         <View style={styles.buttonStyle}>
              <TouchableOpacity 
                    style={styles.bigButton}
                    onPress={() => {
                      Alert.alert('집주인에게 계약 확정요청을 보냈습니다.')
                    }}>
                  <Text style={{fontSize: 23, color: 'white', marginTop: 10 }}>계약 생성</Text>
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
  button: {
    alignItems: 'flex-end',
    backgroundColor: 'white',
    marginRight: 50,
  },
  bigButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43DE67',
    width: 300,
    height: 50,

  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 50
  },

  headerLeft:{
    padding:5,
    paddingLeft: 18,
  }
  

});