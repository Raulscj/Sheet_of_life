import React from "react";
import { Link } from "react-router-dom";
export default function Inicio() {
  return (
    <div className="container mt-3 p-3 bg-light">
      <div className="container text-center ">
        <h4 className="fs-1 fw-bold text-center">Conócenos</h4>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={"/Raul"}>
          <img
            className="rounded float-start m-2"
            src="/multimedia/RaulBanner.jpg"
            alt="Raul"
            height={"500"}
            width={"500"}
          />
        </Link>
        <Link to={"/Sara"}>
          <img
            className="rounded float-end mt-2"
            src="/multimedia/SaraBanner.jpg"
            alt="Sara"
            height={"500"}
            width={"500"}
          />
        </Link>
      </div>
    </div>
    // <>
    //   <div className="container text-center ">
    //     <h4>Conócenos</h4>
    //   </div>
    //   <div className="d-flex">
    //     <Link to={"/Raul"}>
    //       <img
    //         className="rounded float-start m-2"
    //         src="/multimedia/RaulBanner.jpg"
    //         alt="Raul"
    //       />
    //     </Link>
    //     <Link to={"/Sara"}>
    //       <img
    //         className="rounded float-end mt-2"
    //         src="/multimedia/SaraBanner.jpg"
    //         alt="Sara"
    //       />
    //     </Link>
    //   </div>
    // </>
  );
}
