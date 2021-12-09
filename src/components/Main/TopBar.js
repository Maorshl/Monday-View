import React from "react";
import photo from "../../assets/pictures/Banner.png";

function TopBar(props) {
  return (
    // <div className="TopBar">
    <img
      className="topbar-image"
      src={photo}
      style={{ width: "72%" }}
      alt="Top bar"
    />
    // </div>
  );
}

export default TopBar;
