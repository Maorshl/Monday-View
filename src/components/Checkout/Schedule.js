import React, { useState } from "react";
import RadioButton from "monday-ui-react-core/dist/RadioButton";

function Schedule({ setDate }) {
  const [scheduleOpen, setScheduleOpen] = useState(false);

  return (
    <div style={{ paddingTop: "5vh" }}>
      <h5>When?</h5>
      <div className="schedule-radio">
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
        </div>
        {scheduleOpen && <div></div>}
      </div>
    </div>
  );
}

export default Schedule;
