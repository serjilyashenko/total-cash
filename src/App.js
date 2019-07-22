import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute path="/" exact component={() => <img src="https://media.tenor.com/images/82517b1fbf01e0db1c2636319e2c6965/tenor.gif" />} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
