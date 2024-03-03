import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes, // Cambia Redirect por Navigate
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import AuditoriaInformatica from "./pages/services/AuditoriaInformatica";

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/auditoria-informatica"
            element={<AuditoriaInformatica />}
          />
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
