import React from 'react'
import Style from './example.module.css'
import gameData from '../../objects/matchinfo'

function Example() {
  
  console.log(gameData);
  return (
    <div className={Style.prueba}>example</div>
  )
}

export default Example