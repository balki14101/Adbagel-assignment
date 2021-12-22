import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from './src/constants/colors';

// import {useNavigation} from '@react-navigation/native';

import SplashScreen from './src/screens/splashscreen';
import Register from './src/screens/register/personal';
import MoreRegister from './src/screens/register/moredetails';
import UploadImage from './src/screens/register/imageupload';
import HomeScreen from './src/screens/home';
import Details from './src/screens/details';

const Stack = createNativeStackNavigator();

const App = () => {
  // const navigation = useNavigation();

  // function gotohome() {
  //   navigation.navigate('Home');
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: '#02AF81',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: '300',
      //   },
      // }}
      >
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
                <Text
                  // onPress={gotohome}
                  style={{fontWeight: 'bold', color: colors.WHITE}}>
                  {'SKIP'}
                </Text>
              );
            },
          }}
        />

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
