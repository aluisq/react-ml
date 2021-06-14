
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import React, { useState, useContext, useEffect } from 'react'
import {Context} from '../Context/AuthContext'
import {SidebarData} from '../Sidebar/sidebar'
import {IconContext} from 'react-icons'
import './navbar.css'


export default function Navbar() {

    const {handleLogout} = useContext(Context)

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = ()=>setSidebar(!sidebar)

    const nameIntoApp = localStorage.getItem('username')[0].toUpperCase() + localStorage.getItem('username').substring(1)

    return (
        <>
         <IconContext.Provider value={{color: 'aquamarine'}}> 
                <div className='navbar'>
                    <Link to='#' className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <span>
                       {nameIntoApp} | <FaIcons.FaPowerOff onClick={handleLogout} size={28}/>
                    </span>
                </div>
                <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className='navbar-toggle' onClick={showSidebar}>
                        {/* <Link to={'/home'} className="menu-bars"> */}
                            <AiIcons.AiOutlineClose size="32px" />
                        {/* </Link> */}
                    </li>
                    {SidebarData.map((item, index)=>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                </nav>
                </IconContext.Provider>
        </>                
    )
}