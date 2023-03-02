import React from "react";
import "./Links.css";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import profileimage from "./signature.jpg";
import { BsFillShareFill } from "react-icons/bs";
import ninja from "./ninja.png";
const Links = () => {
  return (
    <div className="links">
      <BsFillShareFill className="share_icon" />
      <img alt="profile" className="profile_image" src={profileimage} />
      <h3>@vcagdastok</h3>
      <div className="socials">
        <BsInstagram className="social_icon" />
        <BsTwitter className="social_icon" />
      </div>
      <div className="links_container">
        <button>
          <div className="ninjadiv">
            <img className="ninja" src={ninja} />
          </div>

          <div>
            <h3>Facebook</h3>
          </div>
        </button>
        <button>
          <div className="ninjadiv">
            <img className="ninja" src={ninja} />
          </div>

          <div>
            <h3>Facebook</h3>
          </div>
        </button>
        <button>
          <div className="ninjadiv">
            <img className="ninja" src={ninja} />
          </div>

          <div>
            <h3>Facebook</h3>
          </div>
        </button>
        <button>
          <div className="ninjadiv">
            <img className="ninja" src={ninja} />
          </div>

          <div>
            <h3>Facebook</h3>
          </div>
        </button>
        <button>
          <div className="ninjadiv">
            <img className="ninja" src={ninja} />
          </div>

          <div>
            <h3>Facebook</h3>
          </div>
        </button>
      </div>
      <h1>Toxisch</h1>
    </div>
  );
};

export default Links;
