import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Proposito from "./components/pages/Proposito/Proposito";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/proposito" element={<Proposito />} />
      </Routes>
    </Router>
  );
}

export default App;
