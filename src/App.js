import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div>메인페이지</div>
        </Route>
        <Route path="/form1">1</Route>
        <Route path="/form2">2</Route>
        <Route path="/request">3</Route>
      </Switch>
    </div>
  );
}

export default App;
