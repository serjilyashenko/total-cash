import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Main from './components/Main';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <main className="Site-content">
          <Switch>
            <PrivateRoute path="/" exact component={Main} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
