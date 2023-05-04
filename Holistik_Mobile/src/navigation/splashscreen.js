import React, {useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('StartScreen');
    }, 1000); // change this to the amount of time you want your splash screen to be displayed

    return () => clearTimeout(timer);
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
