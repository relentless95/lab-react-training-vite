import React from "react";

function Random(props) {
  let { min, max } = props;

  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNum = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="container">
      Random value between {min} and {max} => {randomNum}
    </div>
  );
}

export default Random;
