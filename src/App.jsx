import "./App.css";
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Outlet,
	Route,
	Routes,
	useNavigate,
} from "react-router-dom";
import SideBar from "./component/SidebarApp";
import swal from "sweetalert";
import { Card, Table } from "react-bootstrap";
import React from "react";
import ChartView from "./component/ChartView";
import MyCalendar from "./component/MyCalendar";
import TableView from "./component/TableView";
import ProfilePage from "./component/ProfilePage";
import logo from "./image/logo.png";
import {
	Button,
	Col,
	Form,
	FormControl,
	InputGroup,
	Row,
} from "react-bootstrap";

import { show, hide } from "./store";
import { useDispatch, useSelector } from "react-redux";

// * Pages Import
import LoginPage from "./pages/Login/Login";

const App = () => {
	const openSweat = useSelector((state) => state.alertBox.openSweat);
	const dispatch = useDispatch();

	return (
		<>
			{/* <LearnFlexPage /> */}
			{openSweat &&
				setTimeout(() => {
					swal({
						title: "Order no Dispatched",
						text: "Order No is : XXX",
						button: true,
						buttonText: "Action",
						dangerMode: true,
						closeOnClickOutside: false,
						icon: "warning",
					});
					dispatch(hide());
				}, 5000)}

			<RoutingHandler />
		</>
	);
};

const SidebarLayout = () => (
	<>
		<SideBar>
			<Outlet />
		</SideBar>
	</>
);

