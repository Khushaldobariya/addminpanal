
import './App.css';
import MiniDrawer from './Componet/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './Container/Home';
import medicine from './Container/medicine';
import  Email from './Container/Email';
import  Doctor from './Container/Doctor';
import  Dialog  from './Container/Dialog';

function App() {
  return (
 
  <MiniDrawer>
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/Email"} component={Email} />
      <Route exact path={"/medicine"} component={medicine} />
      <Route exact path={"/Dialog"} component={Dialog} />
      <Route exact path={"/Doctor"} component={Doctor} />
      
    </Switch>
  </MiniDrawer>
  );
}

export default App;
