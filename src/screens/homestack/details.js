import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ProfileImage from './profileimage';
import ProfileDetails from './profiledetails';

const details = props => {
  console.log(props.route.params);
  const item = props.route.params;
  return (
    <View style={styles.container}>
      <ProfileImage props={item} />
      <ProfileDetails props={item} />
    </View>
  );
};

export default details;
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
