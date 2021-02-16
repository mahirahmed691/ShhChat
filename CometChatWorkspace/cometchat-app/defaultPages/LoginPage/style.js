/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import {StyleSheet, Dimensions} from 'react-native';

const dheight = Dimensions.get('window').height;
const dwidth = Dimensions.get('window').width;

export const heightRatio = dheight / 667;
export const widthRatio = dwidth / 375;
export const calc = () => {
  return dheight - 100 * heightRatio;
};
export const calcWidth = (width) => {
  return dwidth - width * widthRatio;
};

export default StyleSheet.create({
  wrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    backgroundColor:'#0366FF'
  },
  errorStyle: {
    fontSize: 12 * heightRatio,
    color: 'yellow',
    width: '100%',
    textAlign: 'center',
    marginTop:30,
    padding: 30,
  },
  loaderContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    zIndex: 999,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 50 * heightRatio,
    color: 'yellow',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    borderColor:'black',
    fontFamily:'Futura'
  },
  subtitleStyle: {
    width: '100%',
    fontSize: 12 * heightRatio,
    textAlign: 'center',
    marginTop: 8 * heightRatio,
    fontFamily:'Futura',
    color: '#fff'
  },
  userContainerStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10 * heightRatio,
  },
  userWrapperStyle: {
    width: 150 * widthRatio,
    marginLeft: 10 * widthRatio,
    marginRight: 10 * widthRatio,
    marginTop: 10 * heightRatio,
    marginBottom: 10 * heightRatio,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 10,
    color: 'white',
    paddingTop: 6 * heightRatio,
    paddingRight: 10 * widthRatio,
    paddingLeft: 10 * widthRatio,
    paddingBottom: 6 * heightRatio,
  },
  thumbnailWrapperStyle: {
    width: 24 * widthRatio,
    height: 24 * heightRatio,
    justifyContent: 'center',
  },
  uidWrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputWrapperStyle: {
    paddingTop: 10 * heightRatio,
    paddingBottom: 10 * heightRatio,
    paddingLeft: 20 * widthRatio,
    paddingRight: 20 * widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginTop: 10 * heightRatio,
    marginBottom: 10 * heightRatio,
    marginLeft: 24 * widthRatio,
    marginRight: 24 * widthRatio,
    paddingTop: 8 * heightRatio,
    paddingBottom: 8 * heightRatio,
    paddingLeft: 10 * widthRatio,
    paddingRight: 10 * widthRatio,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor:'white'
  },
  loginBtn: {
    backgroundColor: 'black',
    borderRadius: 10,
    color: 'white',
    paddingTop: 12 * heightRatio,
    paddingBottom: 12 * heightRatio,
    paddingLeft: 50 * widthRatio,
    paddingRight: 50 * widthRatio,
  },
  btnText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12 * heightRatio,
  },
});
