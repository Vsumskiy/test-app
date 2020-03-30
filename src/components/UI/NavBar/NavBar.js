import React from 'react'
import classes from './NavBar.module.sass'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
  
  const cls = [
    classes.NavBar,props.blackTheme?classes.dark:null ]
  // options links
  const links = [{to:'/', label: 'Головна', exact: true},
    {to:'/0936139517results2020', label: 'Результати', exact: false},
    {to:'/TestCreator', label: 'Створити тест', exact: false},
    {to:'/removeTest', label: 'Видалити тест', exact: false},
  ]

 const renderLinks = () => {
      return links.map((link, index)=> {
        return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={props.openDrawer}
          > 
            
          {link.label}  
          </NavLink>
        </li>)
      })
    }

  return  <nav className={cls.join(' ')}>
  <ul>
    {renderLinks()}
  </ul>
  </nav>

}

export default NavBar;


