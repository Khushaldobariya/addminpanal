import logo from './logo.svg';
import './App.css';
import MiniDrawer from './Componet/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './Container/Home';

function App() {
  return (
 
  <MiniDrawer>
    <Switch>
      <Route exact path={"/"} component={Home} />
    </Switch>
  </MiniDrawer>
  );
}

export default App;
