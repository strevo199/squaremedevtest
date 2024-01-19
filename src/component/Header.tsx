import {Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {imagespackages} from '../assets';
import SrfValue from '../utils/SrfValue';
import {Box} from './Layout/Box';
import {Text} from './Typography/Text';

const Header = ({headertext}) => {
  const navigation = useNavigation();

  return (
    <Box
      marginVertical={'lg'}
      marginTop={'md'}
      flexDirection={'row'}
      columnGap={'md'}
      justifyContent={'space-between'}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{width: SrfValue(15), height: SrfValue(20)}}
          source={imagespackages.Path}
        />
      </TouchableOpacity>
      <Box alignItems={'center'} flex={1}>
        <Text color={'mainText'} variant={'bold18'}>
          {headertext}
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
