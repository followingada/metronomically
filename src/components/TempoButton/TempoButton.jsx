import React, { useState } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../Buttons/Buttons";
import { apiCall } from "../../utils/api-tracks-call";

const TempoChoice = styled(SecondaryButton)`
  padding: 0;
  width: 50%;
  height: 45%;
  border-radius: 0px;
`;

const TempoButton = ({ option }) => {
  const [selected, setSelected] = useState(option);

  return (
    <>
      <TempoChoice onClick={() => apiCall(selected)} modifiers={["large"]}>
        <p style={{ wordSpacing: "1rem" }}>
          {option.min} &#x2264; {option.label} &#8805; {option.max}
        </p>
      </TempoChoice>
    </>
  );
};

export default TempoButton;
