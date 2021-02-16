/* eslint-disable import/no-duplicates */
import React, { useRef } from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView, Animated, Image, Icon, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Text, TextField, TextInput, IconButton, Colors, Title, Searchbar, TouchableRipple } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Expandable from 'react-native-expandable';
import faker from 'faker';
export const iconColour = "whitesmoke";
import style from './styles';

const ms = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

const Tab = createBottomTabNavigator();

const HEADER_MAX_HEIGHT = 600;
const HEADER_MIN_HEIGHT = 300;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const DATA = Array(10)
  .fill(null)
  .map((_, idx) => ({
    id: idx,
    avatar: faker.image.avatar(),
    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }));

export default (props) => {

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  const renderListItem = (item) => (
    <View key={item.id} style={styles.card}>
      <Image style={styles.avatar} source={{uri: item.avatar}} />
      <Text style={styles.fullNameText}>{item.fullName}</Text>
    </View>
  );
  return (
   <SafeAreaView style={styles.saveArea}>
   
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32 }}
        scrollEventThrottle={16} // 
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }], // event.nativeEvent.contentOffset.x to scrollX
          { useNativeDriver: true }, // use native driver for animation
        )}>
        <Searchbar/>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', backgroundColor:'#111', margin:5, borderRadius:10 }} style={{flexDirection:'row'}} backgroundColor="white" horizontal>
          <View>     
            <Title style={{textAlign:'center', color:'#6200EE'}}>Lil Tjay - Sex Sounds</Title>
            <View  style={{flexDirection:'row'}}>
              <Image style={{height:40,  width:40, alignSelf:'center'}} source={require('/Users/mahirahmed/react-native-chat-app/CometChatWorkspace/cometchat-app/react-native-chat-ui-kit/screenshots/sexsounds.png')}></Image>
              <IconButton color="whitesmoke" icon="rewind" backgroundColor="red" size={40}/>
              <IconButton color="whitesmoke" icon="play" backgroundColor="red" size={40}/>
              <IconButton color="whitesmoke" icon="fast-forward" backgroundColor="red" size={40}/>
            </View>      
          </View>
        </ScrollView>
        {DATA.map(renderListItem)}
      </Animated.ScrollView>
      <Animated.View
        style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Animated.Image
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{ translateY: imageTranslateY }],
            },
          ]}
        />
        <MapView
          
          style={{flex:1}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >

        </MapView>
        
        <IconButton  onPress={()=>console.log('facebook')} style={{position:'absolute',  borderWidth:1, borderColor:'white', backgroundColor:'#34B7F1',bottom:20, right:10}} color="white" animated={true} icon="facebook"/>
        <IconButton  onPress={()=>console.log('WHATSAPP')} style={{position:'absolute',  borderWidth:1, borderColor:'white', backgroundColor:'#25D366',bottom:80, right:10}} color="white" animated={true} icon="whatsapp"/>
        <IconButton  onPress={()=>console.log('WHATSAPP')} style={{position:'absolute',  borderWidth:1, borderColor:'white', backgroundColor:'yellow' ,bottom:140, right:10}} color="black" animated={true} icon="snapchat"/>
        <IconButton  onPress={()=>console.log('WHATSAPP')} style={{position:'absolute',  borderWidth:1, borderColor:'white', backgroundColor:'#111111',bottom:200, right:10}} color="white" animated={true} icon="text"/>
       
      </Animated.View>
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{ scale: titleScale }, { translateY: titleTranslateY }],
          },
        ]}>
        <Text style={styles.title}>Maps</Text>
      </Animated.View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#62d1bc',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
});