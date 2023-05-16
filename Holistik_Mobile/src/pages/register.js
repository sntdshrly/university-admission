import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from '../helper/service';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;
const RegisterScreen = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const CheckRegister = () => {
    if (Username.length == 0 || Password.length == 0 || Email.length == 0) {
      Alert.alert('Info', 'Silahkan Masukkan Data Yang Masih Kosong');
    } else {
      Alert.alert(
        '',
        'apakah anda yakin?',
        [
          {
            text: 'Tidak',
          },
          {
            text: 'Iya',
            onPress: () => {
              Register();
            },
          },
        ],
        {cancelable: false},
      );
    }
  };

  const Register = () => {
    setLoading(true);
    const body = JSON.stringify({
      email: Email,
      password: Password,
      name: Username,
    });
    Service.Default('https://holistik.it.maranatha.edu/api/users/store', body)
      .then(res => {
        const retval = res.data.success;
        console.log(retval);
        if (retval) {
          setLoading(false);

          Alert.alert(
            'Register Berhasil',
            'Silahkan Login',
            [
              {
                text: 'OK',
                onPress: () => {
                  navigation.navigate('LoginScreen');
                },
              },
            ],
            {cancelable: false},
          );
        } else {
          setLoading(false);

          Alert.alert('Gagal', 'Silahkan Coba Lagi');
        }

        // console.log(profile.nama)
      })
      .catch(err => {
        console.log(err), setLoading(false);
      });
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

  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 0,
          alignItems: 'flex-start',
          marginTop: (WH * 1) / 100,
        }}>
        {isLoader()}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StartScreen');
          }}>
          <IconMC name="arrow-left-thick" size={30} color="#000000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.h1}>Register</Text>
      <View style={{height: (WH * 5) / 100}} />
      <TextInput
        style={styles.inputEmail}
        placeholder={'Nama'}
        onChangeText={text => setUsername(text)}
        value={Username}
        // secureTextEntry={secureTextEntry}
        keyboardType="default"
      />
      <TextInput
        style={styles.inputEmail}
        placeholder={'Email Address'}
        onChangeText={text => setEmail(text)}
        value={Email}
        // secureTextEntry={secureTextEntry}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputEmail}
        placeholder={'Password'}
        onChangeText={text => setPassword(text)}
        value={Password}
        secureTextEntry={true}
        keyboardType="default"
      />

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          CheckRegister();
        }}>
        <Text style={styles.h2white}>Register</Text>
      </TouchableOpacity>
      <View style={{height: 20}}></View>
    </View>
  );
};

export default RegisterScreen;
