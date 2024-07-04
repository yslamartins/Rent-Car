import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./styles.css";

export default function Login() {
  return (
    <div className="container">
      <div className="card">
        <div className="ld">
          <button>
            <FaFacebookF />
            Login with Facebook
          </button>
          <button>
          <FaGoogle />Login with Google

          </button>
          <button>
            <FaTwitter/>
            Login with Twitter</button>
        </div>
        <div className="le">
          <h2>Entre</h2>
          <input type="text" name="" id="" />
          <label htmlFor=""></label>
          <input type="password" name="" id="" />
          <option value="required">Remember me</option><button>Login</button>
          
        </div>
      </div>
    </div>
  );
}
