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
                      ...prevState,
                      { name: option.name, option: subOption },
                    ]);
                  }}
                >
                  <RadioButton
                    key={"subOption" + i}
                    text={subOption}
                    name={option.name}
                    // onClick={() => {
                    //   setExtra((prevState) => [
                    //     ...prevState,
                    //     { name: option.name, option: subOption },
                    //   ]);
                    // }}
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
