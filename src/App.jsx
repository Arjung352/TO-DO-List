import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Show from "./Show";

const App = () => {
  const [list, setList] = useState("");
  const [items, setItems] = useState([]);
  const change = (event) => {
    const value = event.target.value;
    setList(value);
  };

  const add = () => {
    if (list !== "") {
      setItems((prevItems) => [...prevItems, list]);
      setList("");
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="centre_div">
          <br />
          <h1>TO-DO List</h1>
          <br />
          <input
            type="text"
            placeholder="Add An Item"
            value={list}
            onChange={change}
          />
          <button onClick={add} className="Add">
            <AddCircleIcon fontSize="large" />
          </button>
          <div className="lists">
            <ol>
              {items.map((val, index) => (
                <Show index={index} value={val} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
