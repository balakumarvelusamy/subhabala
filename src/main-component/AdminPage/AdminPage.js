import React, { useState, Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Navbar2 from "../../components/Navbar2";
import PageTitle from "../../components/pagetitle";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import Scrollbar from "../../components/scrollbar";
import Admin from "../../components/Admin/Admin";
import VideoSection from "../../components/VideoSection";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import config from "../../config.json";

const AdminPage = () => {
  const [value, setValue] = useState({
    password: "",
  });
  const [show, setShow] = useState(false);
  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const password = value.password;
    if (password === config.adminpwd) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={"Admin"} pagesub={"Admin"} />

      {show ? (
        <Admin />
      ) : (
        <Grid className="loginWrapper">
          <Grid className="loginForm">
            <form onSubmit={submitForm}>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Password"
                  value={value.password}
                  variant="outlined"
                  name="password"
                  type="password"
                  label=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
              </Grid>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme  " type="submit">
                  Login
                </Button>
              </Grid>
            </form>
          </Grid>{" "}
        </Grid>
      )}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AdminPage;
