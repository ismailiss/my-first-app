import React from "react";

export default props => {
  return (
    <h2 {...props} style={{ fontSize: "12px", color: "blue", ...props.style }}>
      {props.children}
    </h2>
  );
};
