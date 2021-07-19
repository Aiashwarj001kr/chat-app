import React from 'react';
import { Switch } from 'react-router';

import 'rsuite/dist/styles/rsuite-default.css';
import Private from './components/routes/Private';
import Public from './components/routes/Public';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './styles/main.scss';

function App() {
  return (
    <Switch>
      <Public path="/signin">
        <SignIn />
      </Public>
      <Private path="/">
        <Home />
      </Private>
    </Switch>
  );
}

export default App;
