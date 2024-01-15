/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Box} from './Layout/Box';
import {Text} from './Typography/Text';
import SrfValue from '../utils/SrfValue';
import {palette} from '../Theme/palette';
import OtpInputs from 'react-native-otp-inputs';

const PinComponent = () => {
  const [pin, setPin] = useState('');

  const handleKeyPress = key => {
    if (key === 'delete') {
      // Remove the last digit when the delete key is pressed
      setPin(prevPin => prevPin.slice(0, -1));
    } else if (pin.length < 6) {
      // Limit the PIN length to 4 digits
      setPin(prevPin => prevPin + key);
    }
  };


  return (
    <Box justifyContent={'space-between'} flex={1}>
      <Box alignItems={'center'}>
        {/* Display the entered PIN */}
        <Text style={{fontSize:64}} color={'white'}>  {pin && `₦ ${pin}`}</Text>
      </Box>

      {/* Keypad */}
      <Box style={styles.keypad}>
        {/* Row 1 */}
        <Box style={styles.keyRow}>
          <KeyButton value="1" onPress={() => handleKeyPress('1')} />
          <KeyButton value="2" onPress={() => handleKeyPress('2')} />
          <KeyButton value="3" onPress={() => handleKeyPress('3')} />
        </Box>

        {/* Row 2 */}
        <Box style={styles.keyRow}>
          <KeyButton value="4" onPress={() => handleKeyPress('4')} />
          <KeyButton value="5" onPress={() => handleKeyPress('5')} />
          <KeyButton value="6" onPress={() => handleKeyPress('6')} />
        </Box>

        {/* Row 3 */}
        <Box style={styles.keyRow}>
          <KeyButton value="7" onPress={() => handleKeyPress('7')} />
          <KeyButton value="8" onPress={() => handleKeyPress('8')} />
          <KeyButton value="9" onPress={() => handleKeyPress('9')} />
        </Box>

        {/* Row 4 */}
        <Box style={styles.keyRow}>
          <KeyButton value="&#x25cf;" onPress={() => handleKeyPress('.')} />
          <KeyButton value="0" onPress={() => handleKeyPress('0')} />
          <KeyButton value="<" onPress={() => handleKeyPress('delete')} />
        </Box>
      </Box>

      {/* Submit Button */}
      {/* <TouchableOpacity style={styles.submitButton} onPress={handleSubmitPin}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity> */}
    </Box>
  );
};

const KeyButton = ({value, onPress}) => (
  <TouchableOpacity style={styles.keyButton} onPress={onPress}>
    <Text color={'white'} variant={'regular22'}>
      {value}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  pinContainer: {
    marginBottom: 20,
  },
  pinText: {
    fontSize: SrfValue(24),
  },
  keypad: {
    flexDirection: 'column',
  },
  keyRow: {
    flexDirection: 'row',
    marginBottom: SrfValue(10),
  },
  keyButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SrfValue(64),
    width: SrfValue(77),
    margin: SrfValue(5),
  },

  submitButton: {
    backgroundColor: palette.primaryColor,
    height: SrfValue(48),
    borderRadius: SrfValue(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: SrfValue(14),
  },
});

export default PinComponent;
