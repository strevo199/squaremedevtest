/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import LinearGradient from 'react-native-linear-gradient';
import SrfValue from '../../utils/SrfValue';
import {Image, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import {palette} from '../../Theme/palette';
import {imagespackages} from '../../assets';
import {FlatList} from 'react-native';
import Gif from 'react-native-gif';
import ScreenOne from './ScreenOne';

const HomeScreen = ({navigation}) => {
  const [show, setShow] = useState(true);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Box flex={1} backgroundColor={'white'}>
        <Box
          // marginVertical={'md'}
          flexDirection={'row'}
          marginHorizontal={'lg'}
          columnGap={'md'}
          justifyContent={'space-between'}>
          <Image
            style={{width: SrfValue(48), height: SrfValue(48)}}
            source={imagespackages.person}
          />
          <Image
            style={{width: SrfValue(48), height: SrfValue(48)}}
            source={imagespackages.info}
          />
        </Box>
        <Box marginHorizontal={'lg'} marginVertical={'md'}>
          <Text color={'black'} variant={'bold18'}>
            Hello good Morning!
          </Text>
        </Box>

        {show ? (
          <Box marginTop={'lg'} flex={1}>
            <Box paddingHorizontal={'md'} flex={1}>
              <FlatList
                data={[{}, {}, {}, {}]}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({iten}) => (
                  <Box
                    padding={'lg'}
                    height={SrfValue(260)}
                    style={{
                      backgroundColor: '#F1F6FB',
                      margin: SrfValue(5),
                      borderRadius: SrfValue(25),
                    }}>
                    <Image
                      style={{width: SrfValue(184), height: SrfValue(210)}}
                      source={imagespackages.bike}
                    />
                  </Box>
                )}
              />
            </Box>
            <Box flex={0.9}>
              <Box alignItems={'center'} marginBottom={'md'}>
                <Text variant={'bold14'} color={'lightGray'}>
                  <Text>&#x25cf;</Text> &#x25cf; &#x25cf; &#x25cf; &#x25cf;
                  &#x25cf;
                </Text>
              </Box>
              <Box
                height={SrfValue(109)}
                alignItems={'center'}
                flexDirection={'row'}
                justifyContent={'space-around'}
                backgroundColor={'primaryBg'}>
                <Box  alignItems={'center'}>
                  <Text variant={'regular14'} color={'mainText'}>
                    Gotten your
                  </Text>
                  <Text variant={'regular14'} color={'mainText'}>
                    E-Bike yet?
                  </Text>
                </Box>
                <Box height={SrfValue(56)}>
                  <TouchableOpacity
                    onPress={() =>setShow(!show)}
                    style={{
                      borderRadius: SrfValue(60),
                      width: SrfValue(183),
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      backgroundColor: '#000',
                      flexDirection: 'row',
                    }}>
                    <Text variant={'regular14'} color={'white'}>
                      Your Orders
                    </Text>
                    <Image
                      style={{
                        height: SrfValue(10),
                        width: SrfValue(16),
                      }}
                      source={imagespackages.backarrow}
                    />
                  </TouchableOpacity>
                </Box>
              </Box>
              <Box
                marginHorizontal={'md'}
                flexDirection={'row'}
                alignItems={'center'}
                flex={1}>
                <Box>
                  <Image
                    source={imagespackages.gggg}
                    style={{width: SrfValue(140), height: SrfValue(90)}}
                  />
                </Box>
                <Box flex={1} alignItems={'center'}>
                  <Text variant={'regular16'}>You too can join our</Text>
                  <Text variant={'regular16'}> Elite squad of E-bikers</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <ScreenOne navigation={navigation} />
        )}
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
