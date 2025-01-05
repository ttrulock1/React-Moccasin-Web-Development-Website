import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div style={{ height: "630px", minWidth: "320px" }}>
      <InlineWidget url="https://calendly.com/toddstrulock/20-minute-meeting-clone-clone" />
    </div>
  );
};

export default CalendlyWidget;