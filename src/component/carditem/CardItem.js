import React from 'react'
import "./CardItem.css"

export default function CardItem(props) {
    return (
      <div className="carditem-container">
        <div style={{
          display:"block"
        }}>
          <img alt="book thumble" src={props.src} height="150px"/>
        </div>
      <div className="carditem-info-container">
          <p style={{
              fontSize:"15px",
              fontFamily:"cursive",
          }}>{props.title}</p>
          <p style={{
            fontSize:"10px",
            fontFamily:"cursive",
          }}>Author/s : {props.auth}</p>
          <p style={{
            fontSize:"12px",
            fontFamily:"cursive",
          }}>Published Date : {props.published === '0000' ? 'UnAvailable' : props.published.substring(0,4)}</p> 
      </div>  
    </div>
    )
}
