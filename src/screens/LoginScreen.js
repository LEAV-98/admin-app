import React from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { startLoginEmailPassword } from "../actions/auth";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export const LoginScreen = () => {
  const classes = useStyles();

  const [inputValues, handleInputChange] = useForm({
    email: "admin@admin.com",
    password: "admin123",
  });
  const dispatch = useDispatch();
  const { email, password } = inputValues;
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };
  return (
    // <div className="container">
    //   <div className="row mt-5">
    //     <form className="col-md-6 col-sm-12 mx-auto" onSubmit={handleLogin}>
    //       <h1 className="text-center">
    //         Sistema de Administración de Pizza App
    //       </h1>
    //       <h3 className="text-center">Iniciar Sesión</h3>
    //       <div className="form-group">
    //         <input
    //           type="text"
    //           className="form-control"
    //           placeholder="Usuario"
    //           name="email"
    //           value={email}
    //           onChange={handleInputChange}
    //         />
    //       </div>
    //       <div className="form-group">
    //         <input
    //           type="password"
    //           className="form-control"
    //           placeholder="Contraseña"
    //           name="password"
    //           value={password}
    //           onChange={handleInputChange}
    //         />
    //       </div>
    //       <div className="form-group">
    //         <input type="submit" value="Ingresar" className="btn btn-success" />
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Pizzeria Mickuy - Inicio de sesión
        </Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={handleInputChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
};
