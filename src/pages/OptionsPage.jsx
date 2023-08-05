import React from "react";
import Option from "./Option"; 

export default function OptionsPage(props) {

  // console.log("option", props)

  const columnStyle = (
    props.option.length === 4 ? "medium" : "wide"
  )

  const optionsEl = props.option.map(item => {
    return (
            <Option 
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              handleClick={props.handleClick}
              selected={props.selected}
            />
    )
  })

  return (
    
      <div className={`list-wrapper ${columnStyle}`}>
        {optionsEl}
      </div>
    
  )
}