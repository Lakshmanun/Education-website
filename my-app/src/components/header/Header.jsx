import React, { useState } from 'react'
import Head from './Head'
import { Link } from 'react-router-dom'

export default function Header() {

  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className=" flexSB">
          <ul className={click ? "mobileNav" : "flexSB"} onClick={() => setClick(false)} >
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/courses'}>All Cource</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/team'}>Team</Link></li>
            <li><Link to={'/pricing'}>Pricing</Link></li>
            <li><Link to={'/journal'}>Journal</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>

          </ul>
          
          <div className="start">
            <div className="button">GET CERTIFIED</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}
