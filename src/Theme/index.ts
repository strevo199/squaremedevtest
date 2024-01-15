import {createTheme, useTheme as useRestyleTheme} from '@shopify/restyle';

import {palette} from './palette';
import SrfValue from '../utils/SrfValue';
import {PaddingSizesObjectType} from './types';

const lightTheme = createTheme({
  borderRadii: {
    lg: SrfValue(32),
    sml: SrfValue(24),
    md: SrfValue(16),
    none: 0,
    sm: SrfValue(8),
    xl: SrfValue(64),
    xs: SrfValue(4),
  },

  breakpoints: {
    largeScreen: 412,
    phone: 0,
    tablet: 768,
  },

  buttonSizes: {
    lg: {
      paddingHorizontal: 'xl',
      paddingVertical: 'lg',
    },
    md: {
      paddingHorizontal: 'lg',
      paddingVertical: 'md',
    },
    none: {
      paddingHorizontal: 'none',
      paddingVertical: 'none',
    },
    sm: {
      paddingHorizontal: 'md',
      paddingVertical: 'sm',
    },
    xl: {
      paddingHorizontal: 'xxl',
      paddingVertical: 'xl',
    },
    xs: {
      paddingHorizontal: 'sm',
      paddingVertical: 'xs',
    },
  } as PaddingSizesObjectType,

  buttonVariants: {
    defaults: {
      borderRadius: 'sm',
    },
    filled: {
      backgroundColor: 'primaryColor',
    },
    ghost: {
      backgroundColor: 'paleGrey50',
    },
    none: {},
    outlined: {
      borderColor: 'paleGrey',
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: 'transparent',
    },
  },

  colors: {
    ...palette,
    imageBackgroundTint: palette.greenPrimary,
    mainBackground: palette.white,
    textColorInverted: palette.white,
    textColor: palette.primaryBlack,
    primarybackground: palette.primaryColor,
    primarythemecolor: palette.mainText,
  },

  fontSizes: {
    caption: SrfValue(12),
    h1: SrfValue(32),
    h2: SrfValue(24),
    h3: SrfValue(20),
    h4: SrfValue(18),
    h5: SrfValue(16),
    h6: SrfValue(14),
    p: SrfValue(14),
    s: SrfValue(6),
  },

  iconSizes: {
    'logo-iconsize': {
      height: SrfValue(40),
      width: SrfValue(40),
    },
    lg: {
      height: SrfValue(32),
      width: SrfValue(32),
    },
    m: {
      height: SrfValue(12),
      width: SrfValue(12),
    },
    mm: {
      height: SrfValue(16),
      width: SrfValue(17),
    },
    md: {
      height: SrfValue(24),
      width: SrfValue(24),
    },
    s: {
      height: SrfValue(4),
      width: SrfValue(4),
    },
    sml: {
      height: SrfValue(20),
      width: SrfValue(20),
    },
    sm: {
      height: SrfValue(16),
      width: SrfValue(16),
    },
    xl: {
      height: SrfValue(48),
      width: SrfValue(48),
    },
    xll: {
      height: SrfValue(32),
      width: SrfValue(99),
    },
    xlll: {
      height: SrfValue(38),
      width: SrfValue(140),
    },

    xxl: {
      height: SrfValue(60),
      width: SrfValue(60),
    },
    xs: {
      height: SrfValue(8),
      width: SrfValue(8),
    },
    xsl: {
      height: SrfValue(108),
      width: SrfValue(120),
    },
    pspxl: {
      height: SrfValue(80),
      width: SrfValue(80),
    },
    xxxl: {
      height: SrfValue(138),
      width: SrfValue(180),
    },
    xxxxl: {
      height: SrfValue(183),
      width: SrfValue(157),
    },
  },

  spacing: {
    lg: SrfValue(32),
    md: SrfValue(16),
    mmd: SrfValue(20),
    none: 0,
    smd: SrfValue(12),
    sm: SrfValue(8),
    sml: SrfValue(24),
    ss: SrfValue(6),
    ssm: SrfValue(8),
    xl: SrfValue(64),
    xs: SrfValue(4),
    xxl: SrfValue(128),
    xxxl: SrfValue(228),
    xxs: SrfValue(2),
    xxxs: SrfValue(1),
    rs: SrfValue(-200),
    rlg: SrfValue(-100),
    rr: SrfValue(-30),
  },

  textInputSizes: {
    lg: {
      paddingHorizontal: 'lg',
      paddingVertical: 'lg',
    },
    md: {
      paddingHorizontal: 'md',
      paddingVertical: 'md',
    },
    none: {
      paddingHorizontal: 'none',
      paddingVertical: 'none',
    },
    sm: {
      paddingHorizontal: 'sm',
      paddingVertical: 'sm',
    },
    xl: {
      paddingHorizontal: 'xl',
      paddingVertical: 'xl',
    },
    xs: {
      paddingHorizontal: 'xs',
      paddingVertical: 'xs',
    },
  } as PaddingSizesObjectType,

  textInputVariants: {
    defaults: {
      borderRadius: 'sm',
      fontSize: SrfValue(14),
      fontWeight: '500',
    },
    filled: {
      backgroundColor: 'paleGrey50',
      color: 'primaryBlack',
    },
    none: {},
    outlined: {
      borderColor: 'paleGrey',
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: 'transparent',
    },
  },

  textVariants: {
    body: {},
    bold8: {
      color: 'darkGrey',
      fontSize: SrfValue(8),
      fontWeight: '700',
      lineHeight: SrfValue(16),
    },
    bold10: {
      color: 'darkGrey',
      fontSize: SrfValue(10),
      fontWeight: '800',
      lineHeight: SrfValue(16),
    },
    bold12: {
      color: 'darkGrey',
      fontSize: SrfValue(12),
      fontWeight: '800',
      lineHeight: SrfValue(16),
    },
    bold14: {
      fontSize: SrfValue(14),
      fontWeight: '800',
    },
    bold16: {
      fontSize: SrfValue(16),
      fontWeight: '800',
    },
    bold18: {
      color: 'textColor',
      fontSize: SrfValue(18),
      fontWeight: '800',
    },
    bold20: {
      color: 'textColor',
      fontSize: SrfValue(20),
      fontWeight: '800',
    },
    bold22: {
      fontSize: SrfValue(22),
      fontWeight: '800',
    },
    bold24: {
      fontSize: SrfValue(24),
      fontWeight: '800',
    },
    bold32: {
      fontSize: SrfValue(32),
      fontWeight: '800',
    },
    bold48: {
      fontSize: SrfValue(48),
      fontWeight: '800',
    },
    defaults: {
      color: 'primaryBlack',
      fontSize: SrfValue(14),
    },
    medium10: {
      fontSize: SrfValue(10),
      fontWeight: '600',
    },
    medium12: {
      color: 'textColor',
      fontSize: SrfValue(12),
      fontWeight: '600',
    },
    medium14: {
      fontSize: SrfValue(14),
      fontWeight: '700',
    },
    medium16: {
      color: 'textColor',
      fontSize: SrfValue(16),
      fontWeight: '700',
      lineHeight: SrfValue(20),
    },
    medium18: {
      fontSize: SrfValue(18),
      fontWeight: '700',
    },
    medium22: {
      fontSize: SrfValue(22),
      fontWeight: '700',
    },
    medium8: {
      fontSize: SrfValue(8),
      fontWeight: '600',
    },
    none: {},
    regular9: {
      fontSize: SrfValue(9),
      fontWeight: '400',
      lineHeight: SrfValue(16),
    },
    regular10: {
      fontSize: SrfValue(10),
      fontWeight: '400',
      lineHeight: SrfValue(16),
    },
    regular12: {
      fontSize: SrfValue(12),
      fontWeight: '400',
      lineHeight: SrfValue(16),
    },
    regular14: {
      color: 'textColor',
      fontSize: SrfValue(14),
      fontWeight: '400',
      lineHeight: SrfValue(16),
    },
    regular16: {
      color: 'textColor',
      fontSize: SrfValue(16),
      fontWeight: '400',
      lineHeight: SrfValue(20),
    },
    regular18: {
      color: 'textColor',
      fontSize: SrfValue(18),
      fontWeight: '400',
      lineHeight: SrfValue(18),
    },
    regular22: {
      color: 'textColor',
      fontSize: SrfValue(22),
      fontWeight: '400',
      lineHeight: SrfValue(22),
    },
    regular24: {
      color: 'textColor',
      fontSize: SrfValue(24),
      fontWeight: '400',
      lineHeight: SrfValue(28),
    },
    regular8: {
      fontSize: SrfValue(8),
      fontWeight: '400',
    },
    font10: {
      fontSize: SrfValue(10),
      fontWeight: '400',
      lineHeight: SrfValue(16),
    },
    font12: {
      fontSize: SrfValue(12),
      fontWeight: '400',
    },
    font14: {
      color: 'textColor',
      fontSize: SrfValue(14),
      fontWeight: '400',
    },
    font8: {
      fontSize: SrfValue(8),
      fontWeight: '400',
    },
    title: {
      fontSize: SrfValue(32),
      fontWeight: '500',
    },
  },

  zIndices: {
    modal: 100,
    overlay: 10,
  },
});

export type ThemeType = typeof lightTheme;

export const useTheme = () => useRestyleTheme<ThemeType>();

export const darkTheme: ThemeType = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
  },
};

export default {lightTheme};
