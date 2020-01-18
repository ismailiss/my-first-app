import React from "react";

export default ({ element }) => {
  return (
    <div>
      <label for={element}>{element}</label>
      <input
        id={element}
        type="checkbox"
        onChange={event => {
          console.log("event", event.target.checked);
        }}
      />
    </div>
  );
};
