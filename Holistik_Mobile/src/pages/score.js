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
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ProgressBar,
  MD3Colors,
  Searchbar,
  List,
  DataTable,
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Service from '../helper/service';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const ScoreScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [matematika_KKMGenap, setMatematika_KKMGenap] = useState('');
  const [matematika_KKMGanjil, setMatematika_KKMGanjil] = useState('');
  const [matematika_Genap, setMatematika_Genap] = useState('');
  const [matematika_Ganjil, setMatematika_Ganjil] = useState('');

  const [bahasaIndonesia_KKMGenap, setBahasaIndonesia_KKMGenap] = useState('');
  const [bahasaIndonesia_KKMGanjil, setBahasaIndonesia_KKMGanjil] =
    useState('');
  const [bahasaIndonesia_Genap, setBahasaIndonesia_Genap] = useState('');
  const [bahasaIndonesia_Ganjil, setBahasaIndonesia_Ganjil] = useState('');

  const [bahasaInggris_KKMGenap, setBahasaInggris_KKMGenap] = useState('');
  const [bahasaInggris_KKMGanjil, setBahasaInggris_KKMGanjil] = useState('');
  const [bahasaInggris_Genap, setBahasaInggris_Genap] = useState('');
  const [bahasaInggris_Ganjil, setBahasaInggris_Ganjil] = useState('');

  const [fisika_KKMGenap, setFisika_KKMGenap] = useState('');
  const [fisika_KKMGanjil, setFisika_KKMGanjil] = useState('');
  const [fisika_Genap, setFisika_Genap] = useState('');
  const [fisika_Ganjil, setFisika_Ganjil] = useState('');

  const [kimia_KKMGenap, setKimia_KKMGenap] = useState('');
  const [kimia_KKMGanjil, setKimia_KKMGanjil] = useState('');
  const [kimia_Genap, setKimia_Genap] = useState('');
  const [kimia_Ganjil, setKimia_Ganjil] = useState('');

  const [biologi_KKMGenap, setBiologi_KKMGenap] = useState('');
  const [biologi_KKMGanjil, setBiologi_KKMGanjil] = useState('');
  const [biologi_Genap, setBiologi_Genap] = useState('');
  const [biologi_Ganjil, setBiologi_Ganjil] = useState('');

  const [ekonomi_KKMGenap, setEkonomi_KKMGenap] = useState('');
  const [ekonomi_KKMGanjil, setEkonomi_KKMGanjil] = useState('');
  const [ekonomi_Genap, setEkonomi_Genap] = useState('');
  const [ekonomi_Ganjil, setEkonomi_Ganjil] = useState('');

  const [geografi_KKMGenap, setGeografi_KKMGenap] = useState('');
  const [geografi_KKMGanjil, setGeografi_KKMGanjil] = useState('');
  const [geografi_Genap, setGeografi_Genap] = useState('');
  const [geografi_Ganjil, setGeografi_Ganjil] = useState('');

  const [sosiologi_KKMGenap, setSosiologi_KKMGenap] = useState('');
  const [sosiologi_KKMGanjil, setSosiologi_KKMGanjil] = useState('');
  const [sosiologi_Genap, setSosiologi_Genap] = useState('');
  const [sosiologi_Ganjil, setSosiologi_Ganjil] = useState('');

  const [bahasaMandarin_KKMGenap, setBahasaMandarin_KKMGenap] = useState('');
  const [bahasaMandarin_KKMGanjil, setBahasaMandarin_KKMGanjil] = useState('');
  const [bahasaMandarin_Genap, setBahasaMandarin_Genap] = useState('');
  const [bahasaMandarin_Ganjil, setBahasaMandarin_Ganjil] = useState('');

  const [bahasaJepang_KKMGenap, setBahasaJepang_KKMGenap] = useState('');
  const [bahasaJepang_KKMGanjil, setBahasaJepang_KKMGanjil] = useState('');
  const [bahasaJepang_Genap, setBahasaJepang_Genap] = useState('');
  const [bahasaJepang_Ganjil, setBahasaJepang_Ganjil] = useState('');

  const [bahasaKorea_KKMGenap, setBahasaKorea_KKMGenap] = useState('');
  const [bahasaKorea_KKMGanjil, setBahasaKorea_KKMGanjil] = useState('');
  const [bahasaKorea_Genap, setBahasaKorea_Genap] = useState('');
  const [bahasaKorea_Ganjil, setBahasaKorea_Ganjil] = useState('');

  const [bahasaJerman_KKMGenap, setBahasaJerman_KKMGenap] = useState('');
  const [bahasaJerman_KKMGanjil, setBahasaJerman_KKMGanjil] = useState('');
  const [bahasaJerman_Genap, setBahasaJerman_Genap] = useState('');
  const [bahasaJerman_Ganjil, setBahasaJerman_Ganjil] = useState('');

  const [Loading, setLoading] = useState(false);

  const [EmailData, setEmailData] = useState('');

  useEffect(() => {
    FetchStorage();
  }, [navigation]);

  const FetchStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData');
      console.log(value);
      const parsedArray = JSON.parse(value);
      setEmailData(parsedArray);
      // console.log('Retrieved array value:', parsedArray);
    } catch (error) {
      console.log('Error retrieving array value:', error);
    }
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

  const storeGrades = () => {
    setLoading(true);
    console.log(matematika_Ganjil);

    const body = JSON.stringify({
      data: [
        {
          subject_name: 'Matematika',
          semester: 'Ganjil',
          value: matematika_Ganjil,
          kkm: matematika_KKMGanjil,
        },
        {
          subject_name: 'Matematika',
          semester: 'Genap',
          value: matematika_Genap,
          kkm: matematika_KKMGenap,
        },
        {
          subject_name: 'Bahasa Indonesia',
          semester: 'Ganjil',
          value: bahasaIndonesia_Ganjil,
          kkm: bahasaIndonesia_KKMGanjil,
        },
        {
          subject_name: 'Bahasa Indonesia',
          semester: 'Genap',
          value: bahasaIndonesia_Genap,
          kkm: bahasaIndonesia_KKMGenap,
        },
        {
          subject_name: 'Bahasa Inggris',
          semester: 'Ganjil',
          value: bahasaInggris_Ganjil,
          kkm: bahasaInggris_KKMGanjil,
        },
        {
          subject_name: 'Bahasa Inggris',
          semester: 'Genap',
          value: bahasaInggris_Genap,
          kkm: bahasaInggris_KKMGenap,
        },
        {
          subject_name: 'Fisika',
          semester: 'Ganjil',
          value: fisika_Ganjil,
          kkm: fisika_KKMGanjil,
        },
        {
          subject_name: 'Fisika',
          semester: 'Genap',
          value: fisika_Genap,
          kkm: fisika_KKMGenap,
        },
        {
          subject_name: 'Kimia',
          semester: 'Ganjil',
          value: kimia_Ganjil,
          kkm: kimia_KKMGanjil,
        },
        {
          subject_name: 'Kimia',
          semester: 'Genap',
          value: kimia_Genap,
          kkm: kimia_KKMGenap,
        },
        {
          subject_name: 'Biologi',
          semester: 'Ganjil',
          value: biologi_Ganjil,
          kkm: biologi_KKMGanjil,
        },
        {
          subject_name: 'Biologi',
          semester: 'Genap',
          value: biologi_Genap,
          kkm: biologi_KKMGenap,
        },
        {
          subject_name: 'Ekonomi',
          semester: 'Ganjil',
          value: ekonomi_Ganjil,
          kkm: ekonomi_KKMGanjil,
        },
        {
          subject_name: 'Ekonomi',
          semester: 'Genap',
          value: ekonomi_Genap,
          kkm: ekonomi_KKMGenap,
        },
        {
          subject_name: 'Geografi',
          semester: 'Ganjil',
          value: geografi_Ganjil,
          kkm: geografi_KKMGanjil,
        },
        {
          subject_name: 'Geografi',
          semester: 'Genap',
          value: geografi_Genap,
          kkm: geografi_KKMGenap,
        },
        {
          subject_name: 'Sosiologi',
          semester: 'Ganjil',
          value: sosiologi_Ganjil,
          kkm: sosiologi_KKMGanjil,
        },
        {
          subject_name: 'Sosiologi',
          semester: 'Genap',
          value: sosiologi_Genap,
          kkm: sosiologi_KKMGenap,
        },
        {
          subject_name: 'Bahasa Mandarin',
          semester: 'Ganjil',
          value: bahasaMandarin_Ganjil,
          kkm: bahasaMandarin_KKMGanjil,
        },
        {
          subject_name: 'Bahasa Mandarin',
          semester: 'Genap',
          value: bahasaMandarin_Genap,
          kkm: bahasaMandarin_KKMGenap,
        },
        {
          subject_name: 'Bahasa Jepang',
          semester: 'Ganjil',
          value: bahasaJepang_Ganjil,
          kkm: bahasaJepang_KKMGanjil,
        },
        {
          subject_name: 'Bahasa Jepang',
          semester: 'Genap',
          value: bahasaJepang_Genap,
          kkm: bahasaJepang_KKMGenap,
        },
        {
          subject_name: 'Bahasa Korea',
          semester: 'Ganjil',
          value: bahasaKorea_Ganjil,
          kkm: bahasaKorea_KKMGanjil,
        },
        {
          subject_name: 'Bahasa Korea',
          semester: 'Genap',
          value: bahasaKorea_Genap,
          kkm: bahasaKorea_KKMGenap,
        },
        {
          subject_name: 'Bahasa Jerman',
          semester: 'Ganjil',
          value: bahasaJerman_Ganjil,
          kkm: bahasaJerman_KKMGanjil,
        },
        {
          subject_name: 'Bahasa Jerman',
          semester: 'Genap',
          value: bahasaJerman_Genap,
          kkm: bahasaJerman_KKMGenap,
        },
      ],
    });

    Service.Default(
      'https://holistik.it.maranatha.edu/api/grades/' + EmailData.id + '/store',
      body,
    )
      .then(res => {
        const retval = res.data.success;
        // console.log(retval);
        if (retval) {
          // setEmailData(res.data.data.userDetail);
          setLoading(false);
          Alert.alert('Berhasil', 'Data Berhasil Disimpan');
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

  const checknilai = () => {
    if (
      matematika_KKMGenap === '' ||
      matematika_KKMGanjil === '' ||
      matematika_Genap === '' ||
      matematika_Ganjil === '' ||
      bahasaIndonesia_KKMGenap === '' ||
      bahasaIndonesia_KKMGanjil === '' ||
      bahasaIndonesia_Genap === '' ||
      bahasaIndonesia_Ganjil === '' ||
      bahasaInggris_KKMGenap === '' ||
      bahasaInggris_KKMGanjil === '' ||
      bahasaInggris_Genap === '' ||
      bahasaInggris_Ganjil === '' ||
      fisika_KKMGenap === '' ||
      fisika_KKMGanjil === '' ||
      fisika_Genap === '' ||
      fisika_Ganjil === '' ||
      kimia_KKMGenap === '' ||
      kimia_KKMGanjil === '' ||
      kimia_Genap === '' ||
      kimia_Ganjil === '' ||
      biologi_KKMGenap === '' ||
      biologi_KKMGanjil === '' ||
      biologi_Genap === '' ||
      biologi_Ganjil === '' ||
      ekonomi_KKMGenap === '' ||
      ekonomi_KKMGanjil === '' ||
      ekonomi_Genap === '' ||
      ekonomi_Ganjil === '' ||
      geografi_KKMGenap === '' ||
      geografi_KKMGanjil === '' ||
      geografi_Genap === '' ||
      geografi_Ganjil === '' ||
      sosiologi_KKMGenap === '' ||
      sosiologi_KKMGanjil === '' ||
      sosiologi_Genap === '' ||
      sosiologi_Ganjil === '' ||
      bahasaMandarin_KKMGenap === '' ||
      bahasaMandarin_KKMGanjil === '' ||
      bahasaMandarin_Genap === '' ||
      bahasaMandarin_Ganjil === '' ||
      bahasaJepang_KKMGenap === '' ||
      bahasaJepang_KKMGanjil === '' ||
      bahasaJepang_Genap === '' ||
      bahasaJepang_Ganjil === '' ||
      bahasaKorea_KKMGenap === '' ||
      bahasaKorea_KKMGanjil === '' ||
      bahasaKorea_Genap === '' ||
      bahasaKorea_Ganjil === '' ||
      bahasaJerman_KKMGenap === '' ||
      bahasaJerman_KKMGanjil === '' ||
      bahasaJerman_Genap === '' ||
      bahasaJerman_Ganjil === ''
    ) {
      Alert.alert('Info', 'Silahkan Mengisi Data Yang Masih Kosong');
    } else {
      storeGrades();
    }
  };

  return (
    <View style={styles.container_blue}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <IconMC name="arrow-left-thick" size={35} color="#ffffff" />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginHorizontal: (WW * 2) / 100}}>
          <Text style={styles.h1white}>Input Nilai Anda</Text>
        </View>
      </View>
      <View style={styles.basehome_pageprodi}>
        {isLoader()}
        <ScrollView>
          <View>
            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.headerCell}>Mata Pelajaran</Text>
              </View>
              <View style={{width: (WW * 15) / 100, justifyContent: 'center'}}>
                <Text style={styles.headerCell}>KKM Ganjil</Text>
              </View>
              <View style={{width: (WW * 15) / 100}}>
                <Text style={styles.headerCell}>Nilai Ganjil</Text>
              </View>
              <View style={{width: (WW * 15) / 100, justifyContent: 'center'}}>
                <Text style={styles.headerCell}>KKM Genap</Text>
              </View>
              <View style={{width: (WW * 15) / 100}}>
                <Text style={styles.headerCell}>Nilai Genap</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Matematika</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={matematika_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setMatematika_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={matematika_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setMatematika_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={matematika_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setMatematika_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={matematika_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setMatematika_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>
            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Bahasa Indonesia</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={bahasaIndonesia_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setBahasaIndonesia_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaIndonesia_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaIndonesia_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaIndonesia_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaIndonesia_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaIndonesia_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaIndonesia_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>

            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Bahasa Inggris</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={bahasaInggris_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setBahasaInggris_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaInggris_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaInggris_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaInggris_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaInggris_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaInggris_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaInggris_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>
            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Fisika</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={fisika_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setFisika_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={fisika_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setFisika_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={fisika_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setFisika_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={fisika_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setFisika_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>

            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Kimia</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={kimia_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setKimia_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={kimia_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setKimia_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={kimia_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setKimia_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={kimia_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setKimia_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>
            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Biologi</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={biologi_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setBiologi_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={biologi_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBiologi_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={biologi_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBiologi_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={biologi_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBiologi_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>

            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Ekonomi</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={ekonomi_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setEkonomi_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={ekonomi_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setEkonomi_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={ekonomi_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setEkonomi_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={ekonomi_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setEkonomi_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>

            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Geografi</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={geografi_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setGeografi_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={geografi_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setGeografi_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={geografi_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setGeografi_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={geografi_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setGeografi_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>
            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Sosiologi</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={sosiologi_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setSosiologi_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={sosiologi_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setSosiologi_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={sosiologi_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setSosiologi_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={sosiologi_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setSosiologi_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>

            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Bahasa Mandarin</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={bahasaMandarin_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setBahasaMandarin_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaMandarin_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaMandarin_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaMandarin_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaMandarin_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaMandarin_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaMandarin_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>

            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Bahasa Jepang</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={bahasaJepang_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setBahasaJepang_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaJepang_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaJepang_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaJepang_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaJepang_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaJepang_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaJepang_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>
            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Bahasa Korea</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={bahasaKorea_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setBahasaKorea_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaKorea_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaKorea_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaKorea_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaKorea_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaKorea_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaKorea_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>

            <View style={styles.tableRow}>
              <View style={{width: (WW * 20) / 100}}>
                <Text style={styles.tableCell}>Bahasa Jerman</Text>
              </View>
              <View style={styles.boxScore}>
                <TextInput
                  style={styles.inputCell}
                  value={bahasaJerman_KKMGanjil}
                  keyboardType="numeric"
                  onChangeText={value => {
                    setBahasaJerman_KKMGanjil(value);
                  }}
                />
              </View>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaJerman_Ganjil}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaJerman_Ganjil(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaJerman_KKMGenap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaJerman_KKMGenap(value);
                    }}
                  />
                </View>
              </Text>
              <Text style={styles.headerCell}>
                <View style={styles.boxScore}>
                  <TextInput
                    style={styles.inputCell}
                    value={bahasaJerman_Genap}
                    keyboardType="numeric"
                    onChangeText={value => {
                      setBahasaJerman_Genap(value);
                    }}
                  />
                </View>
              </Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonScore}
          onPress={() => {
            // checknilai();
            storeGrades();
          }}>
          <Text style={styles.h2white}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScoreScreen;
