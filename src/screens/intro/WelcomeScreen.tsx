import React from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import {imagespackages} from '../../assets';
import SrfValue from '../../utils/SrfValue';
import {Image, TouchableOpacity} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <Box backgroundColor={'primarybackground'} flex={1}>
      <Box justifyContent={'center'} alignItems={'center'} flex={1}>
        <Image
          style={{
            height: SrfValue(31),
            width: SrfValue(239),
            marginTop: SrfValue(28),
          }}
          source={imagespackages.logo}
        />
      </Box>
      <Box margin={'md'} marginBottom={'lg'} rowGap={'md'}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupScreenOne')}
          style={{
            height: SrfValue(50),
            // width: SrfValue(100),
            borderRadius: SrfValue(8),
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            alignItems: 'center',
          }}>
          <Text color={'primaryColor'} variant={'medium16'}>
            Create an account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={handleNext}
          style={{
            height: SrfValue(50),
            // width: SrfValue(100),
            borderWidth: SrfValue(1.5),
            borderColor: '#ffffff',
            borderRadius: SrfValue(8),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text color={'white'} variant={'regular16'}>
            I have an account
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;
