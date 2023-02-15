import React, { useState } from "react";
import { RiTodoLine } from "react-icons/ri";
function App() {
  const [item, setItem] = useState("");
  const [itemArray, setItemArray] = useState([]);

  const addItem = () => {
    if (item === "") alert("Please enter the todo item");
    else setItemArray([...itemArray, item]);
    setItem("");
  };

  const deleteItem = (i) => {
    setItemArray(
      itemArray.filter((item, index) => {
        return index != i;
      })
    );
  };

  const removeAll = () => {
    setItemArray([]);
  };

  return (
    <div className="flex items-center flex-col justify-center h-[100vh] bg-[rgba(0,0,0,0.5)] text-white space-y-5">
      <RiTodoLine className="text-5xl" />
      <div>
        <h1>Add your list here</h1>
        <div>
          <input
            onChange={(e) => {
              setItem(e.target.value);
            }}
            value={item}
            className="text-black px-3 py-3 outline-none text-[16px] my-3"
            type="text"
            name="item"
            placeholder="Enter your todo here"
            id=""
          />
          <button className="px-3 py-3 bg-blue-400" onClick={addItem}>
            +
          </button>{" "}
        </div>
        {itemArray.map((item, i) => {
          return (
            <div className="flex" key={i}>
              <div className="w-[100%] p-3 bg-white text-black my-3">
                {item}
              </div>
              <button
                className="bg-red-300 p-3 rounded my-3 cursor-pointer"
                onClick={() => {
                  deleteItem(i);
                }}
              >
                -
              </button>
            </div>
          );
        })}
        <div className="text-center my-3">
          <button
            className="bg-red-500 text-xl p-3 rounded-xl"
            onClick={removeAll}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
