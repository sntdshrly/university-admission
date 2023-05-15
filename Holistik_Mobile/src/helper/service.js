import {Alert, ToastAndroid} from 'react-native';
import axios from 'axios';
import {store} from '../../reduce/store';

//===========================================
export default {
  Default: async function (link, body) {
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
          console.log('response : ', response.data);
        })
        .catch(error => {
          const originalRequest = error.config;
          console.log(originalRequest);

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
