import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SpotifyLogin from "../components/Buttons/SpotifyButton";
import { Illustrations, defaultTheme } from "../assets";
import getAccessToken from "../utils/get-access-token";
import tempoOptions from "../config/tempo-options";
import TempoButton from "../components/TempoButton/TempoButton";

const App = ({ location }) => {
  let localToken = getAccessToken();
  const [hash, saveHash] = useState(localToken || "");
  const hashProp = location.hash;

  useEffect(() => {
    if (!localToken) {
      saveHash(hashProp);
      localStorage.setItem("accessToken", hashProp.split("#access_token=")[1]);
      window.history.replaceState({}, "Swinglist", "/");
    }
  }, [hashProp, localToken]);

  return (
    <Root>
      <TitleContainer>
        <Title>Swing List</Title>
        <Img src={Illustrations.Music} alt="Play that funky music!" />
      </TitleContainer>
      {!hash && (
        <LoginContainer>
          <SpotifyLogin />
        </LoginContainer>
      )}
      {hash && (
        <TempoContainer>
          <p>select playlist bpm range</p>
          {tempoOptions.map((option) => (
            <TempoButton key={`select-chip-${option.label}`} option={option} />
          ))}
        </TempoContainer>
      )}
    </Root>
  );
};

export default App;

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

const TempoContainer = styled.div`
  padding: 24px 20px;
  display: grid;
  grid-template-rows: 35px repeat(5, 1fr);
  justify-items: center;
  align-items: center;
`;
