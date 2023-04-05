import { React, useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import sImg1 from "../../images/story/4.jpg";
import sImg2 from "../../images/story/5.jpg";
import sImg3 from "../../images/story/6.jpg";
import config from "../../config.json";
import shape1 from "../../images/story/shape-1.png";
import shape2 from "../../images/story/shape-2.png";
import { alpha } from "@material-ui/core/styles";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { forwardRef } from "react";
// import MaterialTable from "material-table";
import { MDBDataTableV5 } from "mdbreact";
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
const Admin = (props) => {
  const [contact, setContact] = useState([]);
  const getcontact = async () => {
    await fetch(config.service_url + "getcontact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        {
          setContact(data);
          console.log("contact", data);
        }
      })
      .catch((err) => {
        setContact([]);
        console.log("contact error", err);
      });
  };

  useEffect(() => {
    getcontact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "Sno",
      field: "sno",
      sort: "enabled",
      width: 150,
    },
    {
      title: "Name",
      field: "name",
      sort: "enabled",
      width: 150,
    },
    {
      title: "Email",
      field: "email",
      sort: "disbled",
      width: 150,
    },
    {
      title: "Guest",
      field: "guest",
      sort: "enabled",
      width: 150,
    },
    {
      title: "attend",
      field: "Attend",
      sort: "disabled",
      width: 150,
    },

    {
      title: "Wishes",
      field: "wishes",
      sort: "enabled",
      width: 150,
    },
    {
      title: "Date",
      field: "createddate",
      sort: "enabled",
      width: 150,
    },
  ];

  const data =
    contact &&
    contact.length > 0 &&
    contact.map((ie, index) => ({
      sno: index + 1,
      name: ie.name,
      email: ie.email,
      guest: ie.guest,
      attend: ie.attend,
      wishes: ie.wishes,
      createddate: ie.createddate,
    }));

  const datatable1 = {
    columns: [
      {
        label: "#",
        field: "sno",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "disabled",
        width: 150,
      },

      {
        label: "Guest/Attend",
        field: "attend",
        sort: "disabled",
        width: 150,
      },

      {
        label: "Wishes",
        field: "wishes",
        sort: "disabled",
        width: 150,
      },
    ],
    rows:
      contact &&
      contact.length > 0 &&
      contact.map((ie, index) => ({
        sno: index + 1,
        name: ie.name,
        email: ie.email,
        attend: (
          <p className="small">
            {ie.guest}/{ie.attend}
          </p>
        ),
        wishes: <p className="small">{ie.wishes}</p>,
        createddate: ie.createddate,
      })),
  };

  return (
    <section className="story-section section-padding" id="story">
      <div className="container">
        <div className="row p-1">
          <SectionTitle MainTitle={"RSVP"} />
        </div>
        <div className="row">
          <div className="col col-xs-12 overflow-auto">
            <small className="overflow-auto">
              <MDBDataTableV5 className="small" disableRetreatAfterSorting={true} entriesOptions={[5, 20, 25]} entries={30} pagesAmount={4} data={datatable1} pagingTop={false} searchTop searchBottom={false} />
            </small>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <div className="sticky-shape">
          <img src={shape1} alt="" />
        </div>
      </div>
      <div className="shape-2">
        <div className="sticky-shape">
          <img src={shape2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Admin;
