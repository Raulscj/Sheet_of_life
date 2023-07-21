import React from "react";
import { Link } from "react-router-dom";
export default function Inicio() {
  return (
    <>
      <div>Inicio</div>
      <Link to={"/Raul"}>
        <button type="button" class="btn btn-outline-primary">
          Raul
        </button>
      </Link>
      <img src="./multimedia/Banner.jpg" alt="" />
    </>
  );
}
