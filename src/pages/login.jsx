import React from 'react';
import { api } from '../service/apiMl'
import {useForm} from 'react-hook-form'; 
import {Card } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom';
import Home from '../pages/home'




export default function Login(props)  {

      const {register, handleSubmit , formState: { errors }} = useForm();

      const history = useHistory();
     
      const onSubmit = async (data) => {
        console.log(data);
        
        await api.get('/teste')
        .then((res)=>{
          console.log(res.data)
          console.log(props.path);

        })
        .catch((e)=>{console.log(e);})
      }

      return (
        <>
        <div className="login">
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://static.vecteezy.com/ti/vetor-gratis/p1/2084185-cute-astronaut-character-holding-flag-cartoon-vector-icon-illustration-gr%C3%A1tis-vetor.jpg" />
          <Card.Body>
              <form  className="login-form" onSubmit={handleSubmit(HomeButton)}>
              <label>
                <input placeholder="username" type="text" {...register('username', { required: true })} />
                {errors.username?.type === 'required' && "Username is required"}
              </label>
              
              <label>
                <input placeholder="password" type="password" {...register('password', { required: true, minLength: 8})} />
                {errors.password?.type === 'required' && "Password is required"}
                {errors.password?.type === 'minLength' && "Password is very short"}
              </label>
              
              <div>
                <button className="btn-login">Login</button>
              </div>
            </form>
          </Card.Body>
        </Card>
        </div>
      </>
      );
  }
  