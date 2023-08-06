import React from "react";

export default function ConfirmBtn(props) {


  return (
    <button
      className={`confirm-btn ${props.disabled ? "disabled" : ""}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Suggest a place!
    </button>
  )
}