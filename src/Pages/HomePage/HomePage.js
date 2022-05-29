/*
 * @Author: xbm
 * @Description: 首页
 * Copyright (c) 2022 by Qunar, All Rights Reserved.
 */
import React, {useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Image} from '@rneui/themed';
import Swiper from 'react-native-swiper';

const HomePage = ({navigation}) => {
  // 首页header
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
      headerStyle: {
        borderBottomWidth: 0,
        borderColor: '#FFFFFF',
        elevation: 0,
      },
    });
  }, [navigation]);

  const [swiperList, setSwiperLiset] = useState([
    {
      url: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
    },
    {
      url: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
    },
    {
      url: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
    },
  ]);
  const [announcement, setAnnouncement] = useState([
    {
      type: '类型',
      text: '关于XXXX的通知公告公共给过过过过过过你好',
    },
    {
      type: '类型',
      text: '关于XXXX的通知公告公共给过过过过过过你好',
    },
    {
      type: '类型',
      text: '关于XXXX的通知公告公共给过过过过过过你好',
    },
  ]);
  return (
    <ScrollView style={{flex: 1}}>
      {/* 头部轮播图 */}
      <Swiper
        containerStyle={styles.wrapper}
        height={142}
        autoplay={true}
        autoplayTimeout={4}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}>
        {swiperList.map(() => (
          <Image
            style={styles.slide1}
            source={{
              uri: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
            }}
          />
        ))}
      </Swiper>
      {/* 公告 */}
      <View style={styles.announcementContainer}>
        <View style={styles.announcementView}>
          <Text style={styles.announcementTitle}>公告</Text>
          <Swiper
           autoplay={true}
           autoplayTimeout={4}
           height={17}
          >
              {announcement.map((item) => (
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.announcementContentType}>【类型】</Text>
                <Text style={styles.announcementContent} numberOfLines={1}>
                    关于XXXX的通知公告公共给过过过过过过你好
                </Text>
                </View>
              ))}
          </Swiper>
         
        </View>
        <TouchableOpacity style={styles.announcementMore}>
          <Text style={styles.announcementMoreText}>更多</Text>
          <Image
            style={styles.announcementMoreArrow}
            source={require('../../asset/home/rightarrow.png')}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
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
    height: 4,
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
  wrapper: {
    marginTop: 12,
  },
  slide1: {
    marginHorizontal: 12,
    height: 142,
  },
  dotStyle: {
    width: 4,
    height: 4,
    backgroundColor: '#333333',
    marginBottom: -30,
  },
  activeDotStyle: {
    width: 8,
    height: 4,
    backgroundColor: '#FFFFFF',
    marginBottom: -30,
  },
  announcementContainer: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  announcementView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: '700'
  },
  announcementContentType: {
    fontSize: 12,
    fontWeight: '400',
    color: '#323643',
  },
  announcementContent: {
    fontSize: 12,
    fontWeight: '400',
    color: '#323643',
    width: 200,
  },
  announcementMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginLeft: 12,
  },
  announcementMoreText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#777777',
    marginRight: 2,
  },
  announcementMoreArrow: {
    width: 7,
    height: 10,
  }
});
