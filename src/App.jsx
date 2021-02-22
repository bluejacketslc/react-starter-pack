import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { Home, Login } from "./pages";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div id="app">
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
