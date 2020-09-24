import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LoginButton } from "../components/Buttons/Buttons";
import TempoButton from "../components/TempoButton/TempoButton";
import Spinner from "../components/Spinner/Spinner";
import tempoOptions from "../config/tempo-options";
import { Illustrations, defaultTheme } from "../assets";
import getAccessToken from "../utils/get-access-token";
import apiCall from "../utils/api-tracks-call";
import authoriseUser from "../utils/authorise-user";

const App = ({ location }) => {
  let localToken = getAccessToken();
  const [hash, saveHash] = useState(localToken || "");
  const [loading, setLoading] = useState(true);
  const hashProp = location.hash;

  // const [response, setResponse] = useState();

  useEffect(() => {
    setLoading(true);
    if (!localToken) {
      saveHash(hashProp);
      localStorage.setItem("accessToken", hashProp.split("#access_token=")[1]);
      window.history.replaceState({}, "Swinglist", "/");
    }
    setLoading(false);
  }, [hashProp, localToken]);

  const getTracksFromApi = (selection) => {
    const response = apiCall(selection);
    console.log(response);
  };

  return (
    <Root>
      <TitleContainer>
        <Title>Swing List</Title>
        <SubTitle>a tempo driven playlist generator</SubTitle>
        <Record src={Illustrations.Record} alt="" />
      </TitleContainer>
      {!hash && (
        <LoginContainer>
          {loading ? (
            <Spinner />
          ) : (
            <LoginButton onClick={authoriseUser}>
              Log in with Spotify
            </LoginButton>
          )}
        </LoginContainer>
      )}
      {hash && (
        <TempoContainer>
          <p>select playlist bpm range</p>
          {tempoOptions.map((option) => (
            <TempoButton
              key={`select-chip-${option.label}`}
              option={option}
              onClick={getTracksFromApi}
            />
          ))}
        </TempoContainer>
      )}
    </Root>
  );
};

export default App;

const Root = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, min-content) 1fr;
  text-align: center;
  height: 100%;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  word-spacing: 2em;
  text-align: left;
  text-transform: uppercase;
  line-height: 15rem;
  font-size: 15rem;
  color: ${defaultTheme.primaryActiveColor};
`;

const SubTitle = styled.p`
  padding-left: 1rem;
  margin: 0;
  word-spacing: 3em;
  text-transform: lowercase;
  font-style: italic;
  color: ${defaultTheme.primaryActiveColor};
  width: fit-content;
`;

const Record = styled.img`
  position: fixed;
  bottom: -21rem;
  left: -18rem;
  width: 43rem; /*37rem;*/
  z-index: -1;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-rows: max-content min-content auto;
`;

const LoginContainer = styled.div`
  align-self: center;
  display: grid;
  justify-content: center;
`;

const TempoContainer = styled.div`
  padding: 24px 20px;
  display: grid;
  grid-template-rows: 2.19rem repeat(5, 1fr) 2.19rem;
  justify-items: center;
  align-items: center;
  color: ${defaultTheme.accentColor};
`;
