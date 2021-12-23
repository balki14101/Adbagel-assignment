import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../constants/colors';

const matches = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: colors.BLACK}}>Yet to Come</Text>
    </View>
  );
};

export default matches;
