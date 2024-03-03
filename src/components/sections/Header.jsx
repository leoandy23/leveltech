import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/Header.css";
import { useLocation } from "react-router-dom";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div className="header">
        <div className="row m-0 justify-content-between align-items-center">
          <a className="navbar-brand col-12 col-md-6" href="./">
            <img src={images["LeveltechLogo.png"]} alt="Logo leveltech" />
          </a>

          <div className="col-12 col-md-4 p-3">
            <form
              className="d-flex alingn-items-center search-container "
              role="search">
              <input
                className="form-control me-2 search-input rounded-pill"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button type="submit" className="search-button">
                <FontAwesomeIcon
                  className="search-icon"
                  icon={["fas", "fa-magnifying-glass"]}
                  style={{ color: "gray" }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-secondary-custom">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  href="./">
                  INICIO
                </a>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  SERVICIOS
                </span>
                <ul className="dropdown-menu rounded-0 bg-secondary-custom border-0">
                  <li>
                    <a
                      className={
                        location.pathname === "/auditoria-informatica"
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      href="./auditoria-informatica">
                      Auditoría Informática y Riesgo Operativo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="./asesoria-en-seguridad">
                      Asesoría en Seguridad Informática
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="./implantacion-planes">
                      Implantación de Planes de Continuidad (BCP)
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="./soluciones-e-business">
                      Soluciones e-Business
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="./evaluacion-integridad-aplicaciones">
                      Evaluación de la Integridad de Aplicaciones
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="./apoyo-servicios-complementarios-it">
                      Apoyo en Servicios Complementarios para IT
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./sistemas">
                  SISTEMAS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./soluciones-moviles">
                  SOLUCIONES MÓVILES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./clientes">
                  CLIENTES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contacto">
                  CONTÁCTANOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
