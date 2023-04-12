import React, { useState } from "react";

const Yeamin = ({ text, name, handleIncrease, handleDecrease, count }) => {
  return (
    <div>
      <button onClick={handleIncrease}>Up</button>
      <h1>{count}</h1>
      <button onClick={handleDecrease}>Down</button>
      <h1>
        {" "}
        Yeamin pagla takiyar crush {text} he is {name}{" "}
      </h1>
    </div>
  );
};

export default Yeamin;
