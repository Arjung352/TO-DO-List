import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

const Show = (props) => {
  const [overline, setOverline] = useState(false);

  const handleCheckboxClick = () => {
    setOverline(!overline);
  };

  return (
    <div className="inner">
      <span>
        <Checkbox
          className="Delete"
          onClick={handleCheckboxClick} // onClick should be a function reference
          fontSize="large"
        />
      </span>
      <li
        key={props.index}
        style={{
          textDecoration: overline ? "line-through" : "none",
        }}
      >
        {props.value}
      </li>
    </div>
  );
};

export default Show;
