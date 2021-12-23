import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import image from '../../assets/details.jpg';
import colors from '../../constants/colors';
import {Height, Width} from '../../constants/dimension';
import {FONT_SIZE_LARGE, FONT_SIZE_EXTRA_LARGE} from '../../constants/fontsize';
import {communities, createType, gender} from '../../constants/constants';

import {Button} from 'react-native-paper';

const personal = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('select');
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [text, onChangeText] = React.useState();

  function gotomoreregister() {
    navigation.navigate('MoreRegister');
  }

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Image source={image} style={{height: Height / 3, width: Width}} />
        <View
          style={{
            backgroundColor: colors.GREEN_VARIENT1,
            height: Height / 16,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.WHITE,
              fontSize: FONT_SIZE_LARGE,
              fontWeight: '500',
            }}>
            {'STEP 1'}
          </Text>
          <Text
            style={{
              fontSize: FONT_SIZE_LARGE,
              fontWeight: '500',
            }}>
            {'STEP 2'}
          </Text>
          <Text
            style={{
              fontSize: FONT_SIZE_LARGE,
              fontWeight: '500',
            }}>
            {'STEP 3'}
          </Text>
        </View>
        <View style={{padding: 16}}>
          <Text style={{color: colors.BLACK, fontWeight: '500'}}>
            {'FIND THE PERFECT MATCH - REGISTER FREE!'}
          </Text>
          <Text
            style={{
              color: colors.BLACK,
              fontWeight: '500',
              marginTop: 8,
            }}>
            {'SELECT THE COMMUNITY'}
          </Text>
          <View
            style={{
              backgroundColor: colors.WHITE,
              height: Height / 16,
              justifyContent: 'center',
              marginTop: 4,
              borderRadius: 4,
            }}>
            <Picker
              dropdownIconColor={colors.BLACK}
              selectedValue={selectedValue}
              style={{
                color: '#000000',
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue, itemIndex)
              }>
              {communities.map((category, index) => {
                return (
                  <Picker.Item
                    key={String(index)}
                    label={category.n}
                    value={category.n}
                  />
                );
              })}
            </Picker>
          </View>
          <Text
            style={{
              color: colors.BLACK,
              fontWeight: '500',
              marginTop: 8,
            }}>
            {'PROFILE CREATED BY'}
          </Text>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {createType.map((item, index) => {
              if (index === selectedIndex)
                return (
                  <Button
                    key={String(index)}
                    mode={'outlined'}
                    labelStyle={{color: colors.GREEN_VARIENT1}}
                    style={{
                      backgroundColor: colors.WHITE,
                      borderColor: colors.GREEN_VARIENT1,
                      borderWidth: 2,
                      width: Width / 3.6,
                      margin: 4,
                    }}
                    onPress={() => {
                      setSelectedTime(!selectedTime), setSelectedIndex(index);
                    }}>
                    <Text style={{fontSize: 12}}>{item.Type}</Text>
                  </Button>
                );
              else
                return (
                  <Button
                    key={String(index)}
                    mode={'outlined'}
                    labelStyle={{color: colors.BLACK}}
                    style={{
                      backgroundColor: colors.WHITE,
                      // borderColor: '#34B8D4',
                      borderWidth: 1,
                      width: Width / 3.6,
                      margin: 4,
                    }}
                    onPress={() => {
                      setSelectedTime(!selectedTime), setSelectedIndex(index);
                    }}>
                    <Text style={{fontSize: 12}}>{item.Type}</Text>
                  </Button>
                );
            })}
          </View>
          <Text
            style={{
              color: colors.BLACK,
              fontWeight: '500',
              marginTop: 8,
            }}>
            {'GENDER'}
          </Text>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {gender.map((item, index) => {
              if (index === selectedGender)
                return (
                  <Button
                    key={String(index)}
                    mode={'outlined'}
                    labelStyle={{color: colors.GREEN_VARIENT1}}
                    style={{
                      backgroundColor: colors.WHITE,
                      borderColor: colors.GREEN_VARIENT1,
                      borderWidth: 2,
                      width: Width / 2.4,
                      margin: 4,
                    }}
                    onPress={() => {
                      setSelectedGender(index);
                    }}>
                    <Text style={{fontSize: 12}}>{item.type}</Text>
                  </Button>
                );
              else
                return (
                  <Button
                    key={String(index)}
                    mode={'outlined'}
                    labelStyle={{color: colors.BLACK}}
                    style={{
                      backgroundColor: colors.WHITE,
                      // borderColor: '#34B8D4',
                      borderWidth: 1,
                      width: Width / 2.4,
                      margin: 4,
                    }}
                    onPress={() => {
                      setSelectedGender(index);
                    }}>
                    <Text style={{fontSize: 12}}>{item.type}</Text>
                  </Button>
                );
            })}
          </View>
          <Text
            style={{
              color: colors.BLACK,
              fontWeight: '500',
              marginTop: 8,
            }}>
            {'Name'}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Enter your name"
            placeholderTextColor={colors.GREY}
            value={text}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={gotomoreregister}
            style={styles.continueButton}>
            <Text style={styles.buttonText}>{'Continue'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default personal;
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 8,
    padding: 10,
    borderRadius: 8,
    color: colors.BLACK,
    backgroundColor: colors.WHITE,
  },
  continueButton: {
    backgroundColor: colors.GREEN_VARIENT1,
    height: Height / 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    color: colors.WHITE,
  },
});
