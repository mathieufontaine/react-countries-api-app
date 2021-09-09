import "./Sass/style.scss";
import Header from "./Components/Header/Header";
import Countries from "./Components/HomePage/Countries";
import Country from "./Components/CountryPage/Country";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="page-content">
        <Router>
          <Switch>
            <Route path="/" exact component={Countries} />
            <Route path="/:name" component={Country} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
