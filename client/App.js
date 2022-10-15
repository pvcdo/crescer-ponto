import { StatusBar } from 'react-native';
//<StatusBar style='light' />
import React from 'react';

import Registrar from './pages/registrar';

export default function App() {
  return (
    <>

      <Registrar/>
      <StatusBar barStyle={'light-content'}/>

    </>
  );
}
