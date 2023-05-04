import React, {createRef, useContext, useEffect, useState, useRef} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StatusBar,
  Dimensions,
  Pressable,
  AppState,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TextInput as TextInputRN, BackHandler} from 'react-native';
import {TextInput, Provider} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Portal, PortalProvider, PortalHost} from '@gorhom/portal';
import analytics from '@react-native-firebase/analytics';

// import {AppContext} from '../style/indexTheme';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;

import SplashScreen from './splashscreen';
import LoginScreen from '../pages/login';
import RegisterScreen from '../pages/register';
import StartScreen from '../pages/start';
import HomeScreen from '../pages/home';

const Stack = createStackNavigator();
const StackScreen = createNativeStackNavigator();
const FadeAnimate = {...TransitionPresets.FadeFromBottomAndroid};
const SlideAnimate = {...TransitionPresets.SlideFromRightIOS};
const ModalAnimate = {...TransitionPresets.ModalSlideFromBottomIOS};
const FlipNativeAnimate = {
  headerShown: false,
  stackAnimation: 'flip',
  screenOrientation: 'portrait',
};
const NoneNativeAnimate = {
  headerShown: false,
  stackAnimation: 'none',
  screenOrientation: 'portrait',
};

//====================================================HomeRemedial

//====================================================Route
const navigationRef = createRef();
const routeNameRef = createRef();

const Navigation = ({navigation}) => {
  return (
    <PortalProvider>
      <Provider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() =>
            (routeNameRef.current =
              navigationRef.current.getCurrentRoute().name)
          }
          onStateChange={() => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName =
              navigationRef.current.getCurrentRoute().name;

            routeNameRef.current = currentRouteName;
          }}>
          {/* {isLoader()} */}

          <Stack.Navigator
            initialRouteName="SplashScreen"
            headerMode="none"
            mode="modal">
            <Stack.Screen
              options={ModalAnimate}
              name="SplashScreen"
              component={SplashScreen}
            />
            <Stack.Screen
              options={ModalAnimate}
              name="StartScreen"
              component={StartScreen}
            />
            <Stack.Screen
              options={ModalAnimate}
              name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen
              options={ModalAnimate}
              name="RegisterScreen"
              component={RegisterScreen}
            />
            <Stack.Screen
              options={ModalAnimate}
              name="HomeScreen"
              component={HomeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PortalProvider>
  );
};

export default Navigation;
