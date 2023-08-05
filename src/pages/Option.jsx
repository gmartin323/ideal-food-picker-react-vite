import React from "react";

export default function Option(props) {
  // console.log("option props", props)
  const styles = {
    backgroundColor: props.selected ? "#D6DBF5" : "#fdd1bf"
  }

  const imgSrc = `src/images/type/${props.img}`
  
  return (
    <div className="option" style={styles} onClick={() => props.handleClick(event, props.id)}>
      {/* {props.img ? <img src={imgSrc} /> : <p>{props.name}</p>}  */}
      <p>{props.name}</p>
    </div>
  )
}