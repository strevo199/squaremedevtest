/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import {TouchableOpacity} from 'react-native';
import SrfValue from '../../utils/SrfValue';
import {palette} from '../../Theme/palette';
import {Image} from 'react-native';
import {imagespackages} from '../../assets';

const SuccessFull = ({navigation, route}) => {
  const {title, msg, path} = route.params || {};

  return (
    <Box
      justifyContent={'space-between'}
      flex={1}
      backgroundColor={'white'}
      padding={'md'}>
      <Box marginVertical={'lg'} alignItems={'center'}>
        <Image
          style={{
            width: SrfValue(125),
            marginVertical: 25,
            height: SrfValue(125),
          }}
          source={imagespackages.group144}
        />
        <Text color={'primaryColor'} variant={'medium16'}>
          {title || 'Verification Successful'}
        </Text>
        <Text color={'mainText'} marginTop={'md'} variant={'regular14'}>
          {msg || 'Your phone number has been Verified Successful'}
        </Text>
      </Box>
      <Box justifyContent={'flex-end'} marginBottom={'lg'} flex={1}>
        <TouchableOpacity
          onPress={() => navigation.navigate(path || 'CreatePin')}
          style={{
            height: SrfValue(48),
            borderRadius: SrfValue(8),
            justifyContent: 'center',
            borderWidth: SrfValue(1.5),

            backgroundColor: palette.primaryColor,
            alignItems: 'center',
          }}>
          <Text color={'lightGray'} variant={'medium16'}>
            Okay!
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default SuccessFull;
