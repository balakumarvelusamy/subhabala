import React, { Fragment, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
    submenu: [
      {
        id: 11,
        title: "Home style 1",
        link: "/home",
      },
      {
        id: 12,
        title: "Home style 2",
        link: "/home2",
      },
      {
        id: 13,
        title: "Home style 3",
        link: "/home3",
      },
      {
        id: 15,
        title: "Home Static Hero",
        link: "/home4",
      },
      {
        id: 16,
        title: "Home Box Style",
        link: "/home5",
      },
      {
        id: 17,
        title: "Home particles Effect",
        link: "/home6",
      },
      {
        id: 18,
        title: "Home Video Banar",
        link: "/home7",
      },
      {
        id: 14,
        title: "Invitation",
        link: "/invitation",
      },
    ],
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {/* {menus.map((item, mn) => {
            return (
              <ListItem className={item.id === openId ? "active" : null} key={mn}>
                {item.submenu ? (
                  <Fragment>
                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                      {item.title}
                      <i className={item.id === openId ? "fa fa-angle-up" : "fa fa-angle-down"}></i>
                    </p>
                    <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                      <List className="subMenu">
                        <Fragment>
                          {item.submenu.map((submenu, i) => {
                            return (
                              <ListItem key={i}>
                                <NavLink onClick={ClickHandler} className="active" to={submenu.link}>
                                  {submenu.title}
                                </NavLink>
                              </ListItem>
                            );
                          })}
                        </Fragment>
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <NavLink className="active" to={item.link}>
                    {item.title}
                  </NavLink>
                )}
              </ListItem>
            );
          })} */}
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="couple" spy={true} smooth={true} duration={500}>
              Couple
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="story" spy={true} smooth={true} duration={500}>
              Story
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="moments" spy={true} smooth={true} duration={500}>
              Moments
            </Link>
          </li>

          <li>
            <Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500}>
              Gallery
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="partners" spy={true} smooth={true} duration={500}>
              Partners
            </Link>
          </li>
          <li>
            <a activeClass="active" href="/invitation">
              Invitation & RSVP
            </a>
          </li>
        </ul>
      </div>

      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
