import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import colors from '../constants/colors';

const home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: colors.BLACK}}>This is home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Text style={{color: colors.BLACK}}>{'go to details'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default home;
