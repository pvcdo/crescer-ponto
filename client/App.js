import { StatusBar } from 'react-native';
//<StatusBar style='light' />
import React from 'react';

import Registrar from './components/pages/registrar';

export default function App() {
  return (
    <>

      <Registrar/>
      <StatusBar barStyle={'light-content'}/>

    </>
  );
}
