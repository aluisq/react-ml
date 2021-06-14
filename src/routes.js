import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/login'
import Home from './pages/home'
import About from './pages/about';
import Contact from './pages/contact';
import Models from './pages/models';
import error401 from './pages/401';
import {Context} from './components/Context/AuthContext'
import Kmeans from './pages/kmeans';
import Lr from './pages/lr';
import Dataset from './pages/dataset';

function CustomRoute({isPrivate, ...rest}){

    const {authenticated, loading} = useContext(Context)

    if (loading){
        return <h1>LOADING...</h1>
      }
  
    if(isPrivate && !authenticated){
        return <Redirect to="/login" />
    }
    return <Route {...rest}/>
}
export default function Routes() {

    return (
       <Switch>
           <CustomRoute exact path="/login" component={Login}/>
           <CustomRoute isPrivate exact path="/home" component={Home}/>
           <CustomRoute isPrivate exact path="/dataset" component={Dataset}/>
           <CustomRoute isPrivate exact path="/ml" component={Models}/>
           <CustomRoute isPrivate exact path="/ml/kmeans" component={Kmeans}/>
           <CustomRoute isPrivate exact path="/ml/lr" component={Lr}/>
           <CustomRoute isPrivate exact path="/about" component={About}/>
           <CustomRoute isPrivate exact path="/contact" component={Contact}/>
           <CustomRoute exact path="/401" component={error401}/>
       </Switch>
    )
}
