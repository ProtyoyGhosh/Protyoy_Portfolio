import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import About from './Portfolio_Container/About_me/About';
import Blogs from './Portfolio_Container/Blogs/Blogs';
import Contact from './Portfolio_Container/Contact_me/Contact';
import Error from './Portfolio_Container/Error/Error';
import Home from './Portfolio_Container/Home/Home';
import Navbar from './Portfolio_Container/Navbar/Navbar';
import Projects from './Portfolio_Container/Projects/Projects';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
