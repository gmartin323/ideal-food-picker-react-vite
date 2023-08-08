import React from "react";

export default function Option(props) {
  const style = 
    props.selection === props.id ? "selected option" : "option"
  
  const imgSrc = `src/images/type/${props.img}`
  
  return (
    <div className={style} onClick={() => props.handleClick(event, props.id)}>
      {/* {props.img ? <img src={imgSrc} /> : <p>{props.name}</p>}  */}
      <h2>{props.name}</h2>
    </div>
  )
}