import React from "react";

export default function Calculate(props) {
  const { evaluate } = props;
  return (
    <button
      onClick={evaluate}
      className="flex items-center justify-center gap-4 py-4 bg-sky-700 rounded hover:bg-sky-500 duration-200"
    >
      <h4>How rich will I be?</h4>
      <i className="fa-solid fa-calculator hover:animate-spin"></i>
    </button>
  );
}
