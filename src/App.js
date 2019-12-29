import React from 'react';
import './App.scss';

import { Switch, BrowserRouter, Link, Route } from 'react-router-dom'
import Header from './core/components/header/Header'
import Menu from './core/components/menu/Menu'
import Home from './pages/home/Home';
function App() {
  return (
    <div className="appContainer">
      <div className="menuWrapper">
        <Menu />
      </div>
      <div className="innerContainer">
        <div className="headerWrapper">
          <Header />
        </div>

      <div className="rOutlet" >
        <BrowserRouter>

          <Switch>
            <Route  path="/" component={Home} >

            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      </div >
    </div>

  );
}

export default App;
