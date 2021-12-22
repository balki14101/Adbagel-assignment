import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import colors from '../../constants/colors';
import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_EXTRA_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_NORMAL,
  FONT_SIZE_SMALL,
} from '../../constants/fontsize';
import {profile} from '../../constants/constants';
import {Height, Width} from '../../constants/dimension';

import StarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentIcon from 'react-native-vector-icons/FontAwesome';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const dashboard = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>{'HEY WELCOME!'}</Text>
      <View style={styles.headerView}>
        <Text style={styles.welcomeText2}>{'LETS BEGIN YOUR JOURNEY'}</Text>
        <Text style={styles.viewAllText}>{'VIEW ALL'}</Text>
      </View>
      {profile.map((item, index) => {
        return (
          <View key={String(index)} style={styles.cardView}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                navigation.navigate('Details', item);
              }}>
              <Image
                source={{uri: item.image}}
                style={styles.imageStyle}
                resizeMode="cover"
              />
              <View
                style={{
                  marginLeft: 8,
                  justifyContent: 'space-between',
                  marginTop: 8,
                }}>
                <View>
                  <Text style={{color: colors.BLACK, fontWeight: 'bold'}}>
                    {item.id}
                  </Text>
                  <Text style={{color: colors.GREY}}>{item.name}</Text>
                  <Text style={{color: colors.GREY}}>{item.religion}</Text>
                  <View
                    style={[
                      styles.row,
                      {
                        width: Width / 2.4,
                        justifyContent: 'space-between',
                      },
                    ]}>
                    <Text style={{color: colors.GREY}}>{item.age}</Text>
                    <Text style={{color: colors.GREY}}>{item.height}</Text>
                    <Text style={{color: colors.GREY}}>{item.caste}</Text>
                    <Text style={{color: colors.GREY}}>{item.city}</Text>
                  </View>
                  <View
                    style={[
                      styles.row,
                      {
                        width: Width / 2.6,
                        justifyContent: 'space-between',
                      },
                    ]}>
                    <Text style={{color: colors.GREY}}>{item.state}</Text>
                    <Text style={{color: colors.GREY}}>{item.country}</Text>
                    <Text style={{color: colors.GREY}}>{item.education}</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      //   backgroundColor: 'red',
                      width: Width / 1.7,
                      marginTop: 8,
                    },
                  ]}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <StarIcon
                      name="star-circle-outline"
                      size={32}
                      color={colors.GREEN}
                    />
                    <Text
                      style={{
                        color: colors.GREEN,
                        fontSize: 8,
                        fontWeight: 'bold',
                      }}>
                      {'SHORTLIST'}
                    </Text>
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <CommentIcon
                      name="commenting"
                      size={32}
                      color={colors.GREEN}
                    />
                    <Text
                      style={{
                        color: colors.GREEN,
                        fontSize: 8,
                        fontWeight: 'bold',
                      }}>
                      {'CHAT NOW'}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: colors.GREEN,
                      height: Height / 24,
                      //   Width: Width / 10,
                      paddingHorizontal: 4,
                    }}>
                    <HeartIcon name="heart" size={16} color={colors.WHITE} />
                    <Text
                      style={{fontSize: FONT_SIZE_SMALL, fontWeight: 'bold'}}>
                      {'SEND REQUEST'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 4,
  },
  welcomeText: {
    color: colors.GREEN,
    fontSize: 28,
  },
  headerView: {flexDirection: 'row', justifyContent: 'space-between'},
  welcomeText2: {
    color: colors.BLACK,
    fontSize: FONT_SIZE_NORMAL,
    fontWeight: '500',
  },
  viewAllText: {
    color: colors.GREEN,
    fontWeight: '500',
    fontSize: FONT_SIZE_NORMAL,
  },
  cardView: {
    backgroundColor: colors.WHITE,
    height: Height / 4.8,
    marginTop: 8,
    padding: 4,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
  },
  imageStyle: {
    height: Height / 5,
    width: Width / 3,
  },
});
