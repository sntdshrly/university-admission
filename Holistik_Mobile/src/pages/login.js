import React, {useEffect, useContext} from 'react';
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
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('StartScreen');
        }}>
        <IconMC name="arrow-left-thick" size={30} color="#000000" />
      </TouchableOpacity>
      <Text style={styles.h1}>Login</Text>
      <View style={{height: (WH * 5) / 100}} />
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
        secureTextEntry={true}
        keyboardType="default"
      />

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Text style={styles.h2white}>Login</Text>
      </TouchableOpacity>
      <View style={{height: 20}}></View>
    </View>
  );
};

export default LoginScreen;
