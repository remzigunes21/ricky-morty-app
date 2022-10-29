import React from "react";
import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";

function FilterItems({ setStatus, setSpecies, setGender }) {
  const onClearFilter = () => {
    setStatus("");
    setSpecies("");
    setGender("");
    window.location.reload()
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-5 mb-4">Filters</div>
      <button  onClick={onClearFilter} className="btn btn-warning mb-2">
        Clear Filters
      </button>
      <div className="accordion">
        <Status setStatus={setStatus} />
        <Species setSpecies={setSpecies} />
        <Gender setGender={setGender} />
      </div>
    </div>
  );
}

export default FilterItems;
