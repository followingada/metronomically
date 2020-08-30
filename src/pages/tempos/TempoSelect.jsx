import React from "react";
import TempoButton from "../../components/TempoButton/TempoButton";

const TempoSelect = (props) => {
  console.log(props);
  return (
    <section style={{ height: "100vh" }}>
      <span className="pure-g" style={{ height: "100%" }}>
        <div className="pure-u-md-1-4 pure-u-lg-1-4" />
        <div
          className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2"
          style={{
            backgroundColor: "#fbfbfb",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {tempoOptions.map((option) => (
            <TempoButton
              key={`select-chip-${option.label}`}
              min={option.min}
              max={option.max}
              label={option.label}
            />
          ))}
        </div>
        <div className="pure-u-md-1-4 pure-u-lg-1-4" />
      </span>
    </section>
  );
};

export default TempoSelect;

const tempoOptions = [
  {
    min: 115,
    max: 145,
    label: "Slow",
  },
  {
    min: 145,
    max: 175,
    label: "Medium",
  },
  {
    min: 175,
    max: 235,
    label: "Fast",
  },
  {
    min: 20,
    max: 100,
    label: "Blues",
  },
  {
    min: "?",
    max: "?",
    label: "Custom",
  },
];