const RoutingHandler = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route element={<SidebarLayout />}>
						<Route path="/home" element={<Home />} />
						<Route path="/sweetAlert" element={<SweetAlert />} />
						<Route path="/sortTable" element={<SortTable />} />
						<Route path="/about" element={<About />} />
						<Route path="/chartView" element={<ChartViewDemo />} />
						<Route path="/calendar" element={<Calendar />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/2fa" element={<Twofa />} />
						<Route path="/billing" element={<Billing />} />
						<Route
							path="/settings/profile"
							element={<SettingsProfile />}
						/>
						<Route path="/settings/2fa" element={<Settings2fa />} />
						<Route
							path="/settings/billing"
							element={<SettingsBilling />}
						/>
					</Route>

					{/* <Route path="/logOut" element={<Logout />} /> */}
					<Route index element={<LoginPage />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</>
	);
};
const Home = () => {
	return (
		<>
			<h1>Home Page</h1>
			<div className="">
				<table className="my-3 mx-5 " style={{ border: "1px solid" }}>
					{/* <div className='watermark'>virendra katariya</div> */}
					{/* <img src={logo} style={{opacity: 0.25;}}/> */}
					<tr style={{ border: "1px solid" }}>
						<th style={{ border: "1px solid" }}>Company</th>
						<th style={{ border: "1px solid" }}>Contact</th>
						<th style={{ border: "1px solid" }}>Country</th>
					</tr>
					<tr style={{ border: "1px solid" }}>
						<td style={{ border: "1px solid" }}>
							Alfreds Futterkiste
						</td>
						<td style={{ border: "1px solid" }}>Maria Anders</td>
						<td style={{ border: "1px solid" }}>Germany</td>
					</tr>
					<tr style={{ border: "1px solid" }}>
						<td style={{ border: "1px solid" }}>
							Centro comercial Moctezuma
						</td>
						<td style={{ border: "1px solid" }}>Francisco Chang</td>
						<td style={{ border: "1px solid" }}>Mexico</td>
					</tr>
					<tr style={{ border: "1px solid" }}>
						<td style={{ border: "1px solid" }}>Ernst Handel</td>
						<td style={{ border: "1px solid" }}>Roland Mendel</td>
						<td style={{ border: "1px solid" }}>Austria</td>
					</tr>
					<tr style={{ border: "1px solid" }}>
						<td style={{ border: "1px solid" }}>Island Trading</td>
						<td style={{ border: "1px solid" }}>Helen Bennett</td>
						<td style={{ border: "1px solid" }}>UK</td>
					</tr>
					<tr style={{ border: "1px solid" }}>
						<td style={{ border: "1px solid" }}>
							Laughing Bacchus Winecellars
						</td>
						<td style={{ border: "1px solid" }}>Yoshi Tannamuri</td>
						<td style={{ border: "1px solid" }}>Canada</td>
					</tr>
					<tr style={{ border: "1px solid" }}>
						<td style={{ border: "1px solid" }}>
							Magazzini Alimentari Riuniti
						</td>
						<td style={{ border: "1px solid" }}>
							Giovanni Rovelli
						</td>
						<td style={{ border: "1px solid" }}>Italy</td>
					</tr>
				</table>
			</div>
		</>
	);
};
const SweetAlert = () => {
	const dispatch = useDispatch();

	return (
		<>
			<h1>SweetAlert Page</h1>
			{/* <p>User Page</p> */}
			<button
				className="btn btn-success my-3 mx-5"
				onClick={() =>
					swal({
						title: "Order no Dispatched",
						text: "Order No is : XXX",
						button: true,
						buttonText: "Action",
						dangerMode: true,
						closeOnClickOutside: false,
						icon: "warning",
					}).then(() => history.push("/"))
				}
			>
				Sweet Alert
			</button>
			<button className="btn btn-danger" onClick={() => dispatch(show())}>
				Any page render Alert box
			</button>
		</>
	);
};
const About = () => {
	// const history = useHistory();
	const navigate = useNavigate();
	return (
		<>
			<h1>About Page</h1>
			{/* <p>About Page</p> */}
			<Card
				className="shadow my-3 mx-5"
				style={{
					borderTop: "3px solid #f39c12",
					padding: "20px 15px",
					maxWidth: "25em",
				}}
			>
				<Table>
					<thead>
						<h4>Opening Hours</h4>
					</thead>
					<tbody>
						<tr>
							<td>Monday </td>
							<td> 9:00 AM To 6:00 PM</td>
						</tr>
						<tr>
							<td>Tuesday</td>
							<td> 9:00 AM To 6:00 PM</td>
						</tr>
						<tr>
							<td>Wednesday </td>
							<td> 9:00 AM To 6:00 PM</td>
						</tr>
						<tr>
							<td>Thursday </td>
							<td> 9:00 AM To 6:00 PM</td>
						</tr>
						<tr>
							<td>Friday </td>
							<td> 9:00 AM To 6:00 PM</td>
						</tr>
						<tr>
							<td>Saturday </td>
							<td> 9:00 AM To 6:00 PM</td>
						</tr>
						<tr>
							<td>Sunday </td>
							<td> ------ Day off ------</td>
						</tr>
					</tbody>
					<tfoot>
						<button
							className="btn btn-success my-3 mx-5"
							onClick={() => navigate(-1)}
						>
							Back
						</button>
					</tfoot>
				</Table>
			</Card>
		</>
	);
};
const SortTable = () => {
	return (
		<>
			<h1>Table Page</h1>
			<TableView />
		</>
	);
};
const ChartViewDemo = () => {
	return (
		<>
			<h1>Contact Page</h1>
			<ChartView />
		</>
	);
};
const Calendar = () => {
	return (
		<>
			<h1>Calendar Page</h1>
			<MyCalendar />
		</>
	);
};
const Profile = () => {
	return (
		<>
			<h1>Profile Page</h1>
			<ProfilePage />
		</>
	);
};
const Twofa = () => {
	const [email, setEmail] = useState("example@gmail.com");
	const [password, setPassword] = useState("");
	const alertHandler = () => {
		let object = {
			Email: email,
			Password: password,
		};
		// alert('email'= email, 'Password'= password)
		alert(JSON.stringify(object));
	};
	return (
		<>
			<h1>2fa Page</h1>
			<h3>Simple Form</h3>
			<hr />
			<Form column="lg" onSubmit={alertHandler}>
				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						// value={email}
						// size="lg"
						required
						type="email"
						placeholder={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						required
						type="password"
						placeholder="Password here"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</Form.Group>
				{/* <Form.Group as={Col} md="3" controlId="validationCustom05">
					<Form.Label>Zip</Form.Label>
					<Form.Control type="text" placeholder="Zip" required />
					<Form.Control.Feedback type="invalid">
						Please provide a valid zip.
					</Form.Control.Feedback>
				</Form.Group> */}
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};
const Billing = () => {
	return (
		<>
			<h1>Billing Page</h1>
		</>
	);
};
const SettingsProfile = () => {
	return (
		<>
			<h1>Settings Profile</h1>
		</>
	);
};
const Settings2fa = () => {
	return (
		<>
			<h1>Settings 2FA</h1>
		</>
	);
};
const SettingsBilling = () => {
	return (
		<>
			<h1>Settings Billing</h1>
		</>
	);
};
const Error = () => {
	return (
		<>
			<p> Page not found !</p>
		</>
	);
};

export default App;
