import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import logoEmail from "./image.svg";
import "./styles.css";

export default function Cadastro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setPasswordError("Password must contain at least one special character");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password) || !validateConfirmPassword(confirmPassword)) {
      setErrorMessage("Please fix the errors in the form");
      return;
    }
    setErrorMessage("");
    console.log("Form submitted");
  };

  return (
    <div className="container">
      <div className="le">
        <div className="header">
          <p>
            Already a member? <Link to="/login">Sign in</Link>
          </p>
        </div>
        <h1>Sign Up</h1>
        <p>Secure Your Communications with Easymail</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="username">
            <IoPersonSharp />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <label htmlFor=""></label>
          </div>
          <div className="email">
            <MdEmail />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor=""></label>
          </div>

          <div className="password">
            <FaLock />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>

          <div className="re-password">
            <FaLock />
            <input
              type="password"
              placeholder="Re-Type Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className="ld">
        <img src={logoEmail} alt="Logo" />
      </div>
    </div>
  );
}
