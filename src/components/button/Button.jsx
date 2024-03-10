import React from "react";

function Button({ title }) {
  return (
    <div>
      <button className="text-lg bg-emerald-800 rounded-lg px-2 py-1 ">
        {title}
      </button>
    </div>
  );
}

export default Button;
