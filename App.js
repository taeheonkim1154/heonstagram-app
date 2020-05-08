import React, { useState, useEffect } from 'react';
import {Ionicons} from '@expo/vector-icons';
import * as Font from 'expo-font';
import {Asset} from 'expo-asset';
import {AppLoading} from 'expo';
import { AsyncStorage } from 'react-native';
// 아래 아폴로 캐시는 앱에서 내 디바이스에 인터넷 상 모든 교환을 다 캐시로 백업해두고, 앱 다음에 열 때 바로바로 받아오게 하려고 하는 것 (ex: 카톡 다시 열면 원래 대화 다 저장되어있고 엄청 빠르게 불러온다)
import { InMemoryCache} from 'apollo-cache-inmemory';
import {persistCache} from 'apollo-cache-persist';
import ApolloClient from 'apollo-boost';
import {ThemeProvider} from "styled-components";
import { ApolloProvider} from 'react-apollo-hooks';
import options from './apollo';
import styles from './styles';
import {NavController} from './components/NavController';
import { AuthProvider } from './AuthContext';

export default function App() {
  // preload는 앱 로딩 과정에서 필요한 폰트나 이미지 미리 다운 받아 두는 것!
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const preLoad = async() => {
    try {
      // 각종 폰트 받아옴
      await Font.loadAsync({
        ...Ionicons.font
      });
      // 로고 이미지 받아 옴
      await Asset.loadAsync([require("./assets/pngwing.com.png")]);
      // cache 만들어서 이용 / 캐시 매 앱 열때마다 받아와서 client 할당함!!
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage
      });
      const client = new ApolloClient({
        cache,
        ...options
      });

      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if(!isLoggedIn || isLoggedIn === "false"){
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }

      // setLoaded true로 바꿔서 로딩 끝냄 + client도 지정 완료
      setLoaded(true);
      setClient(client);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(()=> {
    preLoad();
  },[]);

  return (
    loaded && client && isLoggedIn !== null ? (
      // ApolloProvider로 client 명의로 앱 실행!
      <ApolloProvider client={client}>
        <AuthProvider isLoggedIn={isLoggedIn}>
          <NavController />
        </AuthProvider>
      </ApolloProvider>
      ) : (
        <AppLoading />
      )
  );
};