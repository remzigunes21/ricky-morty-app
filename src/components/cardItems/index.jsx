import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function CardItems({ results }) {
  if (results && results.length !== 0) {
    return results.map((item) => {
      return (
        <NavLink style={{ textDecoration: "none" }} key={item.id} to={`/${item.id}`} className="container-card">
          <div className={`card`}>
            <img className={`img`} src={item.image} alt="" />
            <div className={`content`}>
              <h3>{item.name}</h3>
              <div>
                <p>Last Location</p>
                <span>{item.location.name}</span>
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
