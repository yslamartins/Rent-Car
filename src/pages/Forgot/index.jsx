import { IoMdReturnLeft } from "react-icons/io";
import './styles.css'
import logoFor from "./image-for.svg";
export default function Forgot(){
    return(
        <div className="container-rec">
             <img src={logoFor} id="img"/>
        <div className="card-rec">
        <div className="return">
        <button> <IoMdReturnLeft /> Return</button>
        </div>
        <h1>Account Recovery</h1>
        <p>Enter an email and we will send you a link to recover your password</p>
        <div className="email-rec">
            <input type="text" />
            <label htmlFor=""> E-mail</label>
        </div>
        <button>Send</button>
        </div>
        </div>
    )
}