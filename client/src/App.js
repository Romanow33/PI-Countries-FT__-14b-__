import "./App.css";
import CountryDetail from "./components/countryDetail/countryDetail";
import NavBar from "./components/navBar";
import addActivity from "./components/addActivity/addActivity";
import Pagination from "./components/Pagination/pagination";
import LandingPage from "./components/landingPage/landingPage";
import { Route } from "react-router-dom";
import Busqueda from "./components/Search/search";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/countries" component={NavBar} />
      <Route exact path="/countries" component={Busqueda} />
      <Route exact path="/countries" component={Pagination} />
      <Route exact path="/countries/:id" component={CountryDetail} />
      <Route exact path="/activity" component={addActivity} />
    </div>
  );
}

export default App;
