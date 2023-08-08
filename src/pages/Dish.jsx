import React from "react"
import LoadingSpinner from "../components/LoadingSpinner"

export default function Dish(props) {

  const [loaded, setLoaded] = React.useState(false);

  function refreshPage(){ 
    window.location.reload()
  }

  // const imgSrc = `src/images/dish/Bánh-Mì-Chào-Nam.jpg`
  const imgSrc = `images/dish/${props.suggestedDish.img}`
  const restaurantName = `at \n ${props.suggestedDish.restaurant} `

  /* if (loading) {
    return <LoadingSpinner />
  } */

  return (
    <div>
      <div className="dish-card">
        <div className="dish-container">
          {loaded ? null : (
            <LoadingSpinner />
          )}
          <img
            className="dish-img"
            style={loaded ? {} : { display: 'none' }}
            src={imgSrc}
            onLoad={() => setLoaded(true)}
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
            {/* <iframe src="
            https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4291052763538!2d105.83300197504934!3d21.05551708685943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aa535218fac7%3A0xf67c06ea3609ce98!2sSunKat&#39;s Burgers!5e0!3m2!1sen!2s!4v1691470536460!5m2!1sen!2s"
            https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4291052763538!2d105.83300197504934!3d21.05551708685943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aa535218fac7%3A0xf67c06ea3609ce98!2sSunKat&#39;s Burgers!5e0!3m2!1sen!2s!4v1691470536460!5m2!1sen!2s

            width="100%" height="80%" 
            style={
              {borderRadius: "8px",
              borderStyle: "none"}
            }
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          </div>  
          
          <p className="restaurant-address">{props.suggestedDish.address}</p>
        </div>
      </div>
      <button className="btn restart-btn" onClick={refreshPage}>Start Again</button>
    </div>
  )
}
