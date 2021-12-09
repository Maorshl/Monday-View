import React, { useState } from "react";
import RadioButton from "monday-ui-react-core/dist/RadioButton";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Schedule({ setDate, date }) {
  const [scheduleOpen, setScheduleOpen] = useState(false);

  return (
    <div style={{ paddingTop: "5vh" }}>
      <h5>When?</h5>
      <div
        className="schedule-radio"
        // style={{ width: scheduleOpen ? "80vw" : "30vw" }}
      >
        <div onClick={() => setScheduleOpen(false)}>
          <RadioButton
            key={"subOption"}
            text={"As soon as possible"}
            name={"time"}
            defaultChecked={true}
          />
        </div>
        <div onClick={() => setScheduleOpen(true)}>
          <RadioButton key={"subOption"} text={"Schedule"} name={"time"} />
          {scheduleOpen && (
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              showTimeSelect
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
