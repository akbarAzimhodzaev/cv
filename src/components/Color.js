import React from "react";
                    // props
function Color({ index, setActive, color, name, isActive }) {
  return (
    <button
      className={`color ${isActive ? "active" : ""} `}
      index={index}
      onClick={(e) => {
        setActive(index);
      }}
      style={{ background: color }}
    >
      {name}
    </button>
  );
}

export default Color;
