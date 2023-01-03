import Navbar from "./Navbar.js";
export default function About(props) {
    return (
      <>
      <Navbar cart={props.cart} />
      <div className="about-layout">
        <div>
          <h1>About</h1>
          <p>
            Built in react. Save time by shopping on our app and we'll deliver the products right
            to your home. <br />
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_550/v1607770215/react-tutorial/supermarket/about.jpg"
          height="275"
          width="183"
          className="rounded"
          alt=""
        />
      </div>
      </>
    );
  }