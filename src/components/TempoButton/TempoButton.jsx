import React, { useState } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../Buttons/Buttons";

const TempoChoice = styled(SecondaryButton)`
  padding: 0;
  width: 65%;
  height: 5rem;
  min-height: max-content;
  min-width: min-content;
  border-radius: 0px;
`;

const TempoButton = ({ option, onClick }) => {
  const [selected] = useState(option);

  return (
    <>
      <TempoChoice onClick={() => onClick(selected)} modifiers={["large"]}>
        <p style={{ wordSpacing: "1rem" }}>
          {option.min} &#x2264; {option.label} &#8805; {option.max}
        </p>
      </TempoChoice>
    </>
  );
};

export default TempoButton;
