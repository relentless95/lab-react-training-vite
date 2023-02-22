// import React from "react";
// // import "./CreditCard.css";

// function CreditCard(props) {
// //   const {
// //     type,
// //     number,
// //     expirationMonth,
// //     expirationYear,
// //     bank,
// //     owner,
// //     bgColor,
// //     color,
// //   } = props;

// //   const lastDigits = number.slice(-4);

// //   const cardTypeImgSrc =
// //     type === "Visa"
// //       ? "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
// //       : "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg";

// //   const cardStyle = {
// //     backgroundColor: bgColor,
// //     color: color,
// //   };

//   return (
//     <div className="CreditCard" style={cardStyle}>
//       <div className="card-type">
//         <img src={cardTypeImgSrc} alt={type} />
//       </div>
//       <div className="card-number">{`●●●● ●●●● ●●●● ${lastDigits}`}</div>
//       <div className="card-expiry">
//         <span>{`Expires ${expirationMonth
//           .toString()
//           .padStart(2, "0")}/${expirationYear.toString().slice(-2)}`}</span>
//         <span>{bank}</span>
//       </div>
//       <div className="card-owner">{owner}</div>
//     </div>
//   );
// }

// export default CreditCard;


import React from 'react'
const info {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

function CreditCard(props) {
  return (
    <div>CreditCard</div>
  )
}

export default CreditCard