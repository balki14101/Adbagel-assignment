import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from './src/constants/colors';

import SplashScreen from './src/screens/splashscreen';
import Register from './src/screens/register/personal';
import MoreRegister from './src/screens/register/moredetails';
import UploadImage from './src/screens/register/imageupload';
import HomeStack from './src/screens/homestack';

import {Width} from './src/constants/dimension';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: {
              backgroundColor: colors.GREEN,
            },
            headerTintColor: colors.WHITE,
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '100',
            },

            headerTitleAlign: 'center',
            title: 'REGISTER FREE!',
          }}
        />
        <Stack.Screen
          name="MoreRegister"
          component={MoreRegister}
          options={{
            headerStyle: {
              backgroundColor: colors.GREEN,
            },
            headerTintColor: colors.WHITE,
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '100',
            },

            headerTitleAlign: 'center',
            title: 'REGISTER FREE!',
          }}
        />
        <Stack.Screen
          name="UploadImage"
          component={UploadImage}
          options={{
            headerStyle: {
              backgroundColor: colors.GREEN,
            },
            headerTintColor: colors.WHITE,
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '100',
            },

            headerTitleAlign: 'center',
            title: 'ADD PHOTO',
            headerRight: () => {
              return (
                <Text style={{fontWeight: 'bold', color: colors.WHITE}}>
                  {'SKIP'}
                </Text>
              );
            },
          }}
        />

        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  iconsView: {
    flexDirection: 'row',
    width: Width / 5.4,
    justifyContent: 'space-between',
  },
});
