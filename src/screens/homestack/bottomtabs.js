import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import colors from '../../constants/colors';

import HomeIcon from 'react-native-vector-icons/MaterialIcons';
import MailIcon from 'react-native-vector-icons/Fontisto';
import UpgradeIcon from 'react-native-vector-icons/FontAwesome5';
import ProfileIcon from 'react-native-vector-icons/FontAwesome5';

import Home from '../bottomtabs/home';
import SearchScreen from '../bottomtabs/search';
import MailScreen from '../bottomtabs/mailbox';
import Upgrade from '../bottomtabs/upgrade';
import Profile from '../bottomtabs/profile';

const Tab = createBottomTabNavigator();

function bottomtabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: colors.WHITE,
        tabBarStyle: {backgroundColor: colors.GREEN_VARIENT1},
      }}
      barStyle={{backgroundColor: colors.GREEN_VARIENT1}}
      // tabBar={() => null}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          // tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <HomeIcon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          // tabBarLabel: 'Search',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <HomeIcon name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MailBox"
        component={MailScreen}
        options={{
          tabBarLabel: 'MailBox',
          headerShown: false,

          tabBarIcon: ({color}) => (
            <MailIcon name="email" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Upgrade"
        component={Upgrade}
        options={{
          tabBarLabel: 'Upgrade',
          headerShown: false,

          tabBarIcon: ({color}) => (
            <UpgradeIcon name="crown" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,

          tabBarIcon: ({color}) => (
            <ProfileIcon name="user-alt" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default bottomtabs;
