import React from "react";
import { Link } from "react-router-dom";

export const ProductList = ({ products, handleDelete }) => {
  return (
    <div className="row">
      {products.length === 0 && (
        <h4 className="w-100 text-center">No hay productos agregados</h4>
      )}
      {products.map((product, id) => (
        <div className="card col-sm-6 col-md-4" key={id}>
          <img className="card-img-top" src={product.imagenUrl} alt="img" />
          <div className="card-body">
            <h3 className="card-title">Nombre: {product.title}</h3>
            <p className="card-text">Precio: ${product.precio}</p>
            <p className="card-text">Tipo: {product.tipo}</p>
            <p>Descripción: {product.description}</p>
            <div className="btn-group " role="group">
              <Link className="btn btn-success" to={`/edit/${product.id}`}>
                Editar
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(product.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
