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
import colors from '../../constants/colors';
import {Height, Width} from '../../constants/dimension';
import {
  FONT_SIZE_LARGE,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_NORMAL,
  FONT_SIZE_MEDIUM,
} from '../../constants/fontsize';
import ImagePicker from 'react-native-image-crop-picker';
import Camera from 'react-native-vector-icons/Feather';
import Gallery from 'react-native-vector-icons/MaterialIcons';

const imageupload = ({navigation}) => {
  const [profileFromGallery, setProfileFromGallery] = useState('');
  const [profileFromCamera, setProfileFromCamera] = useState('');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [isImageSelectedFromCamera, setIsImageSelectedFromCamera] =
    useState(false);

  const chooseImageForProfile = async () => {
    ImagePicker.openPicker({
      multiple: false,
    })
      .then(image => {
        setProfileFromGallery({
          uri: image.path,
        });
        setIsImageSelected(true);
        // setShowPickerForProfilePicture(false);
      })
      .catch(error => {
        console.log('Api call error');
        alert(error.message);
      });
  };

  const launchCameraForProfilePicture = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log('profile picture from camera', image);
        setProfileFromCamera({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        // console.log('path:', profile);
        // setIsImageSelected(true);
        setIsImageSelectedFromCamera(true);
      })
      .catch(error => {
        console.log('Api call error');
        alert(error.message);
      });
  };

  const gotoUploadImage = () => {
    navigation.navigate('Bottomtabs');
  };

  return (
    <ScrollView style={{backgroundColor: colors.WHITE, flex: 1}}>
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
            fontSize: FONT_SIZE_LARGE,
            fontWeight: '500',
          }}>
          {'STEP 2'}
        </Text>
        <Text
          style={{
            color: colors.WHITE,
            fontSize: FONT_SIZE_LARGE,
            fontWeight: '500',
          }}>
          {'STEP 3'}
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 8, padding: 8}}>
        <Text style={styles.matchText}>
          {'1075 Matches will get to view your profile in 01:57:30 hours'}
        </Text>
        {/* <TouchableOpacity
          style={styles.imageContainer}
          onPress={selectProfileImage}>
          {isImageSelected ? (
            <Image source={{uri: profile.uri}} style={styles.imageContainer} />
          ) : (
            <TouchableOpacity
              style={styles.cameraCircle}
              onPress={selectProfileImage}>
              <CameraIcon size={15} color="white" name="camera" />
            </TouchableOpacity>
          )}
        </TouchableOpacity> */}
        {isImageSelected ? (
          <TouchableOpacity onPress={chooseImageForProfile}>
            <Image
              source={{uri: profileFromGallery.uri}}
              style={styles.imageContainer}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={chooseImageForProfile}
            style={{
              backgroundColor: colors.GREY_VARIANT,
              width: Width / 1.2,
              height: Height / 4,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Camera name={'camera'} size={120} color={colors.GREEN_VARIENT1} />
          </TouchableOpacity>
        )}
        <Text style={styles.text}>
          {'9 out of 10 members contact matches with Profile photo'}
        </Text>
        {isImageSelectedFromCamera ? (
          <TouchableOpacity onPress={launchCameraForProfilePicture}>
            <Image
              source={{uri: profileFromCamera.uri}}
              style={styles.imageContainer}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={launchCameraForProfilePicture}
            style={{
              backgroundColor: colors.GREY_VARIANT,
              width: Width / 1.2,
              height: Height / 4,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Gallery
              name={'add-photo-alternate'}
              size={120}
              color={colors.GREEN_VARIENT1}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.text}>
          {'One single action can greatly increase your Profile response'}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={gotoUploadImage}
          style={styles.continueButton}>
          <Text style={styles.buttonText}>{'Continue'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default imageupload;

const styles = StyleSheet.create({
  matchText: {
    color: colors.BLACK,
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: '500',
    textAlign: 'center',
  },
  imageContainer: {
    backgroundColor: '#F0F0F0',
    width: Width / 1.2,
    height: Height / 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    resizeMode: 'contain',
  },
  text: {
    color: colors.BLACK,
    fontSize: FONT_SIZE_NORMAL,
    fontWeight: '500',
    textAlign: 'center',
    // backgroundColor: 'red',
    width: Width / 1.2,
    marginTop: 8,
  },
  continueButton: {
    backgroundColor: colors.GREEN_VARIENT1,
    height: Height / 18,
    width: Width / 2,
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
