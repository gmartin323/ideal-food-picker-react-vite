import React from "react"
import LoadingSpinner from "../components/LoadingSpinner"

export default function Dish(props) {

  const [imgLoaded, setImgLoaded] = React.useState(false);
  
  function refreshPage(){ 
    window.location.reload()
  }

  // const imgSrc = `src/images/dish/Bánh-Mì-Chào-Nam.jpg`
  const imgSrc = `images/dish/${props.suggestedDish.img}`
  const restaurantName = `at \n ${props.suggestedDish.restaurant} `

  return (
    <div>
      <div className="dish-card">
        <div className="dish-container">
          {imgLoaded ? null : (
            <div className="dish-img center">
              <LoadingSpinner />
            </div>
          )}
          <img
            className="dish-img"
            style={imgLoaded ? {} : { display: 'none' }}
            src={imgSrc}
            onLoad={() => setImgLoaded(true)}
          />
          <h1 className="dish-name">{props.suggestedDish.name}</h1>
          <p className="dish-price">{props.suggestedDish.price}₫</p>
        </div>
        <div className="restaurant-container">
          <div className="restaurant-map">
            <iframe 
              className="dish-img"
              style={{
                  borderRadius: "8px",
                  borderStyle: "none"
                }}
              src={props.suggestedDish.location}
              width="100%"
              height= "80%"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"> 
            </iframe>
          </div>
          <div className="restaurant-info">
            <p className="restaurant-name new-line">
              {restaurantName}
            </p>
            <p className="restaurant-address">{props.suggestedDish.address}</p>
          </div>            
        </div>
      </div>
      <button className="btn restart-btn" onClick={refreshPage}>Start Again</button>
    </div>
  )
}
