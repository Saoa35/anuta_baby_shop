import React from "react";
import { useContext } from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {

  const { setCartOpened } = useContext(AppContext);

  return(
    <div className="cartEmpty">
      <img width={240} style={{marginBottom:'20px'}} src={image} alt="Empty Cart" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Go Back
      </button>
    </div>
  )
}

export default Info;