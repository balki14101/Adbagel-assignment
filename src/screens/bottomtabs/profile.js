import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import {FONT_SIZE_LARGE} from '../../constants/fontsize';

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Yet to Come'}</Text>
    </View>
  );
};

export default profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.BLACK,
    fontSize: FONT_SIZE_LARGE,
  },
});
