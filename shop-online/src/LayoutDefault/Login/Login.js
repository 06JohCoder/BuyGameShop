import React from 'react';
import './Login.scss'; // Import CSS for styling
import Logo from "../../LogoImgae/Logo.png";
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Log in</h2>
                <p>To your account</p>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>LOG IN</button>
                <div className="forgot-password">
                    <p >Don't have an account? <a href="/signup">sign up</a></p>
                    <p ><a href="/signup">Forgot password?</a></p>
                </div>
            </div>
            <div className="social-login">
                <img src={Logo} alt="Social Login" className='Login_img' />
                <h2>Log in</h2>
                <p>with one of your social profiles</p>
                <div className="social-buttons">
                    <button className="facebook">Facebook</button>
                    <button className="twitter">Twitter</button>
                    <button className="google">Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;