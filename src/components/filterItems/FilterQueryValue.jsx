import React from "react";
import FilterButton from "./FilterButton";

function FilterQueryValue({ filterArr, setFilterVal, filterName,setCollapse,collapse }) {
  console.log("collapse", collapse)
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button onClick={()=>setCollapse("1")} className="accordion-button collapsed" type="button">
          {filterName}
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {filterArr.map((item, index) => (
            <FilterButton key={index} index={index} name={filterName} task={setFilterVal} input={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterQueryValue;
