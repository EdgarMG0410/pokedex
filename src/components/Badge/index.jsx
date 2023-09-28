import React from "react";
import st from "./typesstyle.module.css";

const Badge = ({ className, text }) => {
  return <div className={`${className} ${st.type}`}>
    <p>{text}</p>
  </div>;
};

export default Badge;
