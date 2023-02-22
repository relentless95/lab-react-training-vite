import React from "react";

function BoxColor(props) {
  const { r, g, b, altColor } = props;
  const color = `rgb(${r}, ${g}, ${b})`;
  const style = {
    backgroundColor: color,
    height: "50px",
    margin: "2px",
    textAlign: "center",
    paddingBottom: "10px"
  };
  return (
    <div style={style} className="container">
      <p>{color}<br/>{altColor}</p>
      
    </div>
  );
}

export default BoxColor;

// const divStyle = {
//     color: 'blue',
//     backgroundImage: 'url(' + imgUrl + ')',
//   };

//   function HelloWorldComponent() {
//     return <div style={divStyle}>Hello World!</div>;
//   }
