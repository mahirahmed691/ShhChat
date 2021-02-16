import React from 'react'
import {Text, TextField, TextInput, IconButton, Colors, Button } from 'react-native-paper';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import style from './styles';
export default SignupPage = (props) => {

return(
  <SafeAreaView style={{backgroundColor:'#0366FF', height:'100%'}}>
    <View style={{justifyContent:'center', margin:40, marginTop:'50%'}}>
      <Text style={style.subTitleStyle}>Let's get you set up with a user id. {'\n'} {'\n'}
      To Chat and View events from all over.  </Text>
      <TextInput style={{fontFamily:'Futura'}} placeholder="Enter an UID"/> 
      <View style={{width:'50%',salignItems:'center', marginLeft:'25%',marginTop:40}}>
        <TouchableOpacity
            style={style.loginBtn}
            >
            <Text style={style.btnText}>Submit</Text>
        </TouchableOpacity>
          <IconButton
             style={{alignSelf:'center', marginTop:30}}
             icon="arrow-left"
             color={Colors.yellow500}
             onPress={() => {props.navigation.goBack('Home')}}
          />  
      </View>
    </View>
  </SafeAreaView>
)

};
