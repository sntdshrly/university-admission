import React, {useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Login</Text>
      <View style={{height: (ScreenHeight * 5) / 100}} />
      <TextInput
        style={styles.inputEmail}
        placeholder={'Email Address'}
        // onChangeText={(text) => handleValidation(text)}
        // value={value}
        // secureTextEntry={secureTextEntry}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputEmail}
        placeholder={'Password'}
        // onChangeText={(text) => handleValidation(text)}
        // value={value}
        // secureTextEntry={secureTextEntry}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.h2white}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: (ScreenWidth * 10) / 100,
  },
  h1: {
    fontSize: 30,
    fontWeight: '400',
    color: '#000000',
  },
  h2white: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  inputEmail: {
    height: (ScreenHeight * 5) / 100,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    width: (ScreenWidth * 80) / 100,
    marginVertical: (ScreenHeight * 1) / 100,
  },

  buttonLogin: {
    backgroundColor: '#000000',
    width: (ScreenWidth * 80) / 100,
    height: (ScreenHeight * 7) / 100,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});

export default LoginScreen;
