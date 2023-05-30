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
} from 'react-native';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProgressBar, MD3Colors, Searchbar, List} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const ScoreScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

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
          <Text style={styles.h1white}>Input Nilai Anda</Text>
        </View>
      </View>
      <View style={styles.basehome_pageprodi}>
        <ScrollView>
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Matematika'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'nilai Bahasa Indo'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'nilai Bahasa Inggris'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Fisika'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Kimia'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Biologi'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Ekonomi'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Geografi'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Sosiologi'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Bahasa Mandarin'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Bahasa Jepang'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Bahasa Korea'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder={'Nilai Bahasa Jerman'}
            // onChangeText={(text) => handleValidation(text)}
            // value={value}
            secureTextEntry={true}
            keyboardType="default"
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <Text style={styles.h2white}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScoreScreen;
