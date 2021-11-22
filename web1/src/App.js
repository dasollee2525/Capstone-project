import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./site/main";
import Form1 from "./site/form-one";
import Form2 from "./site/form-two";
import ReD from "./site/request";
import User from "./site/user";
import Check from "./site/usercheck";
import Down from "./site/download";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/form1">
          <Form1></Form1>
        </Route>
        <Route path="/form2">
          <Form2></Form2>
        </Route>
        <Route path="/request">
          <ReD></ReD>
        </Route>
        <Route path="/user/:id">
          <User></User>
        </Route>
        <Route path="/check">
          <Check></Check>
        </Route>
        <Route path="/download/:id">
          <Down></Down>
        </Route>
      </Switch>
    </div>
  );
}

export default App;