import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from '../helper/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
  const [Email, setEmail] = useState('avinashawin48@gmail.com');
  const [Password, setPassword] = useState('avinash');
  const [Loading, setLoading] = useState(false);

  useEffect(() => {}, []);

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

  const CheckLogin = () => {
    if (Password.length == 0 || Email.length == 0) {
      Alert.alert('Info', 'Silahkan Masukkan Data Yang Masih Kosong');
    } else {
      Login();
    }
  };

  const Login = () => {
    setLoading(true);
    const body = JSON.stringify({
      email: Email,
      password: Password,
    });
    Service.DefaultnonToken(
      'https://holistik.it.maranatha.edu/api/login',
      body,
      navigation,
    )
      .then(async res => {
        const retval = res.data.success;
        // console.log(retval);
        if (retval) {
          // console.log(res.data.data.user);
          setLoading(false);
          const valueJSON = JSON.stringify(res.data.data.user);
          await AsyncStorage.setItem('@userData', valueJSON);
          await AsyncStorage.setItem('@Token', res.data.data.access_token)
            .then(() => {
              console.log('JSON object saved successfully.');
            })
            .catch(error => {
              console.log('Error saving JSON object:', error);
            });
          navigation.replace('HomeScreen');
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
    <View style={styles.container}>
      {isLoader()}

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
        onChangeText={email => setEmail(email)}
        value={Email}
        // secureTextEntry={secureTextEntry}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputEmail}
        placeholder={'Password'}
        onChangeText={password => setPassword(password)}
        value={Password}
        secureTextEntry={true}
        keyboardType="default"
      />

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          CheckLogin();
        }}>
        <Text style={styles.h2white}>Login</Text>
      </TouchableOpacity>
      <View style={{height: 20}}></View>
    </View>
  );
};

export default LoginScreen;
