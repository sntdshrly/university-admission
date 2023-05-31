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

  useEffect(() => {}, [navigation]);

  const onChangeSearch = query => setSearchQuery(query);

  const handleItemPress = () => {
    navigation.navigate('ScoreScreen');
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
                    value={matematika_Ganjil}
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
            checknilai();
          }}>
          <Text style={styles.h2white}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScoreScreen;
