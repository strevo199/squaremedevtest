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
      flexDirection={'row'}
      columnGap={'md'}
      justifyContent={'space-between'}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{width: SrfValue(25), height: SrfValue(25)}}
          source={imagespackages.arrowback}
        />
      </TouchableOpacity>
      <Box flex={1}>
        <Text color={'primaryColor'} variant={'bold18'}>
          {headertext}
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
