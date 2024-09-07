import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";
import { MovieProvider } from "./store/MovieStore";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <GlobalProvider>
      <MovieProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Router>
      </MovieProvider>
    </GlobalProvider>
  );
}

export default App;
