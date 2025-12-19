import React from "react";
import "../style/square.css";

type Props = {};

export const Square = (props: Props) => {
  return (
    <div className="container absolute ">
      <div className="box-card">
        <div className="face front">Front</div>
        <div className="face back">Back</div>
        <div className="face right">Right</div>
        <div className="face left">Left</div>
        <div className="face top">Top</div>
        <div className="face bottom">Bottom</div>
      </div>
    </div>
  );
};
