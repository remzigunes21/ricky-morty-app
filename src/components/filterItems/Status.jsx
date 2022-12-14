import React from "react";
import FilterButton from "./FilterButton";

const status = ["Alive", "Dead", "Unknown"];

function Status({ setStatus }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap flex-column gap-3">
          {status.map((item, index) => (
            <FilterButton
              key={index}
              index={index}
              name="status"
              task={setStatus}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Status;
