import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraph RUNNING");
  return <h3>{props.children}</h3>;
};

export default MyParagraph;
