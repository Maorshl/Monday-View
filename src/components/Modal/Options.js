import React from "react";
import RadioButton from "monday-ui-react-core/dist/RadioButton";

function Options({ options, setExtra }) {
  return (
    <div>
      {options.map((option, i) => {
        return (
          <div key={"option" + i}>
            <p>{option.name}</p>
            {option.options.map((subOption, i) => {
              return (
                <div
                  onMouseUp={() => {
                    setExtra((prevState) => [
                      { name: option.name, option: subOption },
                    ]);
                  }}
                >
                  <RadioButton
                    key={"subOption" + i}
                    text={subOption}
                    name={option.name}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Options;
