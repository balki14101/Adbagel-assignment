import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

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

const profiledetails = props => {
  console.log('profileimage', props);
  const item = props.props;
  return (
    <ScrollView>
      <View style={styles.contentView}>
        <Text style={styles.contentTextHeader}>{'PERSONAL INFORMATION'}</Text>
        <Text style={styles.subHeader}>{'A Few Lines About My Daughter'}</Text>
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
    </ScrollView>
  );
};

export default profiledetails;

const styles = StyleSheet.create({
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
    paddingVertical: 4,
  },
  detailsHeader: {
    color: colors.GREY,
    fontWeight: 'bold',
    width: Width / 3,
  },
  colon: {color: colors.GREY},
  detailsText: {color: colors.GREY, width: Width / 3},
});
