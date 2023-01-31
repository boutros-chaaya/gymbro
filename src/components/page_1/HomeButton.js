import React from "react";

// ref: Button that User sees on home page?

const HomeButton = (props) => {
  const btn_name = props.btn_name;
  return (
    <button
      type="button"
      className="HomeButton"
      onClick={() => console.log("User just clicked on:" + btn_name)}
    >
      {btn_name}
    </button>
  );
};

export default HomeButton;
