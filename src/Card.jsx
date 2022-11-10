//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import { useState } from "react"
import "./card_style.sass"
export function Card (props) {
  return (
    <div className="container-card" style={{backgroundColor: `${props.data.hexadecimal}`}}>
      <div className="color-card">
        <h2
           className='name-color'
           >
           {props.data.name}
        </h2>
        <span className="hexadecimal-color">{props.data.hexadecimal}</span>
      </div>
    </div>
  )
}
