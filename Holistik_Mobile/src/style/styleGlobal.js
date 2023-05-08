import {StyleSheet, Dimensions} from 'react-native';

const WW = Dimensions.get('window').width;
const WH = Dimensions.get('window').height;
const color = {
  white: '#ffffff',
  blackStr: '#000000',
  blackMed: '#222222',
  blackMedLow: '#7f7f7f',
  blackLow: '#f9f9f9',
  YellowGray: '#7f5e00',
  YellowMed: '#FFBC00',
  YellowMedLow: '#FFD824',
  YellowLow: '#FFEC97',
  YellowWhite: '#ffe25b',
  Red: '#ff0000',
  RedBorder: '#ff5870',
  Blue: '#172dff',
  BlueMed: '#4483f9',
  Green: '#00ff48',
  DarkGreen: '#035900',

  rgba90: 'rgba(0,0,0,0.90)',
  rgba75: 'rgba(0,0,0,0.75)',
  rgba65: 'rgba(0,0,0,0.65)',
  rgba50: 'rgba(0,0,0,0.5)',
  rgba25: 'rgba(0,0,0,0.25)',
  rgba20: 'rgba(0,0,0,0.20)',
  rgba15: 'rgba(0,0,0,0.15)',
  rgba10: 'rgba(0,0,0,0.10)',
  rgba05: 'rgba(0,0,0,0.05)',
  rgba00: 'rgba(0,0,0,0.0)',

  rgba_90: 'rgba(255,255,255,0.9)',
  rgba_75: 'rgba(255,255,255,0.75)',
  rgba_50: 'rgba(255,255,255,0.5)',
  rgba_20: 'rgba(255,255,255,0.20)',
  rgba_10: 'rgba(255,255,255,0.10)',
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
    padding: (WW * 10) / 100,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagebackground: {
    width: WW,
    height: WH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 45,
    fontWeight: '400',
    color: color.blackStr,
  },
  h1: {
    fontSize: 30,
    fontWeight: '400',
    color: color.blackStr,
  },
  h1bold: {
    fontSize: 30,
    fontWeight: '500',
    color: color.blackStr,
  },
  h1white: {
    fontSize: 30,
    fontWeight: 'bold',
    color: color.white,
  },
  h2white: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.white,
  },
  h2black: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.blackStr,
  },
  h3black: {
    fontSize: 20,
    color: color.blackStr,
  },
  h3white: {
    fontSize: 18,
    color: color.white,
    fontWeight: '600',
  },
  inputEmail: {
    height: (WH * 5) / 100,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    width: (WW * 80) / 100,
    marginVertical: (WH * 1) / 100,
  },

  buttonLogin: {
    backgroundColor: color.blackStr,
    width: (WW * 80) / 100,
    height: (WH * 7) / 100,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.blackStr,
  },
  buttonRegister: {
    backgroundColor: color.blackLow,
    width: (WW * 80) / 100,
    height: (WH * 7) / 100,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.blackStr,
  },

  buttonLogin_start: {
    backgroundColor: color.blackStr,
    width: (WW * 45) / 100,
    height: (WH * 6) / 100,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.blackStr,
  },
  buttonRegister_start: {
    backgroundColor: color.blackLow,
    width: (WW * 45) / 100,
    height: (WH * 6) / 100,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.blackStr,
  },
  basehome: {
    backgroundColor: '#579EF1',
    borderColor: color.BlueMed,
    borderWidth: 5,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: WW,
    height: (WH * 50) / 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: (WW * 5) / 100,
  },
  basehomecard: {
    width: (WW * 80) / 100,
    height: (WH * 20) / 100,
    borderColor: color.Blue,
    borderWidth: 2,
    backgroundColor: color.BlueMed,
    borderRadius: 20,
    marginVertical: (WH * 1) / 100,
    padding: (WW * 5) / 100,
    elevation: 2,
    overflow: 'hidden',
  },
  imagebookcard: {
    width: 100,
    height: 100,
    top: (WH * 7) / 100,
    left: (WW * 55) / 100,
    position: 'absolute',
    resizeMode: 'cover',
  },
  containerx: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  basehomestatus: {
    backgroundColor: color.blackLow,
    borderColor: color.BlueMed,
    borderWidth: 5,
    position: 'absolute',
    bottom: 0,
    width: WW,
    height: (WH * 65) / 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: (WW * 2) / 100,
  },
  box_basehomestatus: {
    width: (WW * 35) / 100,
    height: (WH * 12) / 100,
    borderColor: color.Blue,
    borderWidth: 2,
    backgroundColor: color.BlueMed,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: (WW * 1) / 100,
    marginHorizontal: (WW * 1) / 100,
  },
  circlestatus: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});