// import reactLogo from './assets/react.svg'
import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
// import CreditCard from "./components/CreditCard";

const idCardData = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    lastName: "Delores",
    firstName: "Obrien",
    gender: "female",
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const data = [
  { lang: "en", name: "Ludwig" },
  { lang: "en", name: "francois" },
];

const creditCardData = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white",
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222",
  },
  {
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Should be displayed here</h1>
      <div id="main-container">
        {idCardData.map((data, index) => (
          <IdCard
            key={index}
            image={data.picture}
            lastName={data.lastName}
            firstName={data.firstName}
            gender={data.gender}
            height={data.height}
            birth={data.birth}
          />
        ))}
        {data.map((item, index) => (
          <Greetings key={index} lang={item.lang}>
            {item.name}
          </Greetings>
        ))}
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <BoxColor r={255} g={0} b={0} altColor={"#ff0000"} />

        <BoxColor r={128} g={255} b={0} altColor={"#80ff00"} />

        {/* delete */}
        {/* <div className="App">
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div> */}

        {/* creating a css credit card */}
        <div className="credit-card">
          <div className="card-logo">
            <img src={"what?"} alt={""} className="fillImage" />
          </div>
          <div className="card-number">
            <p>**** **** ****"lastDigits"</p>
          </div>
          <div className="card-details">
            <span className="expiry-date">expirationMonth/expirationYear</span>
            <span>bank</span>
          </div>

          <div className="card-owner">
            <p> owner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
