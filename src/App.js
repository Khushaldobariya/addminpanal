import logo from './logo.svg';
import './App.css';
import MiniDrawer from './Componet/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './Container/Home';
import Medicin from './Container/Medicine';
import Dialog  from './Container/Dialog';

function App() {
  return (
 
  <MiniDrawer>
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={'/Medicin'} component={Medicin}/>
      <Route exact path={'/Dialog'} component={Dialog}/>
    </Switch>
  </MiniDrawer>
  );
}

export default App;
