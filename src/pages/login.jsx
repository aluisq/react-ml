import React, { useContext } from 'react';
import {useForm} from 'react-hook-form'; 
import {Card } from 'react-bootstrap'
import {Context} from '../components/Context/AuthContext'



export default function Login()  {

  const {handleLogin} = useContext(Context)

  const {register, handleSubmit , formState: { errors }} = useForm();

      return (
        <>
        <div className="login">
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://static.vecteezy.com/ti/vetor-gratis/p1/2084185-cute-astronaut-character-holding-flag-cartoon-vector-icon-illustration-gr%C3%A1tis-vetor.jpg" />
          <Card.Body>
              <form  className="login-form" onSubmit={handleSubmit(handleLogin)}>
              <label>
                <input placeholder="username" type="text" {...register('username', { required: true })} />
                {errors.username?.type === 'required' && "Username is required"}
              </label>
              <label>
                <input placeholder="password" type="password" {...register('password', { required: true, minLength: 5})} />
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
  