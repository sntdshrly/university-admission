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
} from 'react-native';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  const [ShowDaftar, setShowDaftar] = useState(false);
  const [Lulus, setLulus] = useState(false);
  const [checkloading, setCheckLoading] = useState(true);

  useEffect(() => {}, [navigation]);

  const checkLulus = () => {
    setTimeout(() => {
      setCheckLoading(false);
    }, 2000);
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconMC name="atom" size={60} color="grey" />
        <View style={{marginHorizontal: (WW * 2) / 100}}>
          <Text style={styles.h3black}>Hi,</Text>
          <Text style={styles.h1bold}>Kafka</Text>
        </View>
        <View style={{position: 'absolute', right: (WW * 1) / 100}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HistoryScreen');
              }}>
              <IconMC name="history" size={35} color="#000000" />
            </TouchableOpacity>
            <View style={{marginHorizontal: (WW * 1) / 100}} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notifications');
              }}>
              <IconMC name="bell-outline" size={35} color="#000000" />
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
            setShowDaftar(!ShowDaftar);
            checkLulus();
            setCheckLoading(true);
            setLulus(Math.random() >= 0.5);
          }}>
          <Text style={styles.h3white}>Pendaftaran Reguler -Genap</Text>

          <Image
            source={require('../assets/books.png')}
            style={styles.imagebookcard}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.basehomecard}
          onPress={() => {
            navigation.navigate('ProdiScreen');
          }}>
          <Text style={styles.h3white}>Pendaftaran Reguler -Ganjil</Text>

          <Image
            source={require('../assets/books.png')}
            style={styles.imagebookcard}></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
