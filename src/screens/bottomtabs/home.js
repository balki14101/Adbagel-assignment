import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import colors from '../../constants/colors';

import Dashboard from '../toptabs/dashboard';
import JustJoined from '../toptabs/justjoined';
import Matches from '../toptabs/matches';

const Tab = createMaterialTopTabNavigator();

const home = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="JustJoined" component={JustJoined} />
      <Tab.Screen name="Matches" component={Matches} />
    </Tab.Navigator>
  );
};

export default home;
