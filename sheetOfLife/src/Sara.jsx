import React from "react";
import { Link } from "react-router-dom";

export default function Sara() {
  return (
    <div className="container mt-3 p-3 bg-light">
      <div className="p-3">
        <Link to={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </Link>
      </div>
      <div className="d-flex bg-warning rounded p-3">
        <img
          className="rounded-circle mx-auto d-block"
          src="/multimedia/SaraProfile.jpg"
          alt="Perfil Sara"
          height={"300"}
          width={"300"}
        />
      </div>
      <h2 className="fs-1 fw-bold text-center">Sara Avila</h2>
      <hr className="bg-dark"/>
      <div>
        <p className="fs-3 text-center">Perfil</p>
        <p>Programadora Junior. Apasionada de la Programación, en último año de estudio, busco empezar mi carrera aportando sólidos conocimientos académicos de programación (Javascript, HTML5, Vue, React).
Mi capacidad de generar ideas y mi facilidad para trabajar en equipo son mis principales herramientas para desenvolverme y crecer como desarrolladora Junior.</p>
      </div>
      <hr className="bg-dark"/>
      <div className="d-flex">
        <div className="w-50">
          <div>
            <h5 className="text-center m-3">Idiomas</h5>
            <div className="d-flex">
              <p className="ms-5 me-3">Español</p>
              <progress value="100" max="100">Español</progress>
            </div>
            <div className="d-flex">
              <p className="ms-5 me-3">Inglés</p>
              <progress value="50" max="100">Inglés</progress>
            </div>
          </div>
          <hr className="bg-dark mx-5"/>
          <div>
            <h5 className="text-center m-3">Habilidades</h5>
            <div className="d-flex">
              <p className="ms-5 me-3">Fronted</p>
              <progress value="30" max="100">Fronted</progress>
            </div>
            <div className="d-flex">
              <p className="ms-5 me-3">Backend</p>
              <progress value="90" max="100">Backend</progress>
            </div>
            <div className="d-flex">
              <p className="ms-5 me-3">Creatividad</p>
              <progress value="70" max="100">Creatividad</progress>
            </div>
            <div className="d-flex">
              <p className="ms-5 me-3">Lógica</p>
              <progress value="85" max="100">Lógica</progress>
            </div>
          </div>
        </div>
        <div class="vr"></div>
        <div className="w-50">
          <div>
            <h5 className="text-center m-3">Educación</h5>
          </div>
          <hr className="bg-dark mx-5"/>
          <div>
            <h5 className="text-center m-3">Experiencia</h5>
          </div>
        </div>
      </div>
    </div>
  );
}