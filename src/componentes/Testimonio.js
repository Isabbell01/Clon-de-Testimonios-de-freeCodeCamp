import React from "react";
import "../hojas-estilo/testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="foto"
      />
      <div className="contenedor-texto-textimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">{props.cargo}</p>
        <p className="texto-testimonio">{props.texto}</p>
      </div>
    </div>
  );
}

export default Testimonio;
