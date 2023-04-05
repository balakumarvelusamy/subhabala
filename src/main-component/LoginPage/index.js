import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

const LoginPage = (props) => {
  const push = useNavigate();

  const [value, setValue] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      setValue({
        username: "",
        password: "",
        remember: false,
      });
      validator.hideMessages();

      const userRegex = "";
      const username = value.username;
      const password = value.password;

      if (username === "pappu" && password === "pappu") {
        toast.success("successfully Login on Tales Of Suba!");
        push("/admin");
      }
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };
  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Username"
                value={value.username}
                variant="outlined"
                name="username"
                label="Username"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("username", value.username, "required|username")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Password"
                value={value.password}
                variant="outlined"
                name="password"
                type="password"
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("password", value.password, "required")}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formAction">
                <FormControlLabel control={<Checkbox checked={value.remember} onChange={rememberHandler} />} label="Remember Me" />
                <Link to="/forgot-password">Forgot Password?</Link>
              </Grid>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme " type="submit">
                  Login
                </Button>
              </Grid>
              <Grid className="loginWithSocial d-none">
                <Button className="facebook">
                  <i className="fa fa-facebook"></i>
                </Button>
                <Button className="twitter">
                  <i className="fa fa-twitter"></i>
                </Button>
                <Button className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </Button>
              </Grid>
              <p className="noteHelp d-none">
                Don't have an account? <Link to="/register">Create free account</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
