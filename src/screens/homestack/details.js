import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
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

import {text} from '../../constants/constants';

import BackIcon from 'react-native-vector-icons/AntDesign';
import OptionsIcon from 'react-native-vector-icons/SimpleLineIcons';
import StarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentIcon from 'react-native-vector-icons/FontAwesome';
import TelephoneIcon from 'react-native-vector-icons/Foundation';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const details = props => {
  console.log(props.route.params);
  const item = props.route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: item.image}}
          style={{height: Height / 2.4, width: Width}}>
          <LinearGradient
            colors={[
              colors.GREEN,
              '#00000000',
              '#00000000',
              '#00000000',
              '#000000',
            ]}
            style={styles.linearGradient}>
            <View style={styles.headerView}>
              <View style={styles.idView}>
                <BackIcon name="arrowleft" color={colors.WHITE} size={28} />
                <Text style={styles.idText}>{item.id}</Text>
              </View>
              <OptionsIcon
                name="options-vertical"
                color={colors.WHITE}
                size={16}
              />
            </View>
            <View
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  flex: 1,
                  paddingHorizontal: 8,
                  marginBottom: 8,
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  width: Width / 2.4,
                  justifyContent: 'space-between',
                }}>
                <View style={styles.iconViewStyle}>
                  <StarIcon
                    name="star-circle-outline"
                    size={24}
                    color={colors.GREEN}
                  />
                  <Text style={styles.iconTextStyle}>{'SHORTLIST'}</Text>
                </View>
                <View style={styles.iconViewStyle}>
                  <CommentIcon
                    name="commenting"
                    size={24}
                    color={colors.GREEN}
                  />
                  <Text style={styles.iconTextStyle}>{'CHAT NOW'}</Text>
                </View>
                <View style={styles.iconViewStyle}>
                  <TelephoneIcon
                    name="telephone"
                    size={24}
                    color={colors.GREEN}
                  />
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
        <View style={styles.contentView}>
          <Text style={styles.contentTextHeader}>{'PERSONAL INFORMATION'}</Text>
          <Text style={styles.subHeader}>
            {'A Few Lines About My Daughter'}
          </Text>
          <Text style={styles.about}>{text}</Text>
          <Text style={styles.contentTextHeader}>{'BASIC DETAILS'}</Text>
          <View style={styles.detailsView}>
            <Text style={styles.detailsHeader}>{'Name'}</Text>
            <Text style={styles.colon}>{':'}</Text>
            <Text style={styles.detailsText}>{item.name}</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsHeader}>{'Age'}</Text>
            <Text style={styles.colon}>{':'}</Text>
            <Text style={styles.detailsText}>{item.age}</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsHeader}>{'Body Type'}</Text>
            <Text style={styles.colon}>{':'}</Text>
            <Text style={styles.detailsText}>{item.bodyType}</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsHeader}>{'Gender'}</Text>
            <Text style={styles.colon}>{':'}</Text>
            <Text style={styles.detailsText}>{item.gender}</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsHeader}>{'Height'}</Text>
            <Text style={styles.colon}>{':'}</Text>
            <Text style={styles.detailsText}>{item.height}</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsHeader}>{'Education'}</Text>
            <Text style={styles.colon}>{':'}</Text>
            <Text style={styles.detailsText}>{item.education}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default details;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: 8,
    // color: colors.WHITE,
  },
  row: {flexDirection: 'row'},
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  idView: {
    flexDirection: 'row',
    // backgroundColor: 'red',
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
    // position: 'absolute',
    backgroundColor: 'transparent',
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
  contentView: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  contentTextHeader: {
    backgroundColor: colors.GREY_VARIANT2,
    color: colors.GREEN,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_NORMAL,
    padding: 8,
  },
  subHeader: {
    color: colors.GREY,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_NORMAL,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  about: {
    fontSize: FONT_SIZE_SMALL,
    color: colors.BLACK,
    paddingHorizontal: 8,
  },
  detailsView: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    // marginVertical: 4,
    paddingVertical: 4,
    // alignItems: 'center',
    // width: Width / 1.2,
  },
  detailsHeader: {
    color: colors.GREY,
    fontWeight: 'bold',
    width: Width / 3,
    // backgroundColor: 'red',
  },
  colon: {color: colors.GREY},
  detailsText: {color: colors.GREY, width: Width / 3},
});
