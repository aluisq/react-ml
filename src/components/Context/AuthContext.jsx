import React, {createContext, useEffect, useState} from 'react'
import {api} from '../../service/apiMl'

import history from '../../history'
const Context = createContext()

const querystring = require('querystring');

const headers = {
  "Content-Type": "application/x-www-form-urlencoded"
}

function AuthProvider({children}) {

    const [authenticated, setAuthenticated] = useState(false)

    const [loading,setLoading] = useState(true);

    const [token,setToken] = useState()

    useEffect(()=>{

      const token = localStorage.getItem('token')

      if (token){
        api.defaults.headers.Authorization = `Bearer ${token}`

      }
      setLoading(false)
      setToken(token)
    }, [])

    // Login
    async function handleLogin(data){

    await api.post('/token', querystring.stringify({username: data.username, password: data.password}),headers)

    .then(res=>{

      localStorage.setItem('token',res.data.access_token)
      localStorage.setItem('username', data.username)
      api.defaults.headers.Authorization = `Bearer ${res.data.access_token}`
      setAuthenticated(true)
      history.push('/home')
    })
    .catch(e=>{
      let status = e.response.status
      if(status == 401){
        history.push('/401')
      }
    })
    }
    // Logout
    async function handleLogout(){
      localStorage.removeItem('token');
      api.defaults.headers.Authorization = undefined
      setAuthenticated(false)
      history.push('/login')
    }

    return (
        <Context.Provider value={{authenticated, handleLogin, handleLogout, loading, token}}>
          {children}  
        </Context.Provider>
    )
}


export {Context, AuthProvider};