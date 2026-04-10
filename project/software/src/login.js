import { useState } from "react";
import Footer from "./common/footer";
import Header from "./common/header";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function sub(e) 
    {
        e.preventDefault();
        const obj = {email,password};
        console.log(obj);
        localStorage.setItem("userid", 1);
        window.location = "/";
    }

    return (
        <div id="log">
            <Header />
            <div id="frm">
                <h1>Login</h1>
                <form onSubmit={sub}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <a href="#">Forgot Password?</a>
                    <button type="submit" className="btn btn-primary btn-lg btn-block mt-2 mb-2">
                        Login
                    </button>
                    <p>
                        Do not have an account? <a href="">Signup</a>
                    </p>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
