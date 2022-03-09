import { Link, NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'

import React from 'react'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <Link to="/"><div className={classes.logo}>Great Quotes</div></Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                <NavLink to='/quotes' className={classes.active}>
                    All Quotes
                </NavLink>
                </li>
                <li>
                <NavLink to='/new-quote' className={classes.active}>
                    Add A New Quote
                </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation