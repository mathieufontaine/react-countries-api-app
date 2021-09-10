import "./Sass/style.scss";
import Header from "./Components/Header/Header";
import Countries from "./Components/HomePage/CountriesList";
import Country from "./Components/CountryPage/CountryPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`App ${!darkMode ? "lightMode" : ""}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
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
