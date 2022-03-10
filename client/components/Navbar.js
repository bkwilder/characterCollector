import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div className='top-header'>
    <h1 className='header-text'>Character Collector</h1>
    </div>
    <nav>
      {isLoggedIn ? (
        <div className='navbar'>
          {/* The navbar will show these links after you log in */}
          <Link className='navbar-text' to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className='navbar'>
          {/* The navbar will show these links before you log in */}
          <Link className='navbar-text' to="/login" >Login</Link>
          <Link className='navbar-text' to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
