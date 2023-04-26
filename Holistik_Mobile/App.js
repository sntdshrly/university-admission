import 'react-native-gesture-handler';
import React, {PureComponent} from 'react';
import {StatusBar, Platform, View} from 'react-native';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';

enableScreens();

import Navigation from './src/navigation/navigation';
import {store} from './src/redux/Store';

const App = () => {
  {
    return (
      //   <Context>
      <Provider store={store}>
        <Navigation />
      </Provider>
      //   </Context>
    );
  }
};

export default App;
