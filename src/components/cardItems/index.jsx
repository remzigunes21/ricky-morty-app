import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function CardItems({ results }) {
  if (results) {
    return results
      .map((item) => {
        return (
          <NavLink
            style={{ textDecoration: "none" }}
            key={item.id}
            to={`/${item.id}`}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
            <div className={`card d-flex flex-column justify-content-center`}>
              <img className={`img`} src={item.image} alt="" />
              <div className={`content`}>
                <div className="fs-5 fw-bold mb-4">{item.name}</div>
                <div className="">
                  <div className="fs-6 fw-normal">Last Location</div>
                  <div className="fs-5">{item.location.name}</div>
                </div>
              </div>
            </div>
          </NavLink>
        );
      });
  } else {
    return <>No Characters Found</>;
  }
}

export default CardItems;
