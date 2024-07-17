import axios from 'axios';
// const BASE_URL = "https://medirent-api.onrender.com";

const BASE_URL = "https://medirent-api-3gwy.onrender.com";

import { encryptAes, deCryptedData } from '../components/EndPoints/Encrypted';
// import { _config } from 'gsap/gsap-core';

// export const CURRENT_BASE_URL = "http://127.0.0.1:7171";

// CLIENT ID = '1061797876618-qshcq6n3nd057kv6586f859g8mj5cp6a.apps.googleusercontent.com'
// CLIENT SECRET = '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'

// { 
//   "web": { 
//     "client_id": "1061797876618-qshcq6n3nd057kv6586f859g8mj5cp6a.apps.googleusercontent.com", 
//     "project_id": "chrome-cipher-429011-a3", 
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth", 
//     "token_uri": "https://oauth2.googleapis.com/token", 
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", 
//     "client_secret": "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", 
//     "redirect_uris": ["http://localhost:3000"], 
//     "javascript_origins": ["http://localhost:3000"] 
//   } 
// }

// export default axios.create({
//     baseURL: BASE_URL
// });

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  // withCredentials: true
});

axiosPrivate.interceptors.request.use(function (config) {
  console.log("response in the bank..", config);
  if (config.url === "/account/signin") {
    config.data = {
      data: encryptAes(config.data)
    }
  }
  if (config.url === "/account/tenant-registration") {
    config.data = {
      data: encryptAes(config.data)
    }
  }
  if (config.url === "/account/landlord-registration") {
    config.data = {
      data: encryptAes(config.data)
    }
  }
  if (config.url === "/account/recover-password") {
    config.data = {
      data: encryptAes(config.data)
    }
  }
  if (config.url === "/api/auth/google") {
    config.data = {
      data: encryptAes(config.data)
    }
  }
  console.log("request..", config.url, "data..", config.data);
  return config;

}, function (error) {
  throw error
})

axiosPrivate.interceptors.response.use(function (response) {
  console.log("response away.", response, "rating..", response?.config?.url, "data..", response.data.Data, "response in the code...", response.data);
  if (response?.config?.url === `/account/signin`) {
    let responseData = deCryptedData(response?.data?.data)

    console.log("all responses ..", responseData)
    return {
      data: responseData
    }
  }

  if (response?.config?.url === `/account/tenant-registration`) {
    let responseData = deCryptedData(response?.data?.Data)

    console.log("account tenants in the code ..", responseData)

    return {
      data: response?.data
    }
  }
  if (response?.config?.url === `/account/landlord-registration`) {
    let responseData = deCryptedData(response?.data?.Data)

    console.log("all responses ..", responseData, "code in the bank..", response, "boxing..", response.data.Data)

    return {
      data: response?.data
    }
  }
  if (response?.config?.url === `/account/recover-password`) {
    let responseData = deCryptedData(response?.data?.data)

    console.log("all responses ..", responseData)
    return {
      data: responseData
    }
  }

  if (response?.config?.url === `/api/auth/google`) {
    let responseData = deCryptedData(response?.data?.Data)

    console.log("all responses ..", responseData)
    return {
      data: responseData
    }
  }

}, function (error) {

  throw error
})


const setHeaders = () => {
  var tokenAuth = localStorage.getItem("token");
  const headers = {
    headers: {
      //   "x-auth-token": localStorage.getItem("token"),
      "Authorization": `Bearer ${tokenAuth}`,
      "Content-Type": 'application/json'
    },
  };

  return headers;
};

const setMultiHeader = () => {
  var tokenAuth = localStorage.getItem("token");
  const headers = {
    headers: {
      //   "x-auth-token": localStorage.getItem("token"),
      "Authorization": `Bearer ${tokenAuth}`,
      //   "Content-Type" : 'application/json',
      "Content-Type": 'multipart/form-data',
    },
  };

  return headers;
};

export { axiosPrivate, setHeaders, setMultiHeader }

