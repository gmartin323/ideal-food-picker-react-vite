import React from "react";
import Option from "./Option"; 

export default function OptionsPage(props) {

  const columnStyle = (
    props.option.length === 4 ? "medium" : "wide"
  )

  const optionsEl = props.option.map(item => {
    return (
            <Option 
              key={item.id}
              name={item.name}
            />
    )
  })

  return (
    
      <div className={`list-wrapper ${columnStyle}`}>
        {optionsEl}
      </div>
    
  )
}