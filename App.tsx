import 'reflect-metadata';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from "expo-splash-screen";

import connect from "./src/database/connection";

import Routes from './src/Routes/index';

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync().then(response => {
      async function loadConnection() {
        await connect;
        setAppIsReady(true);
      }
      loadConnection();
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1000)

    });
  }, [])

  return (
    <>
      {
        appIsReady ?
          (<Routes />) :
          (null)}
    </>
  );
};

export default App;
