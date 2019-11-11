import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Ionicons,
  TouchableOpacity,
  Image,
} from 'react-native';


export default class AddressScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: <View style={styles.headerRight}>
                      <TouchableOpacity><Text style={{fontSize: 15, color: 'gray'}}>Cancel</Text></TouchableOpacity>
                    </View>,
      title: 'Location',
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

        <View style={styles.map}>
              <Image
                style={{width: 400, height: 300}}
                source={{uri:
                'http://prt.map.naver.com/mashupmap/print?key=p1479108035384_-1132228080'
                }}/>
        </View>
        <View style={styles.text}>
          <Text style={{paddingLeft: 25, fontSize: 15,}}>임대 건물 주소</Text>
          <TextInput style={styles.arrange}
            placeholder="주소를 입력해 주세요."
            multiline={false}
            onChangeText={(text) => this.setState({ content: text })}
          />

          <Text style={{paddingLeft: 25, fontSize: 15}}>상세 주소</Text>
          <TextInput style={styles.arrange}
            placeholder="상세 주소를 입력해 주세요."
            multiline={false}
            onChangeText={(text) => this.setState({ content: text })}/>
        </View>

        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.bigButton}
            onPress={this.onPress}>
          <Text style={{fontSize: 23, color: 'white', marginTop: 10 }}>다음 단계로 이동</Text>
          </TouchableOpacity>
        </View>


      </View>
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
  headerRight:{
    padding:5,
    paddingRight: 18
  },
  headerLeft:{
    padding:5,
    paddingLeft: 18
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
  map: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 200,
  },

});
