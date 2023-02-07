import "./style/ProductDetailPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdSportsSoccer } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import Rating from "@mui/material/Rating";
import Logo from "../images/Court1.webp";
import { Link } from "react-router-dom";

const ProductDetailPageOne = (props) => {
  return (
    <div className="container product-detail-container">
      <div className="left-body">
        <h1 className="product-name">
          Sky Sports Arena{" "}
          <Rating
            name="sporto-rating"
            defaultValue={4}
            precision={0.5}
            readOnly
          />
        </h1>
        <p className="location">
          Whitefield, Bangalore <GrLocation />
        </p>
        <img src={Logo} alt="turf-pic" className="img-book" />
        <div className="sports">
          <div>
            <h2 className="heading">
              Sports available <MdSportsTennis /> <MdOutlineSportsCricket />{" "}
              <MdSportsSoccer /> -
            </h2>
          </div>
          <div className="sports-name">
            <p className="name">Badminton</p>
            <p className="name">Cricket</p>
          </div>
        </div>
      </div>
      <div className="right-body">
        <div className="timing">
          <p className="time">
            Timing <GiAlarmClock />
          </p>
          <p className="time">10 a.m - 1 a.m</p>
        </div>
        <div className="map">
          <p className="map-item">
            Location <BiCurrentLocation />
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              title="Location"
              src="https://maps.google.com/maps?q=whitefield , bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              className="map-item gmap"
            ></iframe>
          </p>
        </div>
        <Link to="/info">
          <button className="btn book-btn">BOOK NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailPageOne;
