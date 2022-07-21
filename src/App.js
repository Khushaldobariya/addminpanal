import "./App.css";
import MiniDrawer from "./Componet/Layout";
import { Route, Switch } from "react-router-dom";
import Home from "./Container/Home";
import Email from "./Container/Email";
import Doctor from "./Container/Doctor";

import Login from "./Container/Login";
import { Provider } from "react-redux";
import "./App.css";
import { ConfiguerStore } from "./Container/Redux/store";
import Counter from "./Container/Counter/Counter";
import Medicine from "./Container/medicine";
import { PersistGate } from "redux-persist/integration/react";
import PromiseExmple from "./Container/PromiseExmple";

function App() {
  const { store, persistor } = ConfiguerStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MiniDrawer>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/Email"} component={Email} />
            <Route exact path={"/medicine"} component={Medicine} />
            <Route exact path={"/Doctor"} component={Doctor} />
            <Route exact path={"/Login"} component={Login} />
            <Route exact path={"/Counter"} component={Counter} />
            <Route exact path={"/PromiseExmple"} component={PromiseExmple} />

          </Switch>
        </MiniDrawer>
      </PersistGate>
    </Provider>
  );
}

export default App;
