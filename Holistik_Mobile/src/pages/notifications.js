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
  Modal,
  FlatList,
} from 'react-native';
import {styles} from '../style/styleGlobal';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Service from '../helper/service';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;

const Notifications = ({navigation}) => {
  const [formattedDate, setFormattedDate] = useState('');
  const [Loading, setLoading] = useState(false);
  const [NotifData, setNotifData] = useState(false);
  const [EmailData, setEmailData] = useState(false);

  useEffect(() => {
    const date = new Date();
    const options = {year: 'numeric', month: 'short', day: 'numeric'};
    const formatted = date.toLocaleDateString('en-US', options);
    setFormattedDate(formatted);
    FetchStorage();
    FetchNotif();
  }, [navigation]);

  const FetchStorage = async () => {
    try {
      setLoading(true);
      const value = await AsyncStorage.getItem('@userData');
      // console.log(value);
      const parsedArray = JSON.parse(value);
      setEmailData(parsedArray);
      // console.log('Retrieved array value:', parsedArray);
      setLoading(false);
    } catch (error) {
      setLoading(false);

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

  const FetchNotif = async () => {
    console.log(EmailData.id);
    setLoading(true);
    Service.DefaultGETnoBody(
      'https://holistik.it.maranatha.edu/api/users/' +
        EmailData.id +
        '/notifications/fetch',
      navigation,
    )
      .then(res => {
        const retval = res.data.success;
        // console.log(retval);
        if (retval) {
          setNotifData(res.data.data);
          setLoading(false);
          console.log(res.data.data);
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

  NotifCard = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.cardnotif}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.iconnotifcard}>
            {item.is_read ? (
              <IconMC name="bell-outline" size={35} color="#7f7f7f" />
            ) : (
              <IconMC name="bell-outline" size={35} color="#ffffff" />
            )}
          </View>
          <View style={{padding: (WW * 2) / 100, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.h2white}>Notification {index}</Text>
              <View
                style={{
                  right: -(WW * 9) / 100,
                }}>
                <Text style={styles.h4white}>
                  {new Date(item.created_at).toLocaleDateString('en-GB')}
                </Text>
              </View>
            </View>
            <Text style={styles.h4white}>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
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
          <Text style={styles.h1white}>Notifications</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            right: -(WW * 5) / 100,
          }}>
          <Text style={styles.h3white}>{formattedDate}</Text>
        </View>
      </View>

      <View style={styles.basehome_page}>
        <View>
          <FlatList
            data={NotifData}
            renderItem={NotifCard}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Notifications;
