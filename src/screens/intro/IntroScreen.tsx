import React, {useState} from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ImageBackground} from 'react-native';
import {imagespackages} from '../../assets';
import {StatusBar} from 'react-native';
import {Image} from 'react-native';
import SrfValue from '../../utils/SrfValue';
import {LinearGradient} from 'react-native-linear-gradient';

const IntroScreen = ({navigation}) => {
  const [current, setcurrent] = useState(0);
  const showCase = [
    {
      id: 1,
      image: imagespackages.intro1,
      mainText: 'Fast and easy payments to anyone.',
      subText: 'Receive funds sent to you in seconds.',
    },
    {
      id: 2,
      image: imagespackages.intro2,
      mainText: 'A super secure way to pay your bills',
      subText: 'Receive funds sent to you in seconds.',
    },
    {
      id: 3,
      image: imagespackages.intro3,
      mainText: 'Spend your money easily without any complications',
      subText: '',
    },
  ];

  const handleNext = () => {
    // if (current === 2) {
    //   navigation.navigate("WelcomeScreen")
    //   return;
    // }
    const lastest = current + 1;
    setcurrent(lastest);
  };

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"rgba(0, 0, 0, 1)"}}>
      <StatusBar hidden />
      <ImageBackground
        resizeMethod="scale"
        resizeMode="stretch"
        source={showCase[current]?.image}
        style={{
          flex: 1,
        }}>
        <LinearGradient
          colors={[
            ' rgba(0, 0, 0, 0.102)',
            ' rgba(0, 0, 0, 0.02)',
            ' rgba(0, 0, 0, 0.152)',
            ' rgba(0, 0, 0, 0.202)',
            ' rgba(0, 0, 0, 0.802)',
            ' rgba(0, 0, 0, 0.9)',
          ]}
          style={{flex: 1}}>
          <Box flex={1} margin={'md'} marginHorizontal={'lg'}>
            <Box flex={1}>
              <Image
                style={{
                  height: SrfValue(20),
                  width: SrfValue(154),
                  marginTop: SrfValue(28),
                }}
                source={imagespackages.logo}
              />
            </Box>
            <Box
              flex={0.4}
              paddingBottom={'md'}
              justifyContent={'space-between'}>
              <Box flexDirection={'row'} columnGap={'sm'}>
                {showCase.map((item, index) => (
                  <Box
                  key={`${index}`}
                    borderRadius={'md'}
                    height={SrfValue(4)}
                    width={SrfValue(40)}
                    backgroundColor={index === current ? 'white' : 'darkGrey'}
                  />
                ))}
              </Box>
              <Box>
                <Text
                  color={'white'}
                  letterSpacing={SrfValue(1)}
                  variant={'medium22'}>
                  {showCase[current].mainText}
                </Text>
                <Text marginTop={'md'} variant={'regular16'} color={'white'}>
                  {showCase[current].subText}
                </Text>
              </Box>
              {current === 2 ? (
                <Box>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('WelcomeScreen')}
                    style={{
                      height: SrfValue(48),
                      // width: SrfValue(100),
                      borderRadius: SrfValue(8),
                      justifyContent: 'center',
                      backgroundColor: '#ffffff',
                      alignItems: 'center',
                    }}>
                    <Text color={'primaryColor'} variant={'medium16'}>
                      Get Started
                    </Text>
                  </TouchableOpacity>
                </Box>
              ) : (
                <Box justifyContent={'space-between'} flexDirection={'row'}>
                  <TouchableOpacity
                    style={{
                      height: SrfValue(48),
                      width: SrfValue(100),
                      justifyContent: 'center',
                    }}>
                    <Text color={'white'} variant={'regular18'}>
                      Skip
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleNext}
                    style={{
                      height: SrfValue(48),
                      width: SrfValue(100),
                      borderRadius: SrfValue(8),
                      justifyContent: 'center',
                      backgroundColor: '#ffffff',
                      alignItems: 'center',
                    }}>
                    <Text variant={'regular18'}>Next</Text>
                  </TouchableOpacity>
                </Box>
              )}
            </Box>
          </Box>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default IntroScreen;
