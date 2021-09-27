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
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="page-content">
          <Switch>
            <Route path="/" exact component={Countries} />
            <Route path="/:code" exact component={Country} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
