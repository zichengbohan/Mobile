/*
 * @Author: xbm
 * @Description: 。
 * Copyright (c) 2022 by Qunar, All Rights Reserved.
 */

import React from 'react';
import {useColorScheme, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomePage from './src/Pages/HomePage/HomePage.js';
import Mine from './src/Pages/HomePage/HomePage.js';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from "@rneui/themed";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="首页" component={HomePage} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
};

const MineStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="我的" component={HomePage} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            const homeIcon = focused
              ? require('./src/asset/tabicon/homeselected.png')
              : require('./src/asset/tabicon/homeunselected.png');
            const mineIcon = focused
              ? require('./src/asset/tabicon/mineselected.png')
              : require('./src/asset/tabicon/mineunselected.png');
            const icons = {
              Home: homeIcon,
              Mine: mineIcon,
            };
            // console.log('option:', option);
            return (
              <Image
                source={icons[route.name]}
                containerStyle={styles.tabBarIcon}
              />
            );
          },
          tabBarActiveTintColor: '#13A8F5',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: '首页',
          }}
        />
        <Tab.Screen name="Mine" component={MineStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 32,
    height: 32,
  },
});
