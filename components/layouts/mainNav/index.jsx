import React from 'react'

function Navbar() {
  return (
    <nav>
        <div className="logo-container">
            <h3>logo</h3>
        </div>

        <div className="left-content-container">
                <h4>Our story</h4>
            <div className="btn-container">
                <button className='btn-one'>Log in</button>
                <button>Sign up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar