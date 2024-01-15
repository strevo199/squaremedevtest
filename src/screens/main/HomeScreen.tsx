import React from 'react';
import {Box} from '../../component/Layout/Box';
import {Text} from '../../component/Typography/Text';
import LinearGradient from 'react-native-linear-gradient';
import SrfValue from '../../utils/SrfValue';
import { Image } from 'react-native';
import { palette } from '../../Theme/palette';
import { imagespackages } from '../../assets';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={[
        '#d2f5fe',
        '#e7fafe',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
      ]}
      style={{flex: 1}}>
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


        <Box>
          <Image
            style={{
              width: SrfValue(25),
              tintColor: palette.black,
              height: SrfValue(25),
            }}
            source={imagespackages.scanbarcode}
          />
        </Box>
      </Box>
    </LinearGradient>
  );
};

export default HomeScreen;
