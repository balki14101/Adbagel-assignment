import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/home';
import Details from './src/screens/details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
            // headerStyle: {
            //   backgroundColor: 'green',
            // },
            title: 'HOME',
          }}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
