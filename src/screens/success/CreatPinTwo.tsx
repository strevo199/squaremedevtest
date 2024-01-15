/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import {TouchableOpacity} from 'react-native';
import SrfValue from '../../utils/SrfValue';
import Header from '../../component/Header';
import {palette} from '../../Theme/palette';
import OtpInputs from 'react-native-otp-inputs';

const CreatePinTwo = ({navigation}) => {
  const [value, setvalue] = useState('');
  const [subHeader, setSubHeader] = useState('Input your six digit PIN again');
  const [header, setheader] = useState('Confirm PIN');

  return (
    <Box flex={1} backgroundColor={'white'} padding={'md'}>
      <Header headertext={header} />
      <Box>
        <Box alignSelf={'center'}>
          <Text
            letterSpacing={1}
            color={'mainText'}
            textAlign={'center'}
            variant={'medium14'}>
            {subHeader}
          </Text>
        </Box>
      </Box>
      <Box flex={1} justifyContent={'space-between'}>
        <Box marginVertical={'xl'} width={SrfValue(320)} alignSelf={'center'}>
          <Box>
            <OtpInputs
              handleChange={code => {
                if (code.trim()) {
                  setvalue(code);
                }
              }}
              inputStyles={{
                fontSize: SrfValue(20),
              }}
              inputContainerStyles={{
                height: SrfValue(45),
                justifyContent: 'center',
                alignItems: 'center',
                width: SrfValue(45),
                borderRadius: 4,
                backgroundColor: '#f2f8ff',
              }}
              numberOfInputs={6}
              inputMode="numeric"
              autofillFromClipboard={false}
            />
          </Box>
        </Box>

        <Box flexDirection={'row'} columnGap={'md'} marginBottom={'lg'}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SuccessFull', {
                title: 'Pin Set Successfully',
                msg: 'Your phone number has been verified successfully.',
                path: 'HomeScreen',
              })
            }
            disabled={value.trim().length !== 6}
            style={{
              height: SrfValue(48),
              flex: 1,
              borderRadius: SrfValue(8),
              justifyContent: 'center',
              backgroundColor: palette.primaryColor,
              alignItems: 'center',
            }}>
            <Text color={'white'} variant={'medium16'}>
              Continue
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatePinTwo;
