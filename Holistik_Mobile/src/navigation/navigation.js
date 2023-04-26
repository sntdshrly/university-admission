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

const Dashboard = () => (
  <Stack.Navigator
    initialRouteName="HomeCollection"
    headerMode="none"
    mode="modal">
    <Stack.Screen
      options={ModalAnimate}
      name="HomeCollection"
      component={HomeCollection}
    />
  </Stack.Navigator>
);

//====================================================Route
const navigationRef = createRef();
const routeNameRef = createRef();

const Navigation = ({navigation}) => {
  //   const {styleGlobal, theme} = useContext(AppContext);

  useEffect(() => {}, []);

  //   View.defaultProps = {
  //     ...(View.defaultProps || {}),
  //     keyboardShouldPersistTaps: 'handled',
  //     needsOffscreenAlphaCompositing: true,
  //   };

  //   ScrollView.defaultProps = {
  //     ...(ScrollView.defaultProps || {}),
  //     keyboardShouldPersistTaps: 'handled',
  //   };

  //   FlatList.defaultProps = {
  //     ...(FlatList.defaultProps || {}),
  //     keyboardShouldPersistTaps: 'handled',
  //   };

  //   Text.defaultProps = {
  //     ...(Text.defaultProps || {}),
  //     allowFontScaling: false,
  //   };

  //   TextInputRN.defaultProps = {
  //     ...(TextInputRN.defaultProps || {}),
  //     allowFontScaling: false,
  //     placeholderTextColor: theme.color.rgba50,
  //     style: {
  //       paddingVertical: WW * 0.025,
  //       color: theme.color.blackStr,
  //     },
  //   };

  //   TextInput.defaultProps = {
  //     ...(TextInput.defaultProps || {}),
  //     allowFontScaling: false,
  //     mode: 'outlined',
  //     theme: {
  //       colors: {
  //         text: theme.color.blackStr,
  //         primary: theme.color.rgba50,
  //         placeholder: theme.color.rgba75,
  //         disabled: theme.color.rgba50,
  //       },
  //     },
  //     style: {
  //       marginBottom: WW * 0.05,
  //       height: WW * 0.125,
  //       backgroundColor: theme.color.blackLow,
  //     },
  //   };

  //   Modal.defaultProps = {
  //     ...(Modal.defaultProps || {}),
  //     theme: {
  //       colors: {
  //         backdrop: theme.color.rgba00,
  //       },
  //     },
  //     contentContainerStyle: {
  //       flex: 1,
  //       marginTop: -statusBarHeight,
  //     },
  //   };

  //   Picker.defaultProps = {
  //     ...(Picker.defaultProps || {}),
  //     allowFontScaling: false,
  //   };

  //   Picker.Item.defaultProps = {
  //     ...(Picker.Item.defaultProps || {}),
  //     allowFontScaling: false,
  //   };

  //   Pressable.defaultProps = {
  //     ...(Pressable.defaultProps || {}),
  //     android_disableSound: false,
  //     style: ({pressed}) => [
  //       styleGlobal.containerGlobalButton,
  //       {
  //         transform: [{scale: pressed ? 0.98 : 1}],
  //       },
  //     ],
  //   };
  //===================================================================================

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

            if (previousRouteName !== currentRouteName) {
              analytics().logScreenView({
                screen_name: currentRouteName,
                screen_class: currentRouteName,
              });
            }

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
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PortalProvider>
  );
};

export default Navigation;
