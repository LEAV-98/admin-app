import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import moment from "moment";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { SideBar } from "./SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    paddingTop: "5rem",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));
export const OrderScreen = () => {
  let { id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .onSnapshot((snapshot) => {
        const newOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrder(newOrders.find((order) => order.id === id));
      });
    return () => {
      setOrder({});
    };
  }, [id]);
  const sendNotificacion = () => {
    sendEmail(
      order.name,
      order.email,
      order.telefono,
      order.direccion,
      order.referencia
    );
  };
  const sendEmail = (nombre, email, telefono, direccion, referencia) => {
    emailjs
      .send(
        "service_nptoez9",
        "template_02",
        { nombre, email, telefono, direccion, referencia },
        "user_nbPwIqFvVKAT6kA4MWQTq"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: "Pedido Enviado",
            text: "Enviando correo a " + email,
            icon: "success",
            showConfirmButton: false,
            timer: 4000,
          });
        },
        function (error) {
          console.log("FAILED...", error);
          Swal.fire({
            title: "Error al realizar pedido, pruebe mas tarde",
            text: error,
            icon: "success",
            showConfirmButton: false,
            timer: 4000,
          });
        }
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let changeState = document.querySelector(
      "#exampleFormControlSelect1"
    ).value;
    // console.log(document.querySelector("#exampleFormControlSelect1").value);
    firebase
      .firestore()
      .doc(`orders/${order.id}`)
      .update({
        ...order,
        estado: changeState,
      });
    if (changeState === "Enviado") {
      sendNotificacion();
    }
  };
  // useEffect(() => {
  //   if (order.estado === "Enviado") {
  //     console.log("ha sido enviado");
  //     sendNotificacion();
  //   }
  //   if (order.estado === "Recibido") {
  //     console.log("ha sido recibido");
  //   }
  // }, [order.estado]);
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <SideBar />
        <main className={classes.content}>
          <div className="container">
            <Link to="/orders" className="btn btn-info my-2">
              Volver
            </Link>
            <div className="row">
              <div className="col-md-8">
                <h2>Pedido N?? {order.id}</h2>
                <p>
                  Pedido realizado el{" "}
                  {moment(order.tiempo).format("Do MMMM YYYY, h:mm:ss a")}
                </p>{" "}
                <p className="text-capitalize">
                  Nombre del cliente: {order.nombre}
                </p>{" "}
                <p>Correo:{order.email}</p>
                <p>Precio total: S./{order.precio}</p>
                <p>Direcci??n: {order.direccion}</p>
                <p>Referencia: {order.referencia}</p>
                <p>Telefono de Contacto: {order.telefono}</p>
                <p className="d-inline mr-2">Estado del pedido</p>
                <button
                  className={
                    order.estado === "Por Confirmar"
                      ? "btn btn-danger "
                      : order.estado === "Enviado"
                      ? "btn btn-warning"
                      : "btn btn-success"
                  }
                >
                  {order.estado}
                </button>
                <h3>El pedido fue</h3>
                <div className="row">
                  {order.shoppingCart?.map((product, i) => (
                    <div className="card col-md-6 col-sm-12" key={i}>
                      <img
                        className="card-img-top"
                        alt="img"
                        src={product.imagenUrl}
                      />
                      <div className="card-body">
                        <p className="card-text">Nombre: {product.title}</p>
                        <p className="card-text">
                          Cantidad: {product.cantidad}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {order.estado === "Recibido" ? (
                <h4 className="text-center">Pedido ya culminado</h4>
              ) : (
                <form className="col-md-4" onSubmit={handleSubmit}>
                  <h4>Cambiar el estado del pedido</h4>
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      {order.estado === "Por Confirmar" ? (
                        <>
                          <option>Enviado</option>
                          <option>Recibido</option>
                        </>
                      ) : order.estado === "Enviado" ? (
                        <>
                          <option>Recibido</option>
                        </>
                      ) : (
                        <></>
                      )}
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Guardar"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
