import React from "react";

function Todo() {
  const do1 = "learn something new";
  const do2 = "give to the poor";
  const do3 = "oriola emmanuel is a rich man";
  const time = new Date();
  const hours = time.getHours();
  let result = "";
  if (hours < 12) {
    result = "Morning";
  } else if (hours => 12) {
    result = "Night";
  }
  return (
    <div>
      <div className="checkBox">
        <input type="checkbox" />
        <span>Todo : {`${do1}`} today</span>
      </div>
      <div className="checkBox">
        <input type="checkbox" />
        <span>Todo : {`${do2}`}</span>
      </div>
      <div className="checkBox">
        <input type="checkbox" />
        <span>Todo : {`${do3}`}</span>
      </div>
      <div className="checkBox">
        <input type="checkbox" />
        <span>Todo : Moulding </span>
      </div>
      <div className="checkBox">
        <input type="checkbox" />
        <span>Time Of Day : {`${hours % 12} ${result}`} </span>
      </div>
    </div>
  );
}

export default Todo;
