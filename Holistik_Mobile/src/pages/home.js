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

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Main Screen');
    }, 3000); // change this to the amount of time you want your splash screen to be displayed

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
});

export default HomeScreen;
