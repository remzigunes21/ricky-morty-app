import React from "react";
import { useState } from "react";
import FilterQueryValue from "./FilterQueryValue";
import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";

function FilterItems({ setStatus, setSpecies, setGender }) {
    const [collapse,setCollapse]=useState("");
  const onClearFilter = () => {
    setStatus("");
    setSpecies("");
    setGender("");
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div style={{ cursor: "pointer" }} onClick={onClearFilter} className="text-primary text-decoration-underline text-center mb-3">
        Clear Filters
      </div>
      <div className="accordion">
        <Status setStatus={setStatus} />
        <Species setSpecies={setSpecies} />
        <Gender setGender={setGender} />
      </div>
    </div>
  );
}

export default FilterItems;
