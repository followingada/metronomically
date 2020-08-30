import React from "react";
import styled from "styled-components";
import SpotifyLogin from "../../components/Buttons/SpotifyButton";
import { Illustrations, defaultTheme } from "../../assets";

const Root = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 720px) 1fr;
  text-align: center;
  height: 100%;
`;

const Img = styled.img`
  width: 400px;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  word-spacing: 2em;
  text-align: left;
  text-transform: uppercase;
  line-height: 14rem;
  font-size: 15rem;
  color: ${defaultTheme.primaryActiveColor};
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-rows; 1fr auto
`;

const LoginContainer = styled.div`
  align-self: center;
`;

const LoginPage = () => (
  <Root>
    <TitleContainer>
      <Title>Swing List</Title>
      <Img src={Illustrations.Music} alt="Play that funky music!" />
    </TitleContainer>
    <LoginContainer>
      <SpotifyLogin />
    </LoginContainer>
  </Root>
);

export default LoginPage;
