import './assets/css/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './components/Projects'
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter basename='/'>
      <NavBar />
      <Switch>
          <Route exact path="/" component={Home} />
        
          <Route  path="/about" component={About} />
         
          <Route  path="/projects" component={Projects} />
     
          <Route  path="/#contactme" component={ContactMe} />
         
        </Switch>
    </BrowserRouter>
  );
}

export default App;
