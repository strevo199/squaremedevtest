/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from '../../component/Typography/Text';
import {Box} from '../../component/Layout/Box';
import {Image, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import {imagespackages} from '../../assets/';
import SrfValue from '../../utils/SrfValue';
import {palette} from '../../Theme/palette';

const IntroScreen = ({navigation}) => {

  const {ellipse,lines,group1729} = imagespackages;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: palette.primaryBg}}>
      <StatusBar
        backgroundColor={palette.primaryBg}
        barStyle={'dark-content'}
      />
      <Box flex={1} backgroundColor={'primaryBg'} padding={'lg'}>
        <Image
          style={{
            position: 'absolute',
            height: SrfValue(525),
            width: SrfValue(300),
          }}
          source={ellipse}
        />
        <Image
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: SrfValue(160),
            width: SrfValue(160),
          }}
          source={lines}
        />
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Image
            style={{
              marginTop: SrfValue(50),

              height: SrfValue(220),
              width: SrfValue(300),
            }}
            source={group1729}
          />
        </Box>
        <Box justifyContent={'space-around'} flex={0.8}>
          <Box rowGap={'sm'} alignItems={'center'}>
            <Text variant={'bold24'}>Welcome to E-Bikes</Text>
            <Text variant={'regular14'}>
              Buying Electric bikes just got a lot easier,{' '}
            </Text>
            <Text variant={'regular14'}>Try us today.</Text>
            <Text
              marginTop={'md'}
              color={'white'}
              variant={'regular14'}
              letterSpacing={5}>
              <Text>&#x25cf;</Text> &#x25cf; &#x25cf;{' '}
            </Text>
          </Box>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={{
              borderRadius: 60,
              paddingHorizontal: 15,
              height: SrfValue(56),
              alignItems: 'center',
              backgroundColor: '#000',
              flexDirection: 'row',
            }}>
            <Box
              height={SrfValue(35)}
              width={SrfValue(35)}
              backgroundColor={'white'}
              borderRadius={'lg'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                style={{
                  height: SrfValue(24),
                  width: SrfValue(24),
                }}
                source={imagespackages.icongoogle}
              />
            </Box>
            <Box alignItems={'center'} flex={1}>
              <Text variant={'medium16'} color={'white'}>
                Login with Google
              </Text>
            </Box>
          </TouchableOpacity>
          <Text color={'mainText'} textAlign={'center'} variant={'regular14'}>
            Don’t have any account? <Text variant={'bold14'}>Sign Up</Text>
          </Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default IntroScreen;
