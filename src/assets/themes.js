import { pink, neutral, yellow, red, green, blue } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: pink[300],
  primaryHoverColor: pink[200],
  primaryActiveColor: pink[100],
  accentColor: blue[100],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[500],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
