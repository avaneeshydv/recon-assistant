import React from 'react';
import Card from "./Card";
import "./Start.css"
import Button from "./Button";





function Start() {
  return (
    <div className="start">
      <h1 className=''>Generative Recon</h1>
      <div className="second_start">
        <h3>Source</h3>
        <h3>Destination</h3>
      </div>
      <div className='third_start'>
        <Card className="card_one" />
        <Card className="card_two" />
      </div>
      <div className='fourth_start'>
        <Button />
        <Button />

      </div>



    </div>

  )
}

export default Start