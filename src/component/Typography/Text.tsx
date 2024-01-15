import {createText} from '@shopify/restyle';
import {ComponentProps, FC} from 'react';
import {ThemeType} from '../../Theme';

/**
 * Custom `Text` component with type checked layout stylings and props including typography.
 * All styles can be passed as props rather than using the StyleSheet API, and we can select a variant with predefined styles.
 *
 * Includes all the props that are available in the native `Text` component.
 * Fully themeable.
 * @see https://github.com/Shopify/restyle#text
 */
const RestyleText = createText<ThemeType>();

export type RestyleTextProps = ComponentProps<typeof RestyleText>;

export type TextProps = RestyleTextProps & {
  fontVariant?: keyof ThemeType['fontSizes'];
};

const Text: FC<TextProps> = props => {
  const {
    children,
    fontVariant = 'p',
    variant = 'body',
    color = 'primarythemecolor',
    ...rest
  } = props;

  // const theme = useTheme();

  // const fontSize = theme.fontSizes[fontVariant];

  return (
    <RestyleText variant={variant} {...rest} color={color}>
      {children}
    </RestyleText>
  );
};
export {Text};
