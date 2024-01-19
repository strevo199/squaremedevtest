/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import SrfValue from '../../utils/SrfValue';
import {imagespackages} from '../../assets';

const ScreenOne = ({navigation}) => {
  return (
    <Box paddingHorizontal={'md'} flex={1}>
      <Box
        padding={'lg'}
        borderRadius={'lg'}
        paddingBottom={'lg'}
        rowGap={'lg'}
        margin={'md'}
        backgroundColor={'primaryBg'}>
        <Image
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: SrfValue(164),
            width: SrfValue(150),
          }}
          source={require('../../assets/lines.png')}
        />
        <Box rowGap={'sm'} marginTop={'lg'}>
          <Text variant={'bold18'} color={'mainText'}>
            Track Your Package
          </Text>
          <Box>
            <Text variant={'regular16'} color={'mainText'}>
              Enter the receipt number that has{' '}
            </Text>
            <Text variant={'regular16'} color={'mainText'}>
              been given by the officer{' '}
            </Text>
          </Box>
        </Box>
        <Box rowGap={'md'}>
          <TextInput
            placeholder="Enter your receipt number"
            style={{
              borderWidth: 1,
              height: SrfValue(56),
              paddingLeft: 30,
              fontSize: SrfValue(14),
              borderRadius: 30,
            }}
          />
          <Box
            borderRadius={'lg'}
            backgroundColor={'black'}
            height={SrfValue(56)}>
            <TouchableOpacity
              onPress={() =>navigation.navigate('MapScreen')}
              style={{
                borderRadius: SrfValue(60),
                flex: 1,
                height: SrfValue(56),
                alignItems: 'center',
                paddingHorizontal: SrfValue(30),
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text variant={'regular14'} color={'white'}>
                Track Now
              </Text>
              <Image
                style={{
                  height: SrfValue(10),
                  width: SrfValue(20),
                }}
                source={imagespackages.backarrow}
              />
            </TouchableOpacity>
          </Box>

        </Box>
      </Box>
      <Box marginTop={'md'} paddingHorizontal={'md'} rowGap={'md'}>
        <Text variant={'bold16'}>Tracking history</Text>
        <Box marginBottom={'sm'}>
          <Box alignItems={'center'} columnGap={'md'} flexDirection={'row'}>
            <Box
              width={SrfValue(50)}
              height={SrfValue(50)}
              borderRadius={'lg'}
              backgroundColor={'lightGray2'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                style={{
                  height: SrfValue(24),
                  width: SrfValue(24),
                }}
                source={imagespackages.suit}
              />
            </Box>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              flex={1}>
              <Box rowGap={'xs'}>
                <Text variant={'medium14'}>SCP9374826473</Text>
                <Text variant={'regular14'}>In the process</Text>
              </Box>
              <Box justifyContent={'center'}> 
                <Image
                  style={{
                    height: SrfValue(15),
                    width: SrfValue(15),
                  }}
                  source={imagespackages.forward}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box alignItems={'center'} columnGap={'md'} flexDirection={'row'}>
            <Box
              width={SrfValue(50)}
              height={SrfValue(50)}
              borderRadius={'lg'}
              backgroundColor={'lightGray2'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                style={{
                  height: SrfValue(24),
                  width: SrfValue(24),
                }}
                source={imagespackages.car}
              />
            </Box>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              flex={1}>
              <Box rowGap={'xs'}>
                <Text variant={'medium14'}>SCP9374826473</Text>
                <Text variant={'regular14'}>In the process</Text>
              </Box>
              <Box justifyContent={'center'}> 
                <Image
                  style={{
                    height: SrfValue(15),
                    width: SrfValue(15),
                  }}
                  source={imagespackages.forward}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ScreenOne;
