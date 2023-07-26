import React from "react";

export default function Option(props) {

  const styles = {
    backgroundColor: props.selected? "#D6DBF5" : "red"
  }

  return (
    <div className="option" style={styles}>
      <p>{props.name}</p>
    </div>
  )
}