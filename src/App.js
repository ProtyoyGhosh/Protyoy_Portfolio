import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Portfolio_Container/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
