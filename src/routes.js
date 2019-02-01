import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PageOne from './components/PageOne/PageOne';
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';
import Nav from './components/Nav/Nav'

export default (
 <div>
  <Nav />
  <Switch>
  <Route path="/pagethree" component={PageThree}/>
  <Route path="/pagetwo/:id" component={PageTwo}/>
  <Route path="/" component={PageOne}/>
 </Switch>
 </div>
 
)