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
  Modal,
  Alert,
} from 'react-native';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProgressBar, MD3Colors, Searchbar, List} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Service from '../helper/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const ProdiScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [ProdiList, setProdiList] = useState([]);
  const [FilteredProdiList, setFilteredProdiList] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [ProgressBarIndex, setProgressBarIndex] = useState(0.3);
  const [clickCount, setClickCount] = useState(0);
  const [clickCount_2, setClickCount_2] = useState(0);
  const [EmailData, setEmailData] = useState('');

  useEffect(() => {
    FetchProdi();
    FetchStorage();
  }, [navigation]);

  const FetchStorage = async () => {
    try {
      setLoading(true);

      const value = await AsyncStorage.getItem('@userData');
      console.log(value);
      const parsedArray = JSON.parse(value);
      setEmailData(parsedArray);
      // console.log('Retrieved array value:', parsedArray);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log('Error retrieving array value:', error);
    }
  };

  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredProdiList(ProdiList);
    } else {
      const filteredList = ProdiList.filter(program =>
        program.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredProdiList(filteredList);
    }
  };

  const handleBackspace = () => {
    if (searchQuery === '') {
      setFilteredProdiList(ProdiList);
    }
  };

  const handleItemPress = () => {
    if (clickCount % 2 == 0) {
      setProgressBarIndex(0.5);
    } else if (clickCount % 2 == 1) {
      setProgressBarIndex(0.3);
    }
    // Add more conditions for subsequent clicks

    setClickCount(clickCount + 1);
  };

  const ConfirmApplication = index => {
    setProgressBarIndex(0.75);
    // if (clickCount_2 % 2 == 0) {
    //   setProgressBarIndex(0.75);
    // } else if (clickCount_2 % 2 == 1) {
    //   setProgressBarIndex(0.5);
    // }
    // Add more conditions for subsequent clicks

    setClickCount_2(clickCount_2 + 1);
    Alert.alert('Konfirmasi', 'Apakah anda yakin akan melakukan pendaftaran?', [
      {text: 'Cancel'},
      {
        text: 'KONFIRMASI',
        onPress: () => {
          StoreApplication(index);
        },
      },
    ]);
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

  const FetchProdi = () => {
    setLoading(true);
    Service.DefaultGETnoBody(
      'https://holistik.it.maranatha.edu/api/faculties/fetch',
      navigation,
    )
      .then(res => {
        const retval = res.data.success;
        if (retval) {
          setLoading(false);
          const studyPrograms = res.data.data.flat();
          // console.log(res.data.data[0].study_programs[0].name);

          setProdiList(studyPrograms);
          setFilteredProdiList(studyPrograms);
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

  const StoreApplication = code => {
    console.log(code);
    setLoading(true);
    const body = JSON.stringify({
      study_program_code: code,
    });
    Service.Default(
      'https://holistik.it.maranatha.edu/api/applications/' +
        EmailData.id +
        '/store',
      body,
    )
      .then(res => {
        // console.log(res.data.success);
        const retval = res.data.success;
        if (retval) {
          setProgressBarIndex(1);

          setLoading(false);

          Alert.alert('Berhasil!', 'Silahkan Menunggu Hasil Penilaian');
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

  return (
    <View style={styles.container_blue}>
      {isLoader()}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <IconMC name="arrow-left-thick" size={35} color="#ffffff" />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginHorizontal: (WW * 2) / 100}}>
          <Text style={styles.h1white}>Pilih Prodi & Jurusan</Text>
        </View>
      </View>
      <View style={styles.basehome_pageprodi}>
        <ScrollView>
          <Searchbar
            placeholder="Cari Prodi"
            onChangeText={onChangeSearch}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace();
              }
            }}
            value={searchQuery}
            style={styles.searchBar}
            placeholderTextColor="#ffffff"
            inputStyle={styles.h3white}
            iconColor="#ffffff"
          />
          <List.Section title="Pilihan Program Studi & Jurusan">
            {FilteredProdiList.map((program, index) => (
              <List.Accordion
                key={index}
                title={program.name}
                left={() => <List.Icon icon="book-education-outline" />}
                onPress={() => handleItemPress()}>
                {program.study_programs.map((program1, index1) => (
                  <List.Item
                    title={program1.name}
                    key={index1}
                    onPress={() => {
                      ConfirmApplication(program1.code);
                    }}
                    left={() => <List.Icon icon="book-education" />}
                  />
                ))}
              </List.Accordion>
            ))}
          </List.Section>
        </ScrollView>
        <ProgressBar progress={ProgressBarIndex} color={'#579EF1'} />
      </View>
    </View>
  );
};

export default ProdiScreen;
