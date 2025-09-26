import React from "react";

function Minus_Counter({ count, setCount }) {
  return (
    <button
      onClick={() => setCount(count - 1)}
    >
      -
    </button>
  );
}

export default Minus_Counter;
