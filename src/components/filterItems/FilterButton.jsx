import React from "react";

function FilterButton({ input, task, index, name }) {
  return (
    <div>
      <style jsx>
        {`
          .full:checked + label {
            background-color: #0b4cd7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input className="form-check-input full" type="radio" name={name} id={`${name}-${index}`} />
        <label
          onClick={(x) => {
            task(input);
            // updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          for={`${name}-${index}`}>
          {input}
        </label>
      </div>
    </div>
  );
}

export default FilterButton;
