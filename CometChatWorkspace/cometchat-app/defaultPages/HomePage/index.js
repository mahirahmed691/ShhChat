import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Pressable, Platform, Keyboard,} from "react-native";
import {connect} from 'react-redux';
import AnimatedCircularProgress from 'react-native-animated-circular-progress';
import { Text, TextField, IconButton, Colors, Card, Paragraph, Title, Button, ProgressBar, Icon, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FloatingAction } from "react-native-floating-action";
import GetLocation from 'react-native-get-location'
import ModalDropdown from 'react-native-modal-dropdown';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Picker } from 'react-native-woodpicker'

import styles from './styles';
import * as actions from '../../store/action';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const iconColour = "whitesmoke";
export const navColour = "#0336FF"
export const percentage = 66;

const Tab = createBottomTabNavigator();
const HomePage = (props) => {
  const [response, setResponse] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  if (!props.isLoggedIn) {
    props.navigation.navigate('LoginPage');
  }

  state = {
		location: null, 
	};


  return (
      <SafeAreaView style={styles.wrapperStyle}> 
        <View style={{ top:0, left:0, right:0, backgroundColor:navColour, flexDirection:'row', justifyContent:'space-around'}}>
          <IconButton
            icon="home"
            color={iconColour}
            size={22}
            onPress={() => this.SettingsScreen}
          />
          <IconButton
            icon="calendar"
            color={iconColour}
            size={22}
          />
       </View>
       <TextInput style={{margin:10}} placeholder='Search Events...' onSubmitEditing={Keyboard.dismiss} />
  
       <ScrollView horizontal margin={10} height={100}>
          <View style={{flexDirection:'row'}}>
            <Button margin={2} height={40}  mode="outlined" icon="rowing" >
            SPORTS
            </Button>
            <Button margin={2} height={40}  mode="outlined" icon="music" >
            MUSIC
            </Button>
            <Button margin={2} height={40} mode="outlined" icon="brush" >
            ARTS
            </Button>
            <Button margin={2} height={40} mode="outlined" icon="book" >
            EDUCATION
            </Button>
          </View>
        </ScrollView> 

        <Title style={{marginLeft:30, fontFamily:'Futura'}}>Expires Soon</Title>
        <ScrollView horizontal >
          <View style={{flexDirection:'row', marginLeft:20}}>
              <Card style={{borderRadius:20}} mode="contained">
                <View style={{width: 300, height:250, flexDirection:'row'}}>
                  <Card.Cover  style={{ margin:10, height:75, width:75,  borderRadius:20}} source={{ uri: 'https://picsum.photos/100' }} /> 
                  <View style={{marginLeft:20}}>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="map" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Manchester </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="ruler" size={12}/>
                      <Text style={{fontWeight:'bold'}}> 2.5 miles </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="option" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Music </Text>
                    </View>
                  </View>
                </View>
              </Card>
              <Card style={{borderRadius:20}}>
                <View style={{ width: 300, flexDirection:'row'}}>
                  <Card.Cover  style={{ margin:10, height:75, width:75,  borderRadius:20}} source={{ uri: 'https://picsum.photos/100' }} /> 
                  <View style={{marginLeft:20}}>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="map" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Manchester </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="ruler" size={12}/>
                      <Text style={{fontWeight:'bold'}}> 2.5 miles </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="option" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Music </Text>
                    </View>
                  </View>
                </View>
              </Card>
              <Card style={{borderRadius:20}}>
                <View style={{ width: 300, flexDirection:'row'}}>
                  <Card.Cover  style={{ margin:10, height:75, width:75,  borderRadius:20}} source={{ uri: 'https://picsum.photos/100' }} /> 
                  <View style={{marginLeft:20}}>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="map" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Manchester </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="ruler" size={12}/>
                      <Text style={{fontWeight:'bold'}}> 2.5 miles </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="option" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Music </Text>
                    </View>
                  </View>
                </View>
              </Card>
           </View>   
        </ScrollView> 
        <ScrollView style={{marginBottom:50}}>
        
        <ScrollView horizontal style={{height:200}}>
            <Card style={{borderRadius:20, backgroundColor:"gainsboro", margin:5}}>
                <View style={{heigh:"100%", width: 300, flexDirection:'row'}}>
                  <Card.Cover  style={{ margin:10, height:75, width:75,  borderRadius:20}} source={{ uri: 'https://picsum.photos/100' }} /> 
                  <View style={{marginLeft:20}}>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="map" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Manchester </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="ruler" size={12}/>
                      <Text style={{fontWeight:'bold'}}> 2.5 miles </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="option" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Music </Text>
                    </View>
                  </View>
                </View>
              </Card>
              <Card style={{borderRadius:20, backgroundColor:"gainsboro", margin:5}}>
                <View style={{heigh:"100%", width: 300, flexDirection:'row'}}>
                  <Card.Cover  style={{ margin:10, height:75, width:75,  borderRadius:20}} source={{ uri: 'https://picsum.photos/100' }} /> 
                  <View style={{marginLeft:20}}>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="map" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Manchester </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="ruler" size={12}/>
                      <Text style={{fontWeight:'bold'}}> 2.5 miles </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                      <IconButton icon="option" size={12}/>
                      <Text style={{fontWeight:'bold'}}> Music </Text>
                    </View>
                  </View>
                </View>
              </Card>
          </ScrollView>

        <Card style={{margin:20, borderRadius:20}}>
          <View style={{width:'100%', flexDirection:'row', flex:1}}>
              <View style={{width:'50%'}}>
                <Card.Cover style={{borderRadius:20}} source={{ uri: 'https://picsum.photos/700' }} />
              </View>
              <View style={{width:'50%', alignItems:'center', justifyContent:'center'}}>
                  <Card.Content>
                  <Title style={{fontFamily:'Futura'}}>Dinner Party</Title>
                  <Text style={{fontFamily:'Futura'}}>Old Trafford, Manchester</Text>
                  <Text style={{fontFamily:'Futura'}}>July 5, 2021</Text>
                  <Text style={{fontFamily:'Futura'}}>6pm - 10pm</Text>
                  </Card.Content>
                  <Card.Actions >
                    <Button style={{padding:2, margin: 2}} mode="contained">New Order</Button>
                  </Card.Actions>
                </View>
          </View>
          <View style={{width:'100%', padding:1, flexDirection:'row', justifyContent:'center'}}>
                <Text style={{padding:12, textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, borderRadius: 20, backgroundColor:'white',}}> Price {'\n'} <Text style={{fontWeight:'bold', fontSize:24}}> £55 </Text> </Text>
                <Text style={{padding:12, textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, borderRadius: 20, backgroundColor:'white',}}> Sold {'\n'} <Text style={{fontWeight:'bold', fontSize:24}}> 155 </Text> </Text>
                <Text style={{padding:12, textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, borderRadius: 20, backgroundColor:'white',}}> Unsold {'\n'} <Text style={{fontWeight:'bold', fontSize:24 }}> 55 </Text> </Text>
                <IconButton
                  icon="star"
                  color="white"
                  size={25}
                  style={{textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, backgroundColor:'#6200EE', justifyContent:'center', alignItems:'center'}}
                />
          </View>
        <ProgressBar progress={0.2} color={Colors.purple200} />
      </Card>
      <Card style={{margin:20, borderRadius:20,}}>
      
      <View style={{width:'100%', flexDirection:'row', flex:1}}>
          <View style={{width:'50%'}}>
            <Card.Cover style={{borderRadius:20}} source={{ uri: 'https://picsum.photos/700' }} />
          </View>
          <View style={{width:'50%', alignItems:'center', justifyContent:'center'}}>
              <Card.Content>
              <Title style={{fontFamily:'Futura'}}>Dinner Party</Title>
              <Text style={{fontFamily:'Futura'}}>Old Trafford, Manchester</Text>
              <Text style={{fontFamily:'Futura'}}>July 5, 2021</Text>
              <Text style={{fontFamily:'Futura'}}>6pm - 10pm</Text>
              </Card.Content>
              <Card.Actions >
                <Button style={{padding:2, margin: 2}} mode="contained">New Order</Button>
              </Card.Actions>
            </View>
      </View>
      <View style={{width:'100%', padding:1, flexDirection:'row', justifyContent:'center'}}>
            <Text style={{padding:12, textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, borderRadius: 20, backgroundColor:'white',}}> Price {'\n'} <Text style={{fontWeight:'bold', fontSize:24}}> £55 </Text> </Text>
            <Text style={{padding:12, textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, borderRadius: 20, backgroundColor:'white',}}> Sold {'\n'} <Text style={{fontWeight:'bold', fontSize:24}}> 155 </Text> </Text>
            <Text style={{padding:12, textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, borderRadius: 20, backgroundColor:'white',}}> Unsold {'\n'} <Text style={{fontWeight:'bold', fontSize:24 }}> 55 </Text> </Text>
            <IconButton
              icon="star"
              color="white"
              size={25}
              style={{textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, backgroundColor:'#6200EE', justifyContent:'center', alignItems:'center'}}
            />
          </View>
          <ProgressBar progress={0.8} color={Colors.purple200} />
      </Card>
      <Card style={{margin:20, borderRadius:20}}>
      <View style={{width:'100%', flexDirection:'row', flex:1}}>
          <View style={{width:'50%'}}>
            <Card.Cover style={{borderRadius:20}} source={{ uri: 'https://picsum.photos/700' }} />
          </View>
          <View style={{width:'50%', alignItems:'center', justifyContent:'center'}}>
              <Card.Content>
              <Title style={{fontFamily:'Futura'}}>Dinner Party</Title>
              <Text style={{fontFamily:'Futura'}}>Old Trafford, Manchester</Text>
              <Text style={{fontFamily:'Futura'}}>July 5, 2021</Text>
              <Text style={{fontFamily:'Futura'}}>6pm - 10pm</Text>
              </Card.Content>
              <Card.Actions >
                <Button style={{padding:2, margin: 2,}} mode="contained">New Order</Button>
              </Card.Actions>
            </View>
      </View>
      <View style={{width:'100%', padding:1, flexDirection:'row', justifyContent:'center'}}>
            <Text style={{padding:12, textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, borderRadius: 20, backgroundColor:'white',}}> Price {'\n'} <Text style={{fontWeight:'bold', fontSize:24}}> £55 </Text> </Text>
            <Text style={{padding:12, textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, borderRadius: 20, backgroundColor:'white',}}> Sold {'\n'} <Text style={{fontWeight:'bold', fontSize:24}}> 155 </Text> </Text>
            <Text style={{padding:12, textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, borderRadius: 20, backgroundColor:'white',}}> Unsold {'\n'} <Text style={{fontWeight:'bold', fontSize:24 }}> 55 </Text> </Text>
            <IconButton
              icon="star"
              color="white"
              size={25}
              style={{textAlign:'center', fontFamily:'Futura', margin:2, borderWidth:1, backgroundColor:'#6200EE', justifyContent:'center', alignItems:'center'}}
            />
          </View>
          <ProgressBar progress={0.5} color={Colors.purple200} />
      </Card>
      </ScrollView>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
           Alert.alert("Modal has been closed.");
           setModalVisible(!modalVisible);
          }}
         >
       <View>
        <View style={styles.modalView}>
          <View style={{flexDirection:'row', justifyContent:'space-between',}}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={{color:'white', fontSize:30, fontFamily:'Futura', color:'white', alignItems:'center'}}>x</Text>
            </Pressable>

            <Text style={{marginTop:20, right:30, fontFamily:'Futura', color:'white'}}> Start Post </Text>
    

            <Button mode="contained" style={{marginTop:10}}>Post</Button>
        
          </View>
          <View style={{marginTop:40}}>
              <TextInput marginTop={20} backgroundColor="transparent" label="Event Descritption" placeholder="Tell us more.."/>
          </View>
          <View style={{flexDirection:'row', height:60, justifyContent:'space-around'}}>
            <IconButton
                title="Select image"
                icon="aspect-ratio"
                size={30}
                color="whitesmoke"
                marginLeft={20}
                onPress={() =>
                  launchImageLibrary(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 500,
                      maxWidth: 500,
                    },
                    (response) => {
                      setResponse(response);
                    },
                  )
                }
              />
              <IconButton
                title="Select image"
                icon="video"
                size={30}
                color="whitesmoke"
                onPress={() =>
                  launchImageLibrary(
                    {
                      mediaType: 'video',
                      includeBase64: false,
                      maxHeight: 500,
                      maxWidth: 500,
                    },
                    (response) => {
                      setResponse(response);
                    },
                  )
                }
              />
              <IconButton
                title="Select image"
                icon='record'
                size={30}
                color="whitesmoke"
                onPress={() =>
                  launchImageLibrary(
                    {
                      mediaType: 'video',
                      includeBase64: false,
                      maxHeight: 500,
                      maxWidth: 500,
                    },
                    (response) => {
                      setResponse(response);
                    },
                  )
                }
              />
             
          </View>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:30, justifyContent:'space-between',}}>
                <TouchableOpacity onPress={this.findCoordinates}>
                  <Text style={{color:'white', fontFamily:'Futura',}}>📍Location</Text>
                </TouchableOpacity>     
                <ModalDropdown style={{width:100, paddingTop:5, paddingBottom:10, borderRadius:2, backgroundColor:'white', color:'white'}} defaultValue="Event Type" multipleSelect="true" options={['Sport', 'Arts', 'Music', 'Film', 'Tech']}/>
              </View>  
              <View style={{marginTop:20, flex:1}}>
                <TextInput label="Price" placeholder="How much will it cost?"></TextInput>
              </View> 
              {/* <View style={{flexDirection:'row', position:'absolute', top:500, left:50,}}> 
                 <Card>
                  <Card.Content backgroundColor="teal">
                  
                    <AnimatedCircularProgress
                        backgroundColor='#222'
                        color='#6200EE'
                        startDeg={0}
                        endDeg={120}
                        radius={50}
                        innerRadius={50}
                        duration={2000}
                    />
                    <Title style={{color:'white', textAlign:'center', fontSize:12}}>Downloads</Title>
                  </Card.Content>
                </Card>
              </View>  
               <View style={{flexDirection:'row', position:'absolute', top:500, right:50,}}> 
                <Card>
                  <Card.Content backgroundColor="teal">
                    
                    <AnimatedCircularProgress
                        backgroundColor='#222'
                        color='#95ff95'
                        startDeg={0}
                        endDeg={300}
                        radius={50}
                        innerBackgroundColor="teal"
                        innerRadius={40}
                        duration={2000}
                    />
                    <Title style={{color:'white', fontSize:12, textAlign:'center'}}>Events</Title>
                  </Card.Content>
                </Card>
              </View>  */}
            </View>   
         </View>
        </Modal>
       <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
       >
       <IconButton icon="plus" color="#fff" size={20}/>
     </Pressable>

     <View style={styles.bottomNav}>
       <IconButton
          icon="chat"
          color={iconColour}
          size={22}
          onPress={() => {
            props.navigation.navigate('CometChatUI');
          }}
        />
        <IconButton
          icon="map"
          color={iconColour}
          size={22}
          onPress={() => {
            props.navigation.navigate('MapPage');
          }}
        />
        <IconButton
          icon="cog"
          color={iconColour}
          size={22}  
          onPress={() => {
            props.navigation.navigate('SettingsPage');
          }}
        /> 
        <IconButton
          icon="logout"
          color={iconColour}
          size={22}
          onPress={() => props.dispatch(actions.logout())}
        /> 
     </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({reducer}) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(HomePage);
