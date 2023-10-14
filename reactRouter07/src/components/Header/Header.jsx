import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
      <header>
        <nav>
          <div>
            <Link to="/" className="flex items-center">
            <img 
              src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png'
              className='mr-3 h-12'
              alt='Logo'
            />
            </Link>
          </div>
          <div>
            <Link 
            to ="#"
            className=''
            >
            Log in
            </Link>
            <Link>
            Get Started
            </Link>
          </div>
          <div>
            
          </div>
        </nav>
      </header>
  )
}

export default Header