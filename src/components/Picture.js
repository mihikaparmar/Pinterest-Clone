import React from "react";
import './App.css';

export default function PictureCard(props) {
  let { id, imageUrl } = props;
  return (

    
      
  <div className="styling">
    
          <div
        className="card col-2"
        style={{
          height: "450px",
          width: "250px",
          border: "2px solid whitte",
          borderRadius: "20px",
        }}
      >
        <img
          className="card-img-top"
          key={id}
          src={imageUrl}
          alt=".."
          style={{
            height: "700px",
            width: "250px",
            border: "2px solid whitte",
            borderRadius: "20px",
          }}
        />
        </div>
        </div>
        
    
    
      
    
  );
}