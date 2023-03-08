import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = 'http://dulearn.rugefx.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    // if (res.status == 401) {
    //   AsyncStorage.removeItem('token_key').then(() => {
    //     // window.location.href = "/login";
    //     console.log('Token dihapus');
    //   });
    // }
    console.error(
      'Looks like there was a problem. Error : ' + JSON.stringify(res.data),
    );
    return Promise.reject(error);
  },
);

export default apiClient;
