import { React, useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import sImg1 from "../../images/story/4.jpg";
import sImg2 from "../../images/story/5.jpg";
import sImg3 from "../../images/story/6.jpg";
import config from "../../config.json";
import shape1 from "../../images/story/shape-1.png";
import shape2 from "../../images/story/shape-2.png";
import { alpha } from "@material-ui/core/styles";

//import MaterialTable from "material-table";
import { MDBDataTableV5 } from "mdbreact";

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
          setContact(data.filter((_d) => _d.isactive === 1));
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
        label: "Attend/Guest",
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
            {ie.attend}/{ie.guest}
          </p>
        ),
        wishes: <p className="small">{ie.wishes}</p>,
        createddate: ie.createddate,
      })),
  };

  return (
    <section className="p-2 story-section section-padding" id="story">
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
