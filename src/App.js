import React from 'react';
import './App.scss';
import FraHeader from './components/FraHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
// import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <FraHeader />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* <Route exact path="/about">
            <AboutUsPage />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
