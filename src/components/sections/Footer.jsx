import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

const Footer = () => {
  return (
    <footer className="row bg-secondary-custom align-items-center justify-content-between">
      <a className="navbar-brand col-12 col-md-4" href="/">
        <img src={images["LeveltechLogo.png"]} alt="Logo leveltech" />
      </a>
      <div className="col-12 col-md-4">© Todos los derechos reservados</div>
      <div className="col-12 col-md-3 border border-0 border-dark border-start text-start text-md-center">
        <a href="http://www.leveltech.com.ec/" className="m-1">
          <FontAwesomeIcon
            icon={["fas", "envelope"]}
            style={{ color: "black" }}
          />
        </a>
        <a href="http://www.leveltech.com.ec/" className="m-1">
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            style={{ color: "black" }}
          />
        </a>
        <a href="http://www.leveltech.com.ec/" className="m-1">
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            style={{ color: "black" }}
          />
        </a>
        <a href="http://www.leveltech.com.ec/" className="m-1">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            style={{ color: "black" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
