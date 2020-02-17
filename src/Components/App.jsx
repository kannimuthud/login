import React, { Component } from 'react'
import Home from './Home'
import Welcome from './Welcome'
import { BrowserRouter, Route } from 'react-router-dom'
class About extends Component{
    render(){
        return(
        <BrowserRouter>
        <div>
          <Route  path="/" component={Home} exact />
          <Route  path="/welcome" component={Welcome}/>
       </div>
      </BrowserRouter>
        );
    }
}
export default About