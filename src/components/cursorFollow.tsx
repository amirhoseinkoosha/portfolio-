import React from "react";
import { useCursorFollow } from "../hooks/gsapCursorFollow";
import "../style/global.css";

type Props = {};

const CursorFollow = (props: Props) => {
  useCursorFollow();

  return (
    <div id="Wrap">
      {/* <img
        className="FollowBox"
        src="https://source.unsplash.com/Pd8tLVGx2O4/200x250"
        alt=""
      />
      <img
        className="FollowBox"
        src="https://source.unsplash.com/CudNrzbsyZw/200x250"
        alt=""
      /> */}
      <div className="FollowBox "></div>
      <div className="FollowBox "></div>
      {/* <img
        className="FollowBox"
        src="https://source.unsplash.com/uEFombN3J5U/200x250"
        alt=""
      />
      <img
        className="FollowBox"
        src="https://source.unsplash.com/BjJP2TN8WoI/200x250"
        alt=""
      /> */}
    </div>
  );
};

export default CursorFollow;
