import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Modal,
} from 'react-native';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from '../helper/service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  const [ShowDaftar, setShowDaftar] = useState(false);
  const [Lulus, setLulus] = useState(false);
  const [checkloading, setCheckLoading] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [EmailData, setEmailData] = useState('');

  useEffect(() => {
    // FetchStorage();

    userProfile();
  }, [navigation]);

  const FetchStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData');
      // console.log(value);
      const parsedArray = JSON.parse(value);
      setEmailData(parsedArray);
      // console.log('Retrieved array value:', parsedArray);
    } catch (error) {
      console.log('Error retrieving array value:', error);
    }
  };

  const checkLulus = () => {
    setTimeout(() => {
      setCheckLoading(false);
    }, 2000);
  };

  const isLoader = () => {
    return (
      <Modal
        transparent={true}
        visible={Loading}
        onRequestClose={() => {
          setLoading(false);
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={styles.containerLoading}>
            <ActivityIndicator size={(WW * 10) / 100} color={'#579EF1'} />
            <Text style={styles.h3black}>Loading... </Text>
          </View>
        </View>
      </Modal>
    );
  };

  const userProfile = async () => {
    setLoading(true);
    Service.DefaultGETnoBody(
      'https://holistik.it.maranatha.edu/api/user-profile',
      navigation,
    )
      .then(res => {
        const retval = res.data.success;
        // console.log(retval);
        if (retval) {
          setEmailData(res.data.data.userDetail);
          setLoading(false);
          // navigation.replace('StartScreen');
        } else {
          setLoading(false);
          Alert.alert('Gagal', 'Silahkan Coba Lagi');
        }
      })
      .catch(err => {
        console.log(err), setLoading(false);
      });
  };

  const logout = () => {
    setLoading(true);
    const body = JSON.stringify({});
    Service.Default(
      'https://holistik.it.maranatha.edu/api/logout',
      body,
      navigation,
    )
      .then(async res => {
        const retval = res.data.success;
        if (retval) {
          setLoading(false);
          await AsyncStorage.removeItem('@userData');
          await AsyncStorage.removeItem('@Token');
          navigation.replace('StartScreen');
        } else {
          setLoading(false);
          Alert.alert('Gagal', 'Silahkan Coba Lagi');
        }
      })
      .catch(err => {
        console.log(err), setLoading(false);
      });
  };

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
      {isLoader()}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconMC name="atom" size={60} color="grey" />
        <View style={{marginHorizontal: (WW * 2) / 100}}>
          <Text style={styles.h1bold}>Hi,</Text>
          <Text style={styles.h1bold}>{EmailData.name}</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            right: (WW * 0.5) / 100,
            top: (WH * -1) / 100,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: (WW * 1) / 100}} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notifications');
              }}>
              <IconMC name="bell-outline" size={35} color="#000000" />
            </TouchableOpacity>
            <View style={{marginHorizontal: (WW * 1) / 100}} />
            <TouchableOpacity
              onPress={() => {
                logout();
              }}>
              <IconMC name="logout-variant" size={35} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {ShowDaftar ? (
        <View style={styles.basehomestatus}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.box_basehomestatus}>
              <Text style={styles.h1white}>80</Text>
              <Text style={styles.h3white}>Nilai</Text>
            </View>
            <View style={styles.box_basehomestatus}>
              <Text style={[styles.h2white, {textAlign: 'center'}]}>
                Teknik Informatika
              </Text>
              <Text style={styles.h3white}>Jurusan</Text>
            </View>
            <View style={styles.circlestatus}>
              {!Lulus && !checkloading ? (
                <>
                  <ActivityIndicator size={70} color="#ff0000" />
                  <Text style={[styles.h3black, {fontWeight: 'bold'}]}>
                    Gagal
                  </Text>
                </>
              ) : Lulus && !checkloading ? (
                <>
                  <ActivityIndicator size={70} color="#00ff00" />
                  <Text style={[styles.h3black, {fontWeight: 'bold'}]}>
                    Lulus
                  </Text>
                </>
              ) : (
                <>
                  <ActivityIndicator size={70} color="#172dff" />
                  <Text style={[styles.h3black, {fontWeight: 'bold'}]}>
                    Loading...
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}

      <View style={styles.basehome}>
        <TouchableOpacity
          style={styles.basehomecard}
          onPress={() => {
            // setShowDaftar(!ShowDaftar);
            // checkLulus();
            // setCheckLoading(true);
            // setLulus(Math.random() >= 0.5);
            navigation.navigate('ScoreScreen');
          }}>
          <Text style={styles.h3white}>Input Nilai</Text>

          <Image
            source={require('../assets/books.png')}
            style={styles.imagebookcard}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.basehomecard}
          onPress={() => {
            navigation.navigate('ProdiScreen');
          }}>
          <Text style={styles.h3white}>Pendaftaran </Text>

          <Image
            source={require('../assets/books.png')}
            style={styles.imagebookcard}></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
