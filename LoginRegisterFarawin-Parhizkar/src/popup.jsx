import React from "react";
// pop up commponent that get the contexts from the main chatpage by passing it as a prop
const Popup = (props) => {
  return (
    <div className="w-screen fixed flex items-center z-[1] justify-center h-screen  backdrop-blur-sm">
      <div className="w-[300px] h-fit bg-white rounded-lg ">
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
