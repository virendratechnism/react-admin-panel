import React, { useRef, useState } from "react";
import "./style.scss"; // main file :: Development
// import "./style.min.css"; // minified file :: Production

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

// import logo from "../../logo.svg";
import logo from '.././../image/logo.webp'
import { useSelector, useDispatch } from "react-redux";

import { logIn, logOut } from '../../store'

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const auth = useSelector((state) => state.auth.auth);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const companyName = "TaxPatra";
	const passwordInput = useRef(null);

	const togglePassword = (e) => {
		if (e.target.checked === true) passwordInput.current.type = "text";
		else passwordInput.current.type = "password";
	};
	const clickHandler = (e) => {
		// console.log(email);
		if(email === "admin@gmail.com" && password === "Admin") {
			e.preventDefault();	
			navigate("/home");
		} else {
			e.preventDefault();	
			
			swal({
				title: "Login Fail",
				text: "Email OR password are not match",
				button: true,
				buttonText: "Action",
				dangerMode: true,
				closeOnClickOutside: false,
				icon: "warning",
			})
		}
	}

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
								onChange={(e) => setEmail(e.target.value)}
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
								onChange={(e) => setPassword(e.target.value)}
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
								onClick={clickHandler}
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
