/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import {TouchableOpacity} from 'react-native';
import SrfValue from '../../utils/SrfValue';
import Header from '../../component/Header';
import {palette} from '../../Theme/palette';
import OtpInputs from 'react-native-otp-inputs';

const SignupScreenTwo = ({navigation}) => {
  const [value, setvalue] = useState('');
  return (
    <Box flex={1} backgroundColor={'white'} padding={'md'}>
      <Header headertext={'Verify Phone Number'} />
      <Box>
        <Box alignSelf={'center'}>
          <Text
            letterSpacing={1}
            color={'mainText'}
            textAlign={'center'}
            variant={'medium14'}>
            Please input the five digit code that was sent to your phone number
            below
          </Text>
        </Box>
      </Box>
      <Box flex={1} justifyContent={'space-between'}>
        <Box marginVertical={'xl'} width={SrfValue(280)} alignSelf={'center'}>
          <Box>
            <OtpInputs
              handleChange={code => {
                if (code.trim().length === 5) {
                  navigation.navigate('SuccessFull');
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
              numberOfInputs={5}
              inputMode="numeric"
              autofillFromClipboard={false}
            />
            <Text
              marginVertical={'xl'}
              textAlign={'center'}
              variant={'regular14'}
              color={'maggenta'}>
              0:59
            </Text>
          </Box>
          <Box>
            <Text
              textAlign={'center'}
              lineHeight={SrfValue(22)}
              variant={'regular14'}
              color={'mainText'}>
              Having trouble receiving SMS?{' '}
              <Text color={'maggenta'}>Resend</Text>{' '}
            </Text>
            <Text
              textAlign={'center'}
              lineHeight={SrfValue(22)}
              variant={'regular14'}
              color={'mainText'}>
              Or try other options below
            </Text>
          </Box>
        </Box>

        <Box flexDirection={'row'} columnGap={'md'} marginBottom={'lg'}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignupScreenTwo')}
            style={{
              height: SrfValue(48),
              flex: 1,
              borderRadius: SrfValue(8),
              justifyContent: 'center',
              borderWidth: SrfValue(1.5),

              borderColor: palette.lightGray,
              alignItems: 'center',
            }}>
            <Text color={'lightGray'} variant={'medium16'}>
              Call me
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignupScreenTwo')}
            style={{
              height: SrfValue(48),
              flex: 1,
              borderRadius: SrfValue(8),
              justifyContent: 'center',
              backgroundColor: palette.lightGray,
              alignItems: 'center',
            }}>
            <Text color={'white'} variant={'medium16'}>
              Whatsapp
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupScreenTwo;
