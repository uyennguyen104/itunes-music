import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout/MainLayout';
import Home from 'views/Home/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainLayout>
            <Home/>
          </MainLayout>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
