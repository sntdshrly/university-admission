import React, {useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Main Screen');
    }, 3000); // change this to the amount of time you want your splash screen to be displayed

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/header.png')}
      style={{
        width: WW,
        height: WH * 0.5,
        overflow: 'hidden',
        padding: (WW * 7) / 100,
        flex: 1,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconMC name="atom" size={60} color="grey" />
        <View style={{marginHorizontal: (WW * 2) / 100}}>
          <Text style={styles.h3black}>Hi,</Text>
          <Text style={styles.h1bold}>Kafka</Text>
        </View>
        <View style={{position: 'absolute', right: (WW * 1) / 100}}>
          <View style={{flexDirection: 'row'}}>
            <IconMC name="account-outline" size={35} color="#000000" />
            <View style={{marginHorizontal: (WW * 1) / 100}} />
            <IconMC name="bell-outline" size={35} color="#000000" />
          </View>
        </View>
      </View>
      <View style={styles.basehome}>
        <View style={styles.basehomecard}>
          <Text style={styles.h3white}>Pendaftaran Reguler -Genap</Text>

          <Image
            source={require('../assets/books.png')}
            style={styles.imagebookcard}></Image>
        </View>
        <View style={styles.basehomecard}>
          <Text style={styles.h3white}>Pendaftaran Reguler -Ganjil</Text>

          <Image
            source={require('../assets/books.png')}
            style={styles.imagebookcard}></Image>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
