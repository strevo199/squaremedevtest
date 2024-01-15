/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import {TextInput, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {imagespackages} from '../../assets';
import SrfValue from '../../utils/SrfValue';
import Header from '../../component/Header';
import PhoneInput from 'react-native-phone-number-input';
import {palette} from '../../Theme/palette';

const SignupScreenOne = ({navigation}) => {
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  return (
    <Box flex={1} backgroundColor={'white'} padding={'md'}>
      <Header headertext={'Enter Your Phone Number'} />
      <Box flex={1}>
        <Box width={SrfValue(218)} alignSelf={'center'}>
          <Text color={'mainText'} textAlign={'center'} variant={'medium14'}>
            We’ll send an SMS with a code to verify your phone number
          </Text>
        </Box>
        <Box marginTop={'xl'}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="second"
            containerStyle={{
              width: '100%',
              height: SrfValue(48),
            }}
            textInputProps={{
              keyboardType: 'numeric',
              style: {
                color: palette.primaryBlack,
                fontSize: SrfValue(13),
                margin: 0,
                height: SrfValue(40),
              },
            }}
            textContainerStyle={{
              height: SrfValue(48),
              borderColor: '#d0d5dd',
              borderWidth: 1,
              backgroundColor: '#fff',
              borderRadius: SrfValue(8),
            }}
            onChangeText={text => {
              setValue(text);
            }}
            flagButtonStyle={{
              borderColor: '#d0d5dd',
              borderWidth: SrfValue(1),
              borderRadius: SrfValue(8),
              marginRight: SrfValue(15),
              height: SrfValue(48),
            }}
            placeholder="Phone Number"
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
          />
          <Box>
          <TextInput
            style={{
              color: '#9f56d4',
              borderColor: '#d0d5dd',
              height: SrfValue(52),
              fontSize: SrfValue(13),
              paddingLeft: SrfValue(12),
              borderWidth: SrfValue(1),
              borderRadius: SrfValue(8),
              marginTop: SrfValue(20),
            }}
            placeholderTextColor={'#9f56d4'}
            placeholder="Have a referal ID?"
          />
<Image

          style={{width: SrfValue(20), height: SrfValue(20),position:"absolute",bottom:15,right:15}}
          source={imagespackages.redeem}
        />
          </Box>
        </Box>
      </Box>
      <Box marginBottom={'lg'}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupScreenTwo')}
          style={{
            height: SrfValue(48),
            // width: SrfValue(100),
            borderRadius: SrfValue(8),
            justifyContent: 'center',
            backgroundColor: palette.primaryColor,
            alignItems: 'center',
          }}>
          <Text color={'white'} variant={'medium14'}>
            Proceed
          </Text>
        </TouchableOpacity>
        <Box flexDirection={'row'} justifyContent={'center'} marginTop={'md'}>
          <Text color={'mainText'} variant={'medium14'}>
            Already have an account?
          </Text>
          <Text color={'maggenta'} marginLeft={'sm'} variant={'medium14'}>
            Login here
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupScreenOne;
