import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Actions } from './store/actions';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Skills from './components/Pages/Skills/Skills';
import Projects from './components/Pages/Projects/Projects';
import Contacts from './components/Pages/Contacts/Contacts';
import Title from './components/Title/Title';
import { data } from './data/mockData';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Actions.GET_PERSON_DATA, payload: data });
  }, []);

  return (
    <Router>
      <div className='wrapper'>
        <Title />
        <div className='container'>
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
