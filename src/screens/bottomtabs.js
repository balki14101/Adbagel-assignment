import React from 'react';
import {View, Text} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeStack from './bottomtabs/homestack';

const Tab = createMaterialBottomTabNavigator();

function bottomtabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      {/* <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="MailBox" component={MailScreen} />
      <Tab.Screen name="Upgrade" component={Upgrade} />
      <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
}
export default bottomtabs;
