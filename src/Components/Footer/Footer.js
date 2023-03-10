import React, { Fragment } from "react";
import { BsYoutube, BsSpotify, BsFacebook } from "react-icons/bs";
import { } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-item-center py-3 px-5 mt-3 bg-dark text-white">
      <div className="d-flex justify-content-between align-item-center">
        <h3>E-Commerce</h3> &copy; All rights reserved
      </div>
      <Fragment>
        <div
          className="d-flex justify-content-between align-item-center "
          style={{ width: "300px" }}
        >
          <a href="www.youtube.com" className="text-white">
            <BsYoutube size="30px" />
          </a>
          <a href="#" className="text-white">
            <BsSpotify size="30px" />
          </a>
          <a href="#" className="text-white">
            <BsFacebook size="30px" />
          </a>
        </div>
      </Fragment>
    </div>
  );
};

export default Footer;