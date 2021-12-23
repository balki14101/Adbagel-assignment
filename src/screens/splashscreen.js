import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import {Height, Width} from '../constants/dimension';
import flower from '../assets/splashScreenImage.webp';
import logo from '../assets/logo1.jpg';
import colors from '../constants/colors';
import {FONT_SIZE_EXTRA_LARGE} from '../constants/fontsize';

const splashscreen = ({navigation}) => {
  function gotoregister() {
    navigation.navigate('Register');
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={flower}
        style={styles.bgImageStyle}
        resizeMode="stretch">
        <View style={styles.titleView}>
          <Image source={logo} style={styles.logoImage} resizeMode="contain" />
          <Text style={styles.titleText}>
            {'MOST EXCLUSIVE MATRIMONY SERVICE FOR COMMUNITIES'}
          </Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.loginButton} activeOpacity={1}>
            <Text style={styles.buttonText}>{'LOGIN'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={gotoregister}
            style={styles.signupButton}
            activeOpacity={1}>
            <Text style={styles.buttonText}>{'SIGN UP'}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageStyle: {
    height: Height,
    width: Width,
    flex: 1,
    justifyContent: 'space-between',
  },
  titleView: {
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  logoImage: {
    height: Height / 6,
    width: Width / 3,
    borderRadius: 50,
  },
  titleText: {
    fontSize: 20,
    color: colors.BLACK,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 24,
  },
  bottomView: {
    flexDirection: 'row',
    height: Height / 16,
  },
  loginButton: {
    backgroundColor: colors.GREEN_VARIENT1,
    width: Width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: colors.GREEN,
    width: Width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    color: colors.WHITE,
  },
});
