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
          <div className="h-50">
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
          <div className="pb-5">
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
        <div className="vr"></div>
        <div className="w-50">
          <div>
            <h5 className="text-center m-3">Educación</h5>
            <div>
              <p className="ms-5 fw-bold">U.E.C. Casa Hogar "Monseñor Carrillo" | 2009 - 2020</p>
              <p className="ms-5">Escuela primaria y secundaria</p>
            </div>
            <div>
              <p className="ms-5 fw-bold">Universidad Valle del Momboy | 2020 - </p>
              <p className="ms-5">Carrera de ingeniería de computación</p>
            </div>
          </div>
          <hr className="bg-dark mx-5"/>
          <div>
            <h5 className="text-center m-3">Experiencia</h5>
            <div>
              <p className="ms-5 fw-bold">Compañía Anónima de Ingenieros al Servicio Tecnosocial (CAISerT) | 2021 - </p>
              <p className="ms-5">Ingenieros especializados en software</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-warning rounded p-3 mt-5 d-flex justify-content-center">
        <div className="px-3 d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
          <p className="px-2">avilab.sara@gmail.com</p>
        </div>
        <div className="vr"></div>
        <div className="px-3 d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <p className="px-2">04264777391</p>
        </div>
        <div className="vr"></div>
        <div className="px-3 d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
          <p className="px-2">Venezuela, Trujillo, Trujillo. Urb. El recreo</p>
        </div>
      </div>
    </div>
  );
}