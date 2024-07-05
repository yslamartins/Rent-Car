import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

import "./styles.css";

export default function Login() {
  return (
    <div className="container">
      <div className="card">
        <div className="le">
          <button id="face">
            <FaFacebookF />
            Login with Facebook
          </button>
          <button id="google">
          <FcGoogle />
          Login with Google
          </button>
          <button id="tt"> 
          <FaXTwitter />
            Login with Twitter</button>
        </div>
        <h3 id="or">OR</h3>
        <div className="ld">
          <h2>Sign in</h2>
          <input type="text" name="" id="" placeholder="Username" />
          <label htmlFor=""></label>
          <input type="password" name="" id="" placeholder="Password" />
          <label htmlFor=""></label>
          
          <div className="form-end">
          <input type="checkbox" id="remember-me" name="remember-me"/>
          <label for="remember-me">Remember me</label>
          <button>Login</button>

        </div>
        <div className="links">
        <Link to="/cadastro" id="cad">Register now</Link>   |   
        <Link to="/rec">Forgot password?</Link>
        </div>
          </div>
          
          
      </div>
    </div>
  );
}
