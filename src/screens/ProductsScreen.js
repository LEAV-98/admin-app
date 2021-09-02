import { CssBaseline, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import { SideBar } from "./SideBar";
import Swal from "sweetalert2";
import { ProductList } from "./ProductList";
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
export const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const cargarProductos = () => {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(newProducts);
      });
  };
  useEffect(() => {
    cargarProductos();
    return () => {
      setProducts([]);
    };
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro que quieres eliminar?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `Don't save`,
      cancelButtonText: "No",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        firebase
          .firestore()
          .collection("products")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Eliminado con exito");
          })
          .catch((e) => console.log(e));
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

    cargarProductos();
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideBar />
      <main className={classes.content}>
        <div className="container ">
          <Link to="/add" className="btn btn-primary my-3">
            Agregar Producto
          </Link>
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Pizzas
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Pastas
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Combos
            </button>
          </div>
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h2>Pizzas</h2>
              <ProductList
                products={products.filter(
                  (product) => product.tipo === "Pizzas"
                )}
                handleDelete={handleDelete}
              />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Pastas</h2>
              <ProductList
                products={products.filter(
                  (product) => product.tipo === "Pastas"
                )}
                handleDelete={handleDelete}
              />
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Combos</h2>
              <ProductList
                products={products.filter(
                  (product) => product.tipo === "Combos"
                )}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
