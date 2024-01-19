/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import SrfValue from '../../utils/SrfValue';
import Header from '../../component/Header';

import {imagespackages} from '../../assets';
import {Image} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const MapScreen = ({navigation}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['13%', '92%'], []);

  useEffect(() => {
    bottomSheetRef.current.expand();
  }, []);

  const BackdropComponent = () => (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    />
  );

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../../assets/map.png')}>
        <Box marginHorizontal={'lg'}>
          <Header headertext={'Tracking Deatils'} />
        </Box>
        <Box
          alignSelf={'center'}
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius={'xl'}
          width={SrfValue(325)}
          backgroundColor={'primaryBg'}
          height={SrfValue(88)}>
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            marginHorizontal={'lg'}
            width={SrfValue(295)}
            borderRadius={'xl'}
            borderWidth={1}
            height={SrfValue(56)}>
            <Text letterSpacing={0.5} variant={'medium14'}>
              SCP6653728497
            </Text>
          </Box>
        </Box>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Image
            style={{width: SrfValue(266), height: SrfValue(156)}}
            source={imagespackages.liner}
          />
        </Box>
        <BottomSheet
          ref={bottomSheetRef}
          //  backdropComponent={BackdropComponent}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <Box
            flex={1}
            backgroundColor={'white'}
            padding={'md'}
            rowGap={'md'}
            paddingHorizontal={'lg'}
            borderRadius={'xl'}>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <Box>
                <Text style={{color: '#7A809D'}} variant={'regular14'}>
                  Estimate arrives in
                </Text>
                <Text variant={'bold24'}>2h 40m</Text>
              </Box>
              <Box>
                <Text variant={'regular12'}>&#x25cf; &#x25cf;</Text>
              </Box>
            </Box>
            <Box
              paddingHorizontal={'lg'}
              paddingVertical={'md'}
              borderRadius={'lg'}
              backgroundColor={'primaryBg'}>
              <Box
                rowGap={'xs'}
                paddingVertical={'md'}
                style={{borderBottomColor: '#edc127'}}
                borderBottomWidth={1}>
                <Text letterSpacing={0.5} variant={'bold16'}>
                  Sukabumi, Indonesia
                </Text>
                <Text letterSpacing={0.5} variant={'regular12'}>
                  No receipt : SCP6653728497
                </Text>
              </Box>
              <Box
                rowGap={'xs'}
                paddingVertical={'md'}
                style={{borderBottomColor: '#edc127'}}
                borderBottomWidth={1}>
                <Text letterSpacing={0.5} variant={'bold16'}>
                  2,50 USD
                </Text>
                <Text letterSpacing={0.5} variant={'regular12'}>
                  Postal fee
                </Text>
              </Box>
              <Box rowGap={'xs'} paddingVertical={'md'}>
                <Text letterSpacing={0.5} variant={'bold16'}>
                  Bali, Indonesia
                </Text>
                <Text letterSpacing={0.5} variant={'regular12'}>
                  Parcel, 24kg
                </Text>
              </Box>
            </Box>
            <Box marginTop={'md'} rowGap={'lg'}>
              <Text variant={'bold16'}>History</Text>
              <Box marginBottom={'sm'}>
                <Box
                  height={SrfValue(40)}
                  bottom={-40}
                  left={25}
                  width={SrfValue(2)}
                  position={'absolute'}
                  backgroundColor={'lightGray'}
                />
                <Box
                  alignItems={'center'}
                  columnGap={'md'}
                  flexDirection={'row'}>
                  <Box
                    width={SrfValue(56)}
                    height={SrfValue(56)}
                    borderRadius={'lg'}
                    backgroundColor={'primaryBg'}
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
                    <Box rowGap={'sm'}>
                      <Text letterSpacing={0.5} variant={'medium14'}>
                        In Delivery
                      </Text>
                      <Text letterSpacing={0.5} variant={'regular14'}>
                        Bali, Indonesia
                      </Text>
                    </Box>
                    <Box justifyContent={'center'}>
                      <Text letterSpacing={0.5} variant={'regular12'}>
                        00. 00PM
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box marginBottom={'sm'}>
                <Box
                  height={SrfValue(40)}
                  bottom={-40}
                  left={25}
                  width={SrfValue(2)}
                  position={'absolute'}
                  backgroundColor={'lightGray'}
                />

                <Box
                  alignItems={'center'}
                  columnGap={'md'}
                  flexDirection={'row'}>
                  <Box
                    width={SrfValue(56)}
                    height={SrfValue(56)}
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
                    <Box rowGap={'sm'}>
                      <Text letterSpacing={0.5} variant={'medium14'}>
                        Transit - Sending City
                      </Text>
                      <Text letterSpacing={0.5} variant={'regular14'}>
                        jakarta, Indonesia
                      </Text>
                    </Box>
                    <Box justifyContent={'center'}>
                      <Text letterSpacing={0.5} variant={'regular12'}>
                        21. 00PM
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box marginBottom={'sm'}>
                <Box
                  alignItems={'center'}
                  columnGap={'md'}
                  flexDirection={'row'}>
                  <Box
                    width={SrfValue(56)}
                    height={SrfValue(56)}
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
                    <Box rowGap={'sm'}>
                      <Text letterSpacing={0.5} variant={'medium14'}>
                        Send Form Sukabumi
                      </Text>
                      <Text letterSpacing={0.5} variant={'regular14'}>
                        Sukabumi, Indonesia
                      </Text>
                    </Box>
                    <Box justifyContent={'center'}>
                      <Text letterSpacing={0.5} variant={'regular12'}>
                        19. 00PM
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </BottomSheet>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MapScreen;
