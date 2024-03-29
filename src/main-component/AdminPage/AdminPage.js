import React, { useState, Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import Scrollbar from "../../components/scrollbar";
import Admin from "../../components/Admin/Admin";
import VideoSection from "../../components/VideoSection";
//import Grid from "@material-ui/core/Grid";
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
      <Navbar />
      <PageTitle pageTitle={"Admin"} pagesub={"Admin"} />

      {show ? (
        <Admin />
      ) : (
        <div className="loginWrapper">
          <div className="loginForm">
            <form onSubmit={submitForm}>
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

              <div className="formFooter">
                <Button fullWidth className="cBtnTheme  " type="submit">
                  Login
                </Button>
              </div>
            </form>
          </div>{" "}
        </div>
      )}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AdminPage;
