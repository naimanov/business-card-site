import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Actions } from './store/actions';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Title from './components/Title/Title';
import { data } from './data/mockData';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Actions.GET_PERSON_DATA, payload: data });
  }, []);

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
            <Route path='/skills'>
              <Skills />
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
