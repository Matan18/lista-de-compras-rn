import 'reflect-metadata';
import React, { useEffect, useState } from 'react';
import connect from "./src/database/connection";

import Routes from './src/Routes/index';

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function loadConnection() {
      await connect;
      setAppIsReady(true);
    }
    loadConnection();
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
