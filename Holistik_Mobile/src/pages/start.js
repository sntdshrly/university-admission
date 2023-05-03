import React, {useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.centered}>
      <ImageBackground
        source={require('../assets/splashscreen.png')}
        style={styles.imagebackground}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: (-WH * 20) / 100,
          }}>
          <IconMC name="atom" size={60} color="grey" />
          <Text style={styles.titleText}>Holistik</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: (WH * 5) / 100,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.buttonLogin_start}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={styles.h2white}>Login</Text>
          </TouchableOpacity>
          <View style={{width: 20}}></View>
          <TouchableOpacity
            style={styles.buttonRegister_start}
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            <Text style={styles.h2black}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;
