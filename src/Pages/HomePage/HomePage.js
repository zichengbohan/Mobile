/*
 * @Author: xbm
 * @Description: 首页
 * Copyright (c) 2022 by Qunar, All Rights Reserved.
 */
import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from '@rneui/themed';

const HomePage = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>首页</Text>
          <Image
            style={styles.titleIcon}
            source={require('../../asset/home/rectangle.png')} 
          />
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerBarRight}>
          <Image
            style={styles.headerBarRightIcon}
            source={require('../../asset/home/search.png')}
            onPress={() => {
              console.log('点击搜搜');
            }}
          />
          <Image
            style={styles.headerBarRightIcon}
            source={require('../../asset/home/wrong.png')}
            onPress={() => {}}
          />
          <Image
            style={styles.headerBarRightIcon}
            source={require('../../asset/home/message.png')}
            onPress={() => {}}
          />
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
  titleIcon: {
    width: 20,
    height: 4
  },
  headerBarRight: {
    width: 96,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerBarRightIcon: {
    width: 24,
    height: 24,
  },
});
