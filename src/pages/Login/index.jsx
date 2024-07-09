import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import Logo from '../../assets/Logo';
import "./styles.css";

export default function Login() {
  return (
    <div className="login">
    <div className="header-login">
        <div className="logo-loc">
          <Logo />
        </div>
      </div>
    <div className="container-login">
      <div className="card">
        <div className="le">
          <button className="button" id="face">
            <FaFacebookF />
            Login with Facebook
          </button>
          <button className="button" id="google">
            <FcGoogle />
            Login with Google
          </button>
          <button className="button" id="tt">
            <FaXTwitter />
            Login with Twitter
          </button>
        </div>
        <div className="meio">
          <div className="t"></div>
          <div className="m">
            <h3 id="or">OR</h3>
          </div>
          <div className="t"></div>
        </div>
        <div className="ld">
          <h2>Sign in</h2>
          <input type="text" name="" id="" placeholder="Username" required />
          <label htmlFor=""></label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          <label htmlFor=""></label>

          <div className="form-end">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label for="remember-me">Remember me</label>
            <button>Login</button>
          </div>
          <div className="links">
            <Link to="/cadastro" id="cad">
              Register now
            </Link>{" "}
            |<Link to="/forgot">Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
