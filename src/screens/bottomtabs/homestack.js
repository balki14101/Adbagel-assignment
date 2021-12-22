import React from 'react';
import {View, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Width} from '../../constants/dimension';
import colors from '../../constants/colors';
import Icons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './home';
import DetailsScreen from './details';

const Stack = createNativeStackNavigator();

const homestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#02AF81',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '300',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => {
            return (
              <View style={styles.iconsView}>
                <Icons name="notifications" size={28} color={colors.WHITE} />
                <Icons name="headset-mic" size={28} color={colors.WHITE} />
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default homestack;

const styles = StyleSheet.create({
  iconsView: {
    flexDirection: 'row',
    width: Width / 5.4,
    justifyContent: 'space-between',
  },
});
