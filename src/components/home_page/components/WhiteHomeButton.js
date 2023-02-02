import React from 'react'

const WhiteHomeButton = (props) => {
    const btn_name = props.btn_name;
    const link = props.link
    return (
      <a href={link} className="HomeButtonLink">
      <button
        type="button"
        onClick="window.location.href='/workout"
        className="WhiteHomeButton"
      >
        {btn_name}
      </button>
      </a>
    );
  };

export default WhiteHomeButton