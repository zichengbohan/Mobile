/*
 * @Author: xbm
 * @Description: 。
 * Copyright (c) 2022 by Qunar, All Rights Reserved.
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomePage from './src/Pages/HomePage/HomePage.js';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <HomePage />
    </SafeAreaView>
  );
};

export default App;
