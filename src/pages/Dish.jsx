import React from "react"

export default function Dish(props) {
  
  
  function refreshPage(){ 
    window.location.reload()
  }
  
  const imgSrc = `src/images/dish/${props.suggestedDish.img}`
  const restaurantName = `at \n ${props.suggestedDish.restaurant} `

  return (
    <div>
      <div className="dish-card">
        <div className="dish-container">
          <img
            className="dish-img"
            src={imgSrc}
            // src={`images/dish/${props.suggestedDish.img}`}
          />
          <h1 className="dish-name">{props.suggestedDish.name}</h1>
          <p className="dish-price">{props.suggestedDish.price}₫</p>
        </div>
        <div className="restaurant-container">
          <p className="restaurant-name new-line">
            {restaurantName}
          </p>
          <div className="restaurant-map">
            <iframe 
              src={props.suggestedDish.location}
              width="100%"
              height= "80%"
              style={
                {borderRadius: "8px",
                borderStyle: "none"}
              }
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"> 
            </iframe>
          </div>  
          
          <p className="restaurant-address">{props.suggestedDish.address}</p>
        </div>
      </div>
      <button className="restart-btn" onClick={refreshPage}>Start Again</button>
    </div>
  )
}
