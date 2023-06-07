import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const SplashScreen = ({navigation}) => {
  const [EmailData, setEmailData] = useState('');

  useEffect(() => {
    FetchStorage();

    // userProfile();
  }, [navigation]);

  const FetchStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData');
      // console.log(value);
      const parsedArray = JSON.parse(value);
      setEmailData(parsedArray);

      if (value) {
        navigation.replace('HomeScreen');
      } else {
        navigation.replace('StartScreen');
      }

      // console.log('Retrieved array value:', parsedArray);
    } catch (error) {
      console.log('Error retrieving array value:', error);
    }
  };

  useEffect(() => {
    FetchStorage();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/splashscreen.png')}
        style={[
          styles.container,
          {
            width: ScreenWidth,
            height: ScreenHeight,
          },
        ]}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
});

export default SplashScreen;
