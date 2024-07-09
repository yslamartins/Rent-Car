import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import "./forgot.css";
import Logo from "../../assets/Logo";

export default function Forgot() {
  return (
    <div className="rec">
      <div className="header-forg">
        <div className="logo-loc">
          <Logo />
        </div>
      </div>
      <div className="container-rec">
        <div className="card-rec">
          <div className="header">
            <Link to="/">
              <button>
                <IoMdReturnLeft /> Return
              </button>
            </Link>
          </div>
          <h1>Account Recovery</h1>
          <p>
            Enter an email and we will send you a link to recover your password
          </p>
          <div className="email-rec">
            <input type="text" />
            <label htmlFor=""></label>
          </div>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
