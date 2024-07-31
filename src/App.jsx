import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Proposito from "./components/pages/Proposito/Proposito";
import Forum from "./components/pages/Forum/Forum";
import Contacto from "./components/pages/Contacto/Contacto";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposito" element={<Proposito />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
