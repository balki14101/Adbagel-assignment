import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../constants/colors';

const justjoined = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: colors.BLACK}}>This is justjoined</Text>
    </View>
  );
};

export default justjoined;
