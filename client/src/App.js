import './assets/css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './components/Projects'
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contactme">
            <ContactMe />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
