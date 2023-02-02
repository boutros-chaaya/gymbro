import React from "react";

// ref: Button that User sees on home page?

const BlueHomeButton = (props) => {
  const btn_name = props.btn_name;
  const link = props.link
  return (
    <a href={link} className="HomeButtonLink">
    <button
      type="button"
      onClick="window.location.href='/workout"
      className="HomeButton"
    >
      {btn_name}
    </button>
    </a>
  );
};

export default BlueHomeButton;
