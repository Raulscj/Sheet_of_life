import React from "react";
import { Link } from "react-router-dom";
export default function Inicio() {
  return (
    <>
      <div className="container text-center ">
        <h4>Conócenos</h4>
      </div>
      <div style={{ display: "flex" }}>
        <Link to={"/Raul"}>
          <img
            className="rounded float-start m-2"
            src="/multimedia/Banner.jpg"
            alt="Raul"
          />
        </Link>
        <Link to={"/Sara"}>
          <img
            className="rounded float-start mt-2"
            src="/multimedia/Banner.jpg"
            alt="Sara"
          />
        </Link>
      </div>
    </>
  );
}
