import React from "react";

export default function Raul() {
  return (
    <div className="container mt-3">
      <h2>Raúl González</h2>
      <hr />
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th colspan="3" justify="center">
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
      <table className="table table-hover">
        <thead>
          <tr className="table-primary">
            <th colspan="4">ESTUDIOS REALIZADOS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-info">
            <th colspan="1">Primaria</th>
            <td colspan="3">
              U.E Hermanas María Sorrosal 1er Grado a 6to Grado
            </td>
          </tr>
          <tr className="table-primary">
            <th colspan="1">Secundaria</th>
            <td colspan="3">
              Ciclo Diversificado “C.P. Monseñor Mejia”. Valera Edo. Trujillo
              Venezuela Título obtenido: Bachiller en Ciencias
            </td>
          </tr>
          <tr className="table-info">
            <th colspan="1">Universitario</th>
            <td colspan="3">
              Universidad Politécnica Territorial del Estado Trujillo "Mario
              Briceño Iragorry" Titulo obtenido:TSU en Informática
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
