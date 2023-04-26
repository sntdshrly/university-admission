import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Main Screen');
    }, 3000); // change this to the amount of time you want your splash screen to be displayed

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Slash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreen;
