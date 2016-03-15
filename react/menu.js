
import React from 'react'
//import ReactDOM from 'react-dom'

// Notes for build
// 
// Setup new injector that uses .tmp/bundlejs
// call [webpack injector:webpack] on react/** changes


const NavbarItem = ({id, name, children}) => {
  return (
    <li id={id} className="dropdown">
      <a href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="true">
        {name}
        <span className="arrow-down"></span>
      </a>
      {children}
    </li> 
  )
}

const MenuTest = ({domain}) => {
  return (
    <NavbarItem id="nav-news-events" name="News &amp; Events">
      <ul className="dropdown-menu">
          <MenuItem href={domain + '/news'}>Change News</MenuItem>
          <MenuItem href={domain + '/events'}>Events</MenuItem>
      </ul>
    </NavbarItem>
  )
}

const MenuItem = ({href, children}) => {
  return (<li>
    <a data-toggle="collapse" data-target=".navbar-collapse" href={href}>{children}</a>
   </li>);
}

/* Export Top Level Components */
window.AcReact = window.AcReact || {}
window.AcReact.MenuTest =  MenuTest

