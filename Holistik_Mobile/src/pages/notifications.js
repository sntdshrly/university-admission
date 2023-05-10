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

const Notifications = ({navigation}) => {
  const [ShowDaftar, setShowDaftar] = useState(false);
  const [Lulus, setLulus] = useState(false);
  const [checkloading, setCheckLoading] = useState(true);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = {year: 'numeric', month: 'short', day: 'numeric'};
    const formatted = date.toLocaleDateString('en-US', options);
    setFormattedDate(formatted);
  }, [navigation]);

  const checkLulus = () => {
    setTimeout(() => {
      setCheckLoading(false);
    }, 2000);
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
        <TouchableOpacity style={styles.cardnotif}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconnotifcard}>
              <IconMC name="bell-outline" size={35} color="#ffffff" />
            </View>
            <View style={{padding: (WW * 2) / 100, justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.h2white}>Notification 3</Text>
                <View
                  style={{
                    position: 'absolute',
                    right: -(WW * 9) / 100,
                  }}>
                  <Text style={styles.h4white}>{formattedDate}</Text>
                </View>
              </View>
              <Text style={styles.h4white}>
                Berikut ada hasil keputusan yang diambil ......
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardnotif}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconnotifcard}>
              <IconMC name="bell-outline" size={35} color="#ffffff" />
            </View>
            <View style={{padding: (WW * 2) / 100, justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.h2white}>Notification 2</Text>
                <View
                  style={{
                    position: 'absolute',
                    right: -(WW * 9) / 100,
                  }}>
                  <Text style={styles.h4white}>May 9,2023</Text>
                </View>
              </View>
              <Text style={styles.h4white}>
                Berikut ada hasil keputusan yang diambil ......
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardnotif}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconnotifcard}>
              <IconMC name="bell-outline" size={35} color="#ffffff" />
            </View>
            <View style={{padding: (WW * 2) / 100, justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.h2white}>Notification 1</Text>
                <View
                  style={{
                    position: 'absolute',
                    right: -(WW * 9) / 100,
                  }}>
                  <Text style={styles.h4white}>May 8,2023</Text>
                </View>
              </View>
              <Text style={styles.h4white}>
                Berikut ada hasil keputusan yang diambil ......
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifications;
