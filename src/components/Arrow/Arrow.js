import React, { useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import "./Arrow.css";

const Arrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  const TopOfPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BsArrowUpSquareFill
      onClick={TopOfPage}
      className={showScroll ? "arrow" : "removeArrow"}
      size={30}
      color="#a4a4a4"
    />
  );
};

export default Arrow;
