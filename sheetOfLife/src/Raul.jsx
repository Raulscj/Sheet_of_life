import React from "react";
import { Link } from "react-router-dom";

export default function Raul() {
  return (
    <div className="container mt-3">
      <div className="p-3">
        <Link to={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </Link>
      </div>
      <h2>Raúl González</h2>
      <hr />
      {/* Datos */}
      <table className="table table-dark table-hover text-center">
        <thead>
          <tr>
            <th scope="col">
              <img
                className="rounded"
                src="/multimedia/RaulProfile.jpg"
                alt="Raul"
                height={"75"}
                width={"75"}
              />
            </th>
            <th colSpan="3" style={{ lineHeight: "75px" }}>
              DATOS PERSONALES
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Cedula de Identidad</th>
            <td>26.962.904</td>
            <th>Teléfono</th>
            <td>0416-1187577</td>
          </tr>
          <tr>
            <th>Apellidos</th>
            <td>González González</td>
            <th>Nombres</th>
            <td>Raúl Alfonso del Sagrado Corazón de Jesús</td>
          </tr>
          <tr>
            <th>Sexo</th>
            <td>Masculino</td>
            <th>Estado civil</th>
            <td>Soltero</td>
          </tr>
          <tr>
            <th>País de Nacimiento</th>
            <td>Venezuela</td>
            <th>Estado de nacimiento</th>
            <td>Mérida</td>
          </tr>
          <tr>
            <th>Correo</th>
            <td>radscjggdiosteama@gmail.com</td>
            <th>Fecha de nacimiento</th>
            <td>25/04/1999</td>
          </tr>
        </tbody>
      </table>
      <hr />
      {/* Estudios */}
      <table className="table table-hover">
        <thead>
          <tr className="table-primary">
            <th colSpan="4">ESTUDIOS REALIZADOS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-info">
            <th colSpan="1">Primaria</th>
            <td colSpan="3">
              U.E Hermanas María Sorrosal 1er Grado a 6to Grado
            </td>
          </tr>
          <tr className="table-primary">
            <th colSpan="1">Secundaria</th>
            <td colSpan="3">
              Ciclo Diversificado “C.P. Monseñor Mejia”. Valera Edo. Trujillo
              Venezuela Título obtenido: Bachiller en Ciencias
            </td>
          </tr>
          <tr className="table-info">
            <th colSpan="1">Universitario</th>
            <td colSpan="3">
              Universidad Politécnica Territorial del Estado Trujillo "Mario
              Briceño Iragorry" Titulo obtenido:TSU en Informática
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      {/* Cursos-talleres */}
      <table className="table table-dark table-striped-columns table-hover">
        <thead>
          <tr>
            <th colSpan="4">CURSOS Y TALLERES REALIZADOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Nombre del Curso</th>
            <th>Institución</th>
            <th>Horas</th>
            <th>Fecha</th>
          </tr>
          <tr>
            <td>Auxilios Médicos Pre-Hospitalarios</td>
            <td>“Intituto de Capacitacion Profesional” (Incapro)</td>
            <th>30 Horas Académicas</th>
            <td>11/03/2016 al 20/03/2016</td>
          </tr>
          <tr>
            <td>Bernal´s English Course </td>
            <td>American English Collegue</td>
            <th>330 Horas Académicas </th>
            <td>09/11/2011 al 09/11/2012</td>
          </tr>
          <tr>
            <td>Olimpíada Matemática 2014</td>
            <td>Fundación Empresas Polar; Colegio “Monseñor Mejía”</td>
            <th>2Horas</th>
            <td>2014</td>
          </tr>
          <tr>
            <td>Escuela de Lideres Misioneros nivel I (ELMI)</td>
            <td>Parroquia Espiritu Santo Plata III</td>
            <th>108 Horas.</th>
            <td>18/12/2016 al 22/12/2016</td>
          </tr>
          <tr>
            <td>Banquetes (elaboración de pan salado y pan dulce)</td>
            <td>INCES</td>
            <th>30 Horas.</th>
            <td>26/02/2018 al 07/03/2018 </td>
          </tr>
          <tr>
            <td>Electrónica Básica.</td>
            <td>
              Centro de Capacitación, Formación y Adiestramiento Técnico
              Profesional Los Andes; C.C.F.A.T.P Los Andes.
            </td>
            <th>48 Horas académicas.</th>
            <td>01/06/2018 al 15/06/2018</td>
          </tr>
          <tr>
            <td>Auxiliar de farmacia</td>
            <td>Colegio de farmacéuticos del Edo. Mérida.</td>
            <th>60 Horas.</th>
            <td>20/07/2020 al 28/07/2020</td>
          </tr>
          <tr>
            <td>6to Congreso Nacional Juvenil Misionero. -6to CONAJUMI-</td>
            <td>
              Obras Misionales Pontificias de Venezuela, Servicio de animación y
              cooperación misionera juvenil JOVENMISION.
            </td>
            <th>108 Horas.</th>
            <td>26/08/2020 al 30/08/2020</td>
          </tr>
          <tr>
            <td>Asistente Administrativo de Empresas</td>
            <td>INCES</td>
            <th>
              3.736 Horas; 1536 Horas de formación teórica y 2200 de formación
              práctica –pasantías en la Unidad de Diálisis Andina Valera-
            </th>
            <td>15/06/2018 al 20/10/2020</td>
          </tr>
        </tbody>
      </table>
      <hr />
      {/* Conocimientos*/}
      <table className="table table-hover">
        <thead>
          <tr className="table-primary">
            <th colSpan="4">CONOCIMIENTOS, HABILIDADES Y DESTREZAS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-info">
            <td colSpan="4">
              Amplios Conocimientos en Programas de Computación, Manejo Óptimo
              de Internet, Manejo Óptimo de Office. Mantenimiento y soporte
              técnico de ordenadores. Manejo de Personal, Facilidad de
              Aprendizaje y de Establecer Buenas Relaciones con Grupos de
              Trabajo. Dispuesto a Trabajar en Ambientes Bajo Presión. Capacidad
              de trabajar en Grupo. Animar con Valores a Niños, adolescentes,
              jóvenes y adultos.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
