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
} from 'react-native';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProgressBar, MD3Colors, Searchbar, List} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const ProdiScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedValue, setSelectedValue] = useState('option1');

  useEffect(() => {}, [navigation]);

  const onChangeSearch = query => setSearchQuery(query);

  const handleItemPress = () => {
    navigation.navigate('ScoreScreen');
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
          <Text style={styles.h1white}>Pilih Prodi Anda</Text>
        </View>
      </View>
      <View style={styles.basehome_pageprodi}>
        <ScrollView>
          <Searchbar
            placeholder="Search Prodi"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchBar}
            placeholderTextColor="#ffffff"
            inputStyle={styles.h3white}
            iconColor="#ffffff"
          />

          <List.Section>
            <List.Subheader>Pilihan Program Studi</List.Subheader>
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
            <List.Item
              title="Item 1"
              left={() => <List.Icon icon="book-education-outline" />}
              onPress={handleItemPress}
            />
          </List.Section>
        </ScrollView>
        <ProgressBar progress={0.3} color={'#579EF1'} />
      </View>
    </View>
  );
};

export default ProdiScreen;
