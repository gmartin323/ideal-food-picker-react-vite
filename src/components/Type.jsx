import React from "react";

export default function Type(props) {

  const styles = {
    backgroundColor: props.selected? "#D6DBF5" : "red"
  }

  return (
    <div style={styles}>
      <p>{props.name}</p>
    </div>
  )
}