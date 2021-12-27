import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Switch, Button} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

import colors from '../../constants/colors';
import {Height, Width} from '../../constants/dimension';
import {
  FONT_SIZE_LARGE,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_NORMAL,
  FONT_SIZE_MEDIUM,
} from '../../constants/fontsize';
import {matrialStatus, country, nationality} from '../../constants/constants';

const moredetails = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('select');

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState();
  const [stateText, onStateChange] = useState();
  const [cityText, onCityChange] = useState();

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const gotoUploadImage = () => {
    navigation.navigate('UploadImage');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
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
              fontSize: FONT_SIZE_LARGE,
              fontWeight: '500',
            }}>
            {'STEP 1'}
          </Text>
          <Text
            style={{
              color: colors.WHITE,
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
        <View style={{padding: 8}}>
          <Text style={styles.headerText}>
            {'WE NEED A FEW MORE DETAILS FROM YOU'}
          </Text>
          <View style={styles.switchView}>
            <Text style={styles.switchViewText}>
              {'WILLING TO MARRY OTHER SUB CASTE'}
            </Text>
            <Switch
              color={colors.GREEN_VARIENT1}
              thumbColor={colors.GREEN_VARIENT1}
              // trackColor={colors.GREEN_VARIENT1}
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            />
          </View>
          <Text
            style={{
              color: colors.BLACK,
              fontWeight: '500',
              marginTop: 8,
            }}>
            {'GENDER'}
          </Text>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 8,
            }}>
            {matrialStatus.map((item, index) => {
              if (index === selectedStatus)
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
                      setSelectedStatus(index);
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
                      width: Width / 2.4,
                      margin: 4,
                    }}
                    onPress={() => {
                      setSelectedStatus(index);
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
            {'Country living in'}
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
              {country.map((country, index) => {
                return (
                  <Picker.Item
                    key={String(index)}
                    label={country.name}
                    value={country.name}
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
            {'State'}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onStateChange}
            placeholder="Residing State"
            placeholderTextColor={colors.GREY}
            value={stateText}
          />
          <Text
            style={{
              color: colors.BLACK,
              fontWeight: '500',
              marginTop: 8,
            }}>
            {'City'}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onCityChange}
            placeholder="Residing City"
            placeholderTextColor={colors.GREY}
            value={cityText}
          />
          <Text
            style={{
              color: colors.BLACK,
              fontWeight: '500',
              marginTop: 8,
            }}>
            {'Nationality'}
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
              {nationality.map((nationality, index) => {
                return (
                  <Picker.Item
                    key={String(index)}
                    label={nationality.nationality}
                    value={nationality.nationality}
                  />
                );
              })}
            </Picker>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={gotoUploadImage}
            style={styles.continueButton}>
            <Text style={styles.buttonText}>{'Continue'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default moredetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
  },
  headerText: {
    color: colors.GREEN_VARIENT1,
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 8,
  },
  switchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  switchViewText: {
    color: colors.GREY,
    fontWeight: '500',
    fontSize: FONT_SIZE_NORMAL,
  },
  input: {
    height: 48,
    marginTop: 8,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    color: colors.BLACK,
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
