
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/home';
import Models from '../../pages/models';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import Login from '../../pages/login'
import Page404 from '../../pages/404';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import React, { useState } from 'react'
import {SidebarData} from '../Sidebar/sidebar'
import {IconContext} from 'react-icons'
import './navbar.css'


export default function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = ()=>setSidebar(!sidebar)

    const showAlert = ()=>{
        alert("Sair?")
    }
    return (
        <>
         <Router>
         <IconContext.Provider value={{color: 'aquamarine'}}> 
                <div className='navbar'>
                    <Link to='#' className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    
                    <span>
                       arthur.dantas | <FaIcons.FaPowerOff onClick={showAlert} size={28}/>
                    </span>
                </div>
                <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to={'/'} className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
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
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/ml' component={Models} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                    <Route path='/login' component ={Login} />
                    <Route path='*' component={Page404}/>
                    {/* <Redirect to="/404"/> */}
                </Switch>
                </IconContext.Provider>
            </Router>
        </>                
    )
}