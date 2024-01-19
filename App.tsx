import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import Theme from './src/Theme';
import Navigation from './src/navigation/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <ThemeProvider theme={Theme.lightTheme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigation />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
