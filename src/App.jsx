import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState("");
  const [items, setItems] = useState([]);

  const change = (event) => {
    const value = event.target.value;
    setList(value); //here we are storing only the current value
  };

  const add = () => {
    if (list !== "") {
      setItems((prevItems) => [...prevItems, list]);
      setList("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
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
            +
          </button>
          <div className="lists">
            <ol>
              {items.map((val, index) => (
                <li key={index}>
                  <button className="Delete" onClick={() => deleteItem(index)}>
                    x
                  </button>
                  {val}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
