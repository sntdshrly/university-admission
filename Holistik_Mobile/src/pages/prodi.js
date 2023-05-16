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
} from 'react-native';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProgressBar, MD3Colors, Searchbar, List} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Service from '../helper/service';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const ProdiScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [ProdiList, setProdiList] = useState([]);
  const [FilteredProdiList, setFilteredProdiList] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    FetchProdi();
  }, [navigation]);

  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredProdiList(ProdiList);
    } else {
      const filteredList = ProdiList.filter(program =>
        program.toLowerCase().includes(query.toLowerCase()),
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
    navigation.navigate('ScoreScreen');
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
    const body = JSON.stringify();
    Service.DefaultGET(
      'https://holistik.it.maranatha.edu/api/faculties/fetch',
      body,
    )
      .then(res => {
        const retval = res.data.success;
        if (retval) {
          setLoading(false);
          const studyPrograms = res.data.data.map(item => item.name).flat();
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
          <Text style={styles.h1white}>Pilih Prodi Anda</Text>
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

          <List.Section>
            <List.Subheader>Pilihan Program Studi</List.Subheader>
            {FilteredProdiList.map((program, index) => (
              <List.Item
                key={index}
                title={program}
                left={() => <List.Icon icon="book-education-outline" />}
                onPress={handleItemPress}
              />
            ))}
          </List.Section>
        </ScrollView>
        <ProgressBar progress={0.3} color={'#579EF1'} />
      </View>
    </View>
  );
};

export default ProdiScreen;
