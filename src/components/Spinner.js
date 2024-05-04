import React from "react";
import loading from "./giphy.gif";
// eslint-disable-next-line
const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="" width={100} height={80} />
    </div>
  );
};

export default Spinner;
