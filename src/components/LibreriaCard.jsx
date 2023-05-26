import React, {useState} from 'react';
import "../styles/libros.css";

export default function LibreriaCard({name,image,isbn}) {

  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(true);
  };
  return (
    <div className="card">
      
      <img src={image} alt="carta libro" className="imagen" />

      <h5 className="name">{name}</h5>

      <p className="isbn">{isbn}</p>

      <button onClick={handleClick}></button>
    {showCard && (
        <div>
          <h2>{name}</h2>
          <p>{isbn}</p>
        </div>
      )}

    </div>
  )
}
