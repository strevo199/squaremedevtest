import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import Theme from './src/Theme';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <ThemeProvider theme={Theme.lightTheme}>
       <Navigation />
    </ThemeProvider>
  );
};

export default App;
