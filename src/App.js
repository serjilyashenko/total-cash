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
        <main className="Site-content">
          <Switch>
            <PrivateRoute path="/" exact component={Main} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </main>
        <footer>
          <Navigation />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
