import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  const data =
    "Hey good lookin'! Get 10% OFF when you subscribe to our newsletter and be the first to know about new arrivals, sales & promos!";
  return <MyParagraph>{props.show ? data : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
