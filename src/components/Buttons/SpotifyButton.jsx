import React from "react";
import authoriseUser from "../../utils/authorise-user";
import styled from "styled-components";
import { typeScale, defaultTheme } from "../../assets";

const SpotfityButton = styled.button`
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

const SpotifyLogin = () => {
  return (
    <SpotfityButton onClick={authoriseUser} disabled>
      Coming soon!
    </SpotfityButton>
  );
};

export default SpotifyLogin;
