import React from "react";

function Plus_Counter({ count, setCount }) {
  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      +
    </button>
  );
}

export default Plus_Counter;
