/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import PinComponent from '../../component/PinComponent';
import {Image, TouchableOpacity} from 'react-native';
import SrfValue from '../../utils/SrfValue';
import {palette} from '../../Theme/palette';
import {imagespackages} from '../../assets';

const MainScreen = () => {
  return (
    <Box flex={1} backgroundColor={'black'}>
      <Box
        marginVertical={'lg'}
        margin={'lg'}
        flexDirection={'row'}
        columnGap={'md'}
        justifyContent={'space-between'}>
        <Box>
          <Image
            style={{
              width: SrfValue(25),
              tintColor: palette.white,
              height: SrfValue(25),
            }}
            source={imagespackages.scanbarcode}
          />
        </Box>

        <Box
          borderRadius={'sm'}
          alignItems={'center'}
          justifyContent={'center'}
          width={SrfValue(135)}
          height={SrfValue(63)}
          style={{backgroundColor: '#bdbdbd20'}}>
          <Text variant={'regular12'} color={'lightGray'}>
            Wallet Balance
          </Text>
          <Text variant={'medium18'} color={'white'}>
            N 5,200
          </Text>
        </Box>
        <Box>
          <Image
            style={{
              width: SrfValue(25),
              tintColor: palette.white,
              height: SrfValue(25),
            }}
            source={imagespackages.clock}
          />
        </Box>
      </Box>
      <PinComponent />
      <Box
        flexDirection={'row'}
        marginTop={'sm'}
        justifyContent={'center'}
        marginBottom={'lg'}
        marginHorizontal={'lg'}
        columnGap={'md'}>
        <TouchableOpacity
          //   onPress={() => navigation.navigate(path || 'CreatePin')}
          style={{
            height: SrfValue(48),
            borderRadius: SrfValue(8),
            width: SrfValue(123),
            justifyContent: 'center',
            borderWidth: SrfValue(1.5),
            backgroundColor: '#28283a',
            alignItems: 'center',
          }}>
          <Text color={'lightGray'} variant={'medium16'}>
            Request
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => navigation.navigate(path || 'CreatePin')}
          style={{
            height: SrfValue(48),
            borderRadius: SrfValue(8),
            width: SrfValue(123),
            justifyContent: 'center',
            borderWidth: SrfValue(1.5),

            backgroundColor: '#28283a',
            alignItems: 'center',
          }}>
          <Text color={'lightGray'} variant={'medium16'}>
            Send
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default MainScreen;
