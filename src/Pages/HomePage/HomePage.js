/*
 * @Author: xbm
 * @Description: 首页
 * Copyright (c) 2022 by Qunar, All Rights Reserved.
 */
import React, {useLayoutEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const HomePage = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>首页</Text>
          <Image source={require('../../asset/home/rectangle.png')} />
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerBarRight}>
          <Image source={require('../../asset/home/search.png')} />
          <Image source={require('../../asset/home/wrong.png')} />
          <Image source={require('../../asset/home/message.png')} />
        </View>
      ),
    });
  }, [navigation]);

  return <View style={{flex:1, backgroundColor: 'red'}} />;
};

module.exports = HomePage;

const styles = StyleSheet.create({
  headerBar: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  headerBarRight: {
    width: 96,
    flexDirection: 'row',
    justifyContent:'space-between'
  }
});
