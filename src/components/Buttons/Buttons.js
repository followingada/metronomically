import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale, defaultTheme } from "../../assets";

export const BUTTON_MODIFIERS = {
  small: () => `
  padding: 8px;
  font-size: ${typeScale.helperText};
  `,
  large: () => `
  padding: 16px 24px;
  font-size: ${typeScale.header5};
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
    }
    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  error: () => `
  background-color: ${defaultTheme.status.errorColor};
  color: ${defaultTheme.textColorInverted};
  &:hover {
    background-color: ${defaultTheme.status.errorColorHover};
  }
  &:active {
    background-color: ${defaultTheme.status.errorColorActive};
  }
  `,
  success: () => `
  background-color: ${defaultTheme.status.successColor};
  color: ${defaultTheme.textColorInverted};
  &:hover {
    background-color: ${defaultTheme.status.successColorHover};
  }
  &:active {
    background-color: ${defaultTheme.status.successColorActive};
  }
  `,
};

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  font-size: ${typeScale.paragraph};
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

export const LoginButton = styled.button`
  background-color: ${defaultTheme.accentColor};
  color: ${defaultTheme.textColorInverted};

  height: 250px;
  width: 250px;

  box-shadow: 0px 4px 7px 2px rgba(0, 0, 0, 0.23);
  border-radius: 50%;
  border: none;
  cursor: pointer;

  font-size: ${typeScale.header3};
  line-height: 1.5em

  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.accentColor};
  }
  &:focus {
    box-shadow: 0 0 0 4pt ${defaultTheme.primaryColor};
    outline: none;
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.accentColor};
  }
  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.accentColor};
  }
`;

export const PrimaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  background: none;
  color: ${defaultTheme.primaryColor};

  padding: 0;
  width: 65%;
  height: 5rem;
  min-height: max-content;
  min-width: min-content;
  border-radius: 0px;

  &:disabled {
    background: none;
    border: 2px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

//not used
export const SecondaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  border: 2px solid transparent;
  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

//not used
export const TertiaryButton = styled(Button)`
  background: none;
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};
  &:disabled {
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
