import React from 'react';
import {connect} from 'react-redux';
import style from './style';

import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Card, Title, IconButton, Button} from 'react-native-paper'

class SettingPage extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={{flexDirection:"row", }}>
         <Card style={style.card}>
            <View style={{alignItems:'center'}}>
                <Title style={style.textStyle}> Stats </Title>
                <IconButton color="white" size={50} icon="wave" />
            </View>
         </Card>
         <Card style={style.card}>
            <View style={{alignItems:'center'}}>
                <Title style={style.textStyle}> Chat </Title>
                <IconButton color="white" size={50} icon="chat" />
            </View>
         </Card>
      </View>
      <View style={{flexDirection:"row"}}>
         <Card style={style.card}>
            <View style={{alignItems:'center'}}>
                <Title style={style.textStyle}> Map </Title>
                <IconButton color="white" size={50} icon="map" />
            </View>
         </Card>
         <Card style={style.card}>
            <View style={{alignItems:'center'}}>
                <Title style={style.textStyle}> Team </Title>
                <IconButton color="white" size={50} icon="group" />
            </View>
         </Card>
      </View>
      <View style={{flexDirection:"row"}}>
         <Card style={style.card}>
            <View style={{alignItems:'center'}}>
                <Title style={style.textStyle}> Account </Title>
                <IconButton color="white" size={50} icon="account" />
            </View>
         </Card>
         <Card style={style.card}>
            <View style={{alignItems:'center'}}>
                <Title style={style.textStyle}> Calendar </Title>
                <IconButton color="white" size={50} icon="calendar" />
            </View>
         </Card>
      </View>
      <View style={{flexDirection:"row"}}>
         <Card style={style.card}>
            <View style={{alignItems:'center'}}>
                <Title style={style.textStyle}> Events </Title>
                <IconButton color="white" size={50} icon="cog" />
            </View>
         </Card>
         <Card style={style.card}>
            <View style={{alignItems:'center'}}>
                <Title style={style.textStyle}> System </Title>
                <IconButton color="white" size={50} icon="event" />
            </View>
         </Card>
      </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({reducer}) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(SettingPage);

