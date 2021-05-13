import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
import React from 'react'

export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title: 'Modelos',
        path: '/ml',
        icon: <FaIcons.FaRobot/>,
        cName : 'nav-text'
    },
    
    {
        title: 'Contato',
        path: '/contact',
        icon: <FaIcons.FaPhoneSquareAlt/>,
        cName : 'nav-text'
    },
    {
        title: 'Sobre',
        path: '/about',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName : 'nav-text'
    }
]