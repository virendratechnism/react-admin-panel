import React, { useRef } from "react";
import "./style.scss"; // main file :: Development
// import "./style.min.css"; // minified file :: Production

import { useNavigate } from "react-router-dom";

// import logo from "../../logo.svg";
import logo from '.././../image/logo.webp'
import { useSelector, useDispatch } from "react-redux";

import { logIn, logOut } from '../../store'

const LoginPage = () => {
	const auth = useSelector((state) => state.auth.auth);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const companyName = "TaxPatra";
	const passwordInput = useRef(null);

	const togglePassword = (e) => {
		if (e.target.checked === true) passwordInput.current.type = "text";
		else passwordInput.current.type = "password";
	};

	return (
		<div className="login__page__bg">
			<section className="login__card">
				<section className="header">
					<img className="logo" src={logo} />
					<h1 className="title" style={{color:"#4eb549"}}>{companyName}</h1>
				</section>

				<div className="login__form">
					<form method="POST" className="form" autoComplete="off">
						<div className="form__input">
							<label htmlFor="emailInput">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="your-awesome@mail.com"
							/>
						</div>
						<div className="form__input">
							<label htmlFor="passwordInput">Password</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="secret"
								ref={passwordInput}
							/>
						</div>
						<div id="checkbox__form__input" className="form__input">
							<input
								type="checkbox"
								name="checkbox"
								id="checkbox"
								onChange={(e) => togglePassword(e)}
							/>
							<label
								id="showPasswordInput"
								htmlFor="showPasswordInput"
							>
								Show Password
							</label>
						</div>
						<div className="form__input">
							<button
								className="login__btn"
								onClick={(e) => {
									e.preventDefault();
									dispatch(logIn());
									navigate("/home");
								}}
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default LoginPage;
