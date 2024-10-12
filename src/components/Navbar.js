import { Link, NavLink, useNavigate } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa' 
import { useRef, useState } from "react"
import useAuth from "../hooks/useAuth"

const Navbar = () => {
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});
    navigate('/');
}
  return (
    auth?.user ? 
    <nav>
    <Link to="/home" className="title">
      GeoArticle
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/article">Article</NavLink>
      </li>
      <li>
      <button className="logoutBtn" onClick={logout}>Logout</button>

      </li>
    
    </ul>
  </nav>
  :
  <nav>
    <Link to="/" className="title">
      GeoArticle
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/article">Article</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  </nav>
  )
    
}

export default Navbar