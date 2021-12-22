import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import colors from '../../constants/colors';

import Dashboard from '../toptabs/dashboard';
import JustJoined from '../toptabs/justjoined';
import Matches from '../toptabs/matches';
import {Height} from '../../constants/dimension';

const Tab = createMaterialTopTabNavigator();

const home = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          height: 40,
        },
        tabBarActiveTintColor: colors.GREEN_VARIENT1,
        tabBarIndicatorStyle: {backgroundColor: colors.GREEN_VARIENT1},
      }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="JustJoined" component={JustJoined} />
      <Tab.Screen name="Matches" component={Matches} />
    </Tab.Navigator>
  );
};

export default home;
