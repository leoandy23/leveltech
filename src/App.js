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
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route exact path="./" element={<HomePage />} />
          <Route
            path="./auditoria-informatica"
            element={<AuditoriaInformatica />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
