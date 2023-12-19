import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdTopic } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
// import { IoIosContact } from "react-icons/io";
// import { TbTruckDelivery } from "react-icons/tb";
import { FaBookSkull } from "react-icons/fa6";

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <i>
          <FaHome />
        </i>
        Home
      </Link>

      <Link to="/topics">
        <i>
          <MdTopic />
        </i>
        Topics
      </Link>

      <Link to="/gallery">
        <i>
          <RiGalleryFill />
        </i>
        Gallery
      </Link>

      {/* <Link to="/contact">
        <i>
          <IoIosContact />
        </i>
        Contact
      </Link>

      <Link to="/order">
        <i>
          <TbTruckDelivery />
        </i>
        Order
      </Link> */}

      {/* <Link to="/staff">Staff Page</Link> */}
      <Link to="/mangas">
        <i>
          <FaBookSkull />
        </i>
        Manga List
      </Link>
    </nav>
  );
}

export default Navigation;
