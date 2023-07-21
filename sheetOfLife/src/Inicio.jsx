import React from "react";
import { Link } from "react-router-dom";
export default function Inicio() {
  return (
    <>
      <div className="container text-center ">
        <h4>Conócenos</h4>
      </div>
      <div className="d-flex">
        <Link to={"/Raul"}>
          <img
            className="rounded float-start m-2"
            src="/multimedia/RaulBanner.jpg"
            alt="Raul"
          />
        </Link>
        <Link to={"/Sara"}>
          <img
            className="rounded float-end mt-2"
            src="/multimedia/SaraBanner.jpg"
            alt="Sara"
          />
        </Link>
      </div>
    </>
  );
}
