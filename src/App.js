import './App.scss';
import { Route, Switch } from 'react-router-dom'

import Nav from "./components/nav/nav.js"
import Home from "./pages/home/home.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <section>
        <Switch>
          <Route 
            exact path="/"
            component={Home}
          />
        </Switch>
      </section>
    </div>
  );
}

export default App;
