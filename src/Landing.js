import React from 'react'
import img from './/assets/car6.png'


export default function Landing() {
  return (
    <div className='landing'>
        <div>
            <h2><span>EASY</span> AND FAST WAY TO RENT YOUR CAR</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio itaque dignissimos autem quas quibusdam, eaque sed error dolores beatae quidem est aliquam, illum ad dolor reiciendis ut earum architecto commodi! Maiores dolores perferendis laborum officiis possimus architecto unde qui nemo.</p>
        </div>
        <img src={img} alt="" />
        <div className='buttons'>
            <button> Get started</button>
            <button>Learn more</button>
        </div>
        <div className='locations'>
          <div>
          
            <h2>Pick up location</h2>
            <button>Current location</button>
          
          </div>

          <div>

          <h2>Drop off location</h2>
          <button>Drop off location</button>

          </div>
        </div>
    </div>
  )
}
