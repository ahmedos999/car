import React from 'react'

export default function Nav() {
  return (
    <div className='Navbar'>
        <h2>Driver Mate</h2>
        <ul>
            <li className='active'>Home</li>
            <li>Contact</li>
            <li>About us</li>
            <li>Why Chose us</li>
        </ul>
        <div className="sign">
            <p>Login</p>
        <button>Sign up</button>
        </div>
    </div>
  )
}
