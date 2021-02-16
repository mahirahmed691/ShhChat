/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
//import { Global } from "@emotion/core";

//import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {CometChatAvatar} from '../../react-native-chat-ui-kit';
import {COMETCHAT_CONSTANTS} from '../../CONSTS';

import style from './style';

import {loaderStyle} from './loader';

import * as actions from '../../store/action';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native';

class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
    };
    // this.myRef = React.createRef(null);
  }

  login = (uid) => {
    if (!uid) {
      uid = this.state.uid;
    }
    // this.props.navigation.navigate('HomePage');
    this.uid = uid;
    this.props.dispatch(actions.auth(this.uid, COMETCHAT_CONSTANTS.AUTH_KEY)); //dispatch( actions.auth( uid, authKey ) )
  };

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('HomePage');
    }
  }

  render() {
    let loader = null;

    if (this.props.loading) {
      loader = (
        <View style={style.loaderContainer}>
          <ActivityIndicator size="large" color="white"></ActivityIndicator>
        </View>
      );
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <Text style={style.errorStyle}>{this.props.error.message}</Text>
      );
    }

    let authRedirect = null;

    return (
      <SafeAreaView style={{backgroundColor:'#0366FF'}}>
        {loader}
        <View style={style.wrapperStyle}>
          <Text style={style.titleStyle}>Shh</Text>
          <Text style={{color: '#fff', fontWeight: 'bold', marginBottom: 50}}>
            Events, Expertise.
          </Text>
          <View style={style.uidWrapperStyle}>
            <View>
              <Text style={style.subtitleStyle}> Login with UID</Text>
            </View>
            <View style={style.inputWrapperStyle}>
              <TextInput
                style={style.textInput}
                onChangeText={(value) => {
                  this.setState({uid: value});
                }}
                placeholder="Enter your UID here"
              />
            </View>
            <TouchableOpacity
              style={style.loginBtn}
              onPress={() => this.login()}>
              <Text style={style.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
          {errorMessage}
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignupPage')}>
            <Text style={style.subtitleStyle}>Not a user yet? Create an account.</Text>
          </TouchableOpacity>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (uid, authKey) => dispatch(actions.auth(uid, authKey)),
  };
};


export default connect(mapStateToProps)(LoginPage);
