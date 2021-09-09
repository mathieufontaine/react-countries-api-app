import "./Sass/style.scss";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import CountryPage from "./Components/CountryPage/CountryPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="page-content">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/country">Country</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/country" component={CountryPage} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
