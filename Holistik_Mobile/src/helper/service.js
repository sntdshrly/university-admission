import {Alert, ToastAndroid} from 'react-native';
import axios from 'axios';
import {store} from '../../reduce/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

//===========================================
export default {
  Default: async function (link, body, navigation) {
    const defaultLink = link;
    const Token = await AsyncStorage.getItem('@Token');

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Token,
        //IOS
        // 'Cache-Control':'no-cache',
        // 'Pragma':'no-cache',
        // 'Expires':'0'
      },
      timeout: 1000 * 30,
    };
    const instance = new Promise((resolve, reject) => {
      axios
        .post(defaultLink, body, config)
        .then(response => {
          resolve(response);
          // console.log('response : ', response.data);
        })
        .catch(error => {
          const originalRequest = error.config;
          // console.log(originalRequest);

          if (error.response == undefined) {
            Alert.alert('Error', 'Request Service Timeout..', [
              {text: 'Cancel'},
              {
                text: 'Retry',
                onPress: () => {
                  axios
                    .request(originalRequest)
                    .then(res => {
                      resolve(res);
                    })
                    .catch(err => {
                      ToastAndroid.show('Request Service Timeout..', 5000);
                      reject();
                    });
                },
              },
            ]);

            reject();
          } else if (error.message == 'Request failed with status code 401') {
            Alert.alert('Sesi Berakhir', 'Silahkan Login Ulang', [
              ({text: 'Cancel'},
              {
                text: 'OK',
                onPress: () => {
                  navigation.replace('StartScreen');
                },
              }),
            ]);
          } else {
            Alert.alert('Error ' + defaultLink, error.message, [
              {text: 'Cancel'},
              {
                text: 'Retry',
                onPress: () => {
                  axios
                    .request(originalRequest)
                    .then(res => {
                      resolve(res);
                    })
                    .catch(err => {
                      ToastAndroid.show('Request Service Timeout..', 5000);
                      reject();
                    });
                },
              },
            ]);

            reject();
          }
        });
    });

    return instance;
  },

  DefaultGETnoBody: async function (link, navigation) {
    const defaultLink = link;
    const Token = await AsyncStorage.getItem('@Token');
    // console.log('Bearer' + Token);

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + Token,
      },
      timeout: 1000 * 30,
    };

    // console.log(config);
    const instance = new Promise((resolve, reject) => {
      axios
        .get(defaultLink, config)
        .then(response => {
          resolve(response);
          // console.log('response : ', response.data);
        })
        .catch(error => {
          const originalRequest = error.config;
          console.log(error.message);

          if (error.response == undefined) {
            Alert.alert('Error', 'Request Service Timeout..', [
              {text: 'Cancel'},
              {
                text: 'Retry',
                onPress: () => {
                  axios
                    .request(originalRequest)
                    .then(res => {
                      resolve(res);
                    })
                    .catch(err => {
                      ToastAndroid.show('Request Service Timeout..', 5000);
                      reject();
                    });
                },
              },
            ]);

            reject();
          } else if (error.message == 'Request failed with status code 401') {
            Alert.alert('Sesi Berakhir', 'Silahkan Login Ulang', [
              ({text: 'Cancel'},
              {
                text: 'OK',
                onPress: () => {
                  navigation.replace('StartScreen');
                },
              }),
            ]);
          } else {
            Alert.alert('Error ' + defaultLink, error.message, [
              {text: 'Cancel'},
              {
                text: 'Retry',
                onPress: () => {
                  axios
                    .request(originalRequest)
                    .then(res => {
                      resolve(res);
                    })
                    .catch(err => {
                      ToastAndroid.show('Request Service Timeout..', 5000);
                      reject();
                    });
                },
              },
            ]);

            reject();
          }
        });
    });

    return instance;
  },
  DefaultGET: async function (link, body, navigation) {
    const defaultLink = link;
    const Token = await AsyncStorage.getItem('@Token');
    // console.log('Bearer' + Token);

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + Token,
      },
      timeout: 1000 * 30,
    };

    // console.log(config);
    const instance = new Promise((resolve, reject) => {
      axios
        .get(defaultLink, body, config)
        .then(response => {
          resolve(response);
          // console.log('response : ', response.data);
        })
        .catch(error => {
          const originalRequest = error.config;
          // console.log(originalRequest);

          if (error.response == undefined) {
            Alert.alert('Error', 'Request Service Timeout..', [
              {text: 'Cancel'},
              {
                text: 'Retry',
                onPress: () => {
                  axios
                    .request(originalRequest)
                    .then(res => {
                      resolve(res);
                    })
                    .catch(err => {
                      ToastAndroid.show('Request Service Timeout..', 5000);
                      reject();
                    });
                },
              },
            ]);

            reject();
          } else if (error.message == 'Request failed with status code 401') {
            Alert.alert('Sesi Berakhir', 'Silahkan Login Ulang', [
              ({text: 'Cancel'},
              {
                text: 'OK',
                onPress: () => {
                  navigation.replace('StartScreen');
                },
              }),
            ]);
          } else {
            Alert.alert('Error ' + defaultLink, error.message, [
              {text: 'Cancel'},
              {
                text: 'Retry',
                onPress: () => {
                  axios
                    .request(originalRequest)
                    .then(res => {
                      resolve(res);
                    })
                    .catch(err => {
                      ToastAndroid.show('Request Service Timeout..', 5000);
                      reject();
                    });
                },
              },
            ]);

            reject();
          }
        });
    });

    return instance;
  },
  DefaultnonToken: async function (link, body, navigation) {
    const defaultLink = link;

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

        //IOS
        // 'Cache-Control':'no-cache',
        // 'Pragma':'no-cache',
        // 'Expires':'0'
      },
      timeout: 1000 * 30,
    };
    const instance = new Promise((resolve, reject) => {
      axios
        .post(defaultLink, body, config)
        .then(response => {
          resolve(response);
          // console.log('response : ', response.data);
        })
        .catch(error => {
          const originalRequest = error.config;
          // console.log(originalRequest);

          if (error.response == undefined) {
            Alert.alert('Error', 'Request Service Timeout..', [
              {text: 'Cancel'},
              {
                text: 'Retry',
                onPress: () => {
                  axios
                    .request(originalRequest)
                    .then(res => {
                      resolve(res);
                    })
                    .catch(err => {
                      ToastAndroid.show('Request Service Timeout..', 5000);
                      reject();
                    });
                },
              },
            ]);

            reject();
          } else if (error.message == 'Request failed with status code 401') {
            Alert.alert('Sesi Berakhir', 'Silahkan Login Ulang', [
              ({text: 'Cancel'},
              {
                text: 'OK',
                onPress: () => {
                  navigation.replace('StartScreen');
                },
              }),
            ]);
          } else {
            Alert.alert('Error ' + defaultLink, error.message, [
              {text: 'Cancel'},
              {
                text: 'Retry',
                onPress: () => {
                  axios
                    .request(originalRequest)
                    .then(res => {
                      resolve(res);
                    })
                    .catch(err => {
                      ToastAndroid.show('Request Service Timeout..', 5000);
                      reject();
                    });
                },
              },
            ]);

            reject();
          }
        });
    });

    return instance;
  },
};
