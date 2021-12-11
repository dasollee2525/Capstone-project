import "./App.css";
import { Route, Switch } from "react-router-dom";
import Middle from "./site/main";
import Form1 from "./site/twothree";
import Form2 from "./site/as";
import User from "./site/user";
import Down from "./site/download";
import Useras from "./site/useras";
import Generateone from "./site/one";
import Bain from "./components/main1";
import Cain from "./site/main copy";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Middle></Middle>
        </Route>
        <Route path="/multi">
          <Form1></Form1>
        </Route>
        <Route path="/as">
          <Form2></Form2>
        </Route>
        <Route path="/user/:id">
          <User></User>
        </Route>
        <Route path="/download/:id">
          <Down></Down>
        </Route>
        <Route path="/useras/:id">
          <Useras></Useras>
        </Route>
        <Route path="/one">
          <Generateone></Generateone>
        </Route>
        <Route path="/mai1">
          <Bain></Bain>
        </Route>
        <Route path="/Cain">
          <Cain></Cain>
        </Route>
      </Switch>
    </div>
  );
}

export default App;