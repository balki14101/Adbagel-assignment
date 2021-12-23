import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Height, Width} from '../../constants/dimension';

import colors from '../../constants/colors';

import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_EXTRA_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_NORMAL,
  FONT_SIZE_SMALL,
} from '../../constants/fontsize';

import BackIcon from 'react-native-vector-icons/AntDesign';
import OptionsIcon from 'react-native-vector-icons/SimpleLineIcons';
import StarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentIcon from 'react-native-vector-icons/FontAwesome';
import TelephoneIcon from 'react-native-vector-icons/Foundation';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const profileimage = props => {
  console.log('profileimage', props);
  const item = props.props;
  return (
    <ImageBackground
      source={{uri: item.image}}
      style={{height: Height / 2.4, width: Width}}>
      <LinearGradient
        colors={[
          colors.GREEN,
          colors.TRANSPARENT,
          colors.TRANSPARENT,
          colors.TRANSPARENT,
          colors.BLACK,
        ]}
        style={styles.linearGradient}>
        <View style={styles.headerView}>
          <View style={styles.idView}>
            <BackIcon name="arrowleft" color={colors.WHITE} size={28} />
            <Text style={styles.idText}>{item.id}</Text>
          </View>
          <OptionsIcon name="options-vertical" color={colors.WHITE} size={16} />
        </View>
        <View style={styles.bottomGradientView}>
          <View style={styles.bottomGradientIconsView}>
            <View style={styles.iconViewStyle}>
              <StarIcon
                name="star-circle-outline"
                size={24}
                color={colors.GREEN}
              />
              <Text style={styles.iconTextStyle}>{'SHORTLIST'}</Text>
            </View>
            <View style={styles.iconViewStyle}>
              <CommentIcon name="commenting" size={24} color={colors.GREEN} />
              <Text style={styles.iconTextStyle}>{'CHAT NOW'}</Text>
            </View>
            <View style={styles.iconViewStyle}>
              <TelephoneIcon name="telephone" size={24} color={colors.GREEN} />
              <Text style={styles.iconTextStyle}>{'CALL NOW'}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.requestButton}>
            <HeartIcon name="heart" size={18} color={colors.WHITE} />
            <Text style={styles.requestButtonText}>{'SEND REQUEST'}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default profileimage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {flexDirection: 'row'},
  linearGradient: {
    flex: 1,
    paddingHorizontal: 8,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  idView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idText: {
    color: colors.WHITE,
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_MEDIUM,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  bottomGradientView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 8,
  },
  bottomGradientIconsView: {
    flexDirection: 'row',
    width: Width / 2.4,
    justifyContent: 'space-between',
  },

  iconViewStyle: {justifyContent: 'center', alignItems: 'center'},
  iconTextStyle: {
    color: colors.GREEN,
    fontSize: 8,
    fontWeight: 'bold',
  },
  requestButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GREEN,
    height: Height / 24,
    paddingHorizontal: 4,
  },
  requestButtonText: {fontSize: FONT_SIZE_SMALL, fontWeight: 'bold'},
});
