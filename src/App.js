import "./App.css";
import NavBar from "./components/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import env from "react-dotenv";

function App() {

  const [product, setProduct] = useState({
    name: "react from FB",
    price: 10,
    productBy: "Facebook",
  });

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type":"application/json"
    }
    return fetch("https://localhost:3002/payment", {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE", response)
      const {status} = response;
      console.log("STATUS", status)
    }).catch(error => console.log(error))

  }

  return (
    <div className="App">
      <NavBar />
      <HeroCarousel />
      <StripeCheckout
        stripeKey={env.REACT_APP_KEY}
        token={makePayment}
        name="Buy React"
        amount={product.price * 100}
        shippingAddress
        billingAddress
      >
        <button className="checkout-btn">
          Buy React is just ${product.price}
        </button>
      </StripeCheckout>
    </div>
  );
}

export default App;
