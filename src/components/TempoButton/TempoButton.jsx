import React, { useState } from "react";
import { PrimaryButton } from "../Buttons/Buttons";

const TempoButton = ({ option, onClick }) => {
  const [selected] = useState(option);

  return (
    <PrimaryButton
      onClick={() => onClick(selected)}
      modifiers={["large"]}
      disabled={option.label === "Custom"}
    >
      <p style={{ wordSpacing: "1rem" }}>
        {option.min} &#x2264; {option.label} &#8805; {option.max}
      </p>
    </PrimaryButton>
  );
};

export default TempoButton;
