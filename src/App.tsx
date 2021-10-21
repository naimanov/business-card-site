import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Title from './components/Title/Title';

function App() {
  return (
    <Router>
      <div className='main-section'>
        <Title />
        <div className='section'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <AboutMe />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/contacts'>
              <Contacts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
