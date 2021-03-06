import React, { useEffect, useState } from "react";
import {
	Button,
	Col,
	Form,
	FormControl,
	InputGroup,
	Modal,
	Row,
} from "react-bootstrap";
import "../profile.scss";
import ProfileCounter from "./ProfileCounter"

const ProfilePage = () => {
	const [email, setEmail] = useState("example@gmail.com");
	const [profileName, setProfileName] = useState("");
	const [phone, setPhone] = useState("");
	const [age, setAge] = useState("");
	const [birthday, setBirthday] = useState("");
	const [residence, setResidence] = useState("");
	const [address, setAddress] = useState("");
	const [freelance, setFreelance] = useState("");

	const [show, setShow] = useState(false);

	const alertHandler = () => {
		let object = {
			Email: email,
			ProfileName: profileName,
			Phone: phone,
			Age: age,
			Birthday: birthday,
			Residence: residence,
			Address: address,
			Freelance: freelance,
		};
		// alert('email'= email, 'Password'= password)
		alert(JSON.stringify(object));
	};
	return (
		<>
			<div>
				<section className="about-section " id="about">
					<div className="container">
						<div className="row align-items-center flex-row-reverse">
							<div className="col-lg-6">
								<div className="about-text go-to">
									<h3 className="">Profile</h3>
									<h6 className="lead">
										A Lead UX &amp; UI designer based in
										Canada
									</h6>
									<p>
										I design and develop services for
										customers of all sizes, specializing in
										creating stylish, modern websites, web
										services and online stores. My passion
										is to design digital user experiences
										through the bold interface and
										meaningful interactions.
									</p>
									<div className="row about-list">
										<div className="col-md-6">
											<div className="media">
												<label>Birthday</label>
												<p>4th april 1998</p>
											</div>
											<div className="media">
												<label>Age</label>
												<p>22 Yr</p>
											</div>
											<div className="media">
												<label>Residence</label>
												<p>Canada</p>
											</div>
											<div className="media">
												<label>Address</label>
												<p>California, USA</p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="media">
												<label>E-mail</label>
												<p>info@domain.com</p>
											</div>
											<div className="media">
												<label>Phone</label>
												<p>820-885-3321</p>
											</div>
											<div className="media">
												<label>Skype</label>
												<p>skype.0404</p>
											</div>
											<div className="media">
												<label>Freelance</label>
												<p>Available</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-avatar">
									<img
										src="https://avatars.dicebear.com/api/bottts/:seed.svg"
										title=""
										alt=""
									/>
								</div>
							</div>
						</div>
						<ProfileCounter />
						<div className="mt-3">
							<Button
								variant="success"
								onClick={() => setShow(true)}
							>
								Edit
							</Button>
						</div>
					</div>
				</section>
			</div>
			<div>
				<Modal
					show={show}
					onHide={() => setShow(false)}
					centered
					backdrop="static"
					// animation= {true}
					// keyboard={false}
				>
					<Modal.Header closeButton>Form Grid</Modal.Header>
					{/* <h3 className="mt-5">Form Grid</h3> */}
					{/* <hr /> */}
					<Form
						className="d-grid gap-4"
						style={{ margin: "10px" }}
						onSubmit={alertHandler}
					>
						<Row>
							<Col>
								<Form.Control
									type="text"
									placeholder="Profile Name"
									onChange={(e) =>
										setProfileName(e.target.value)
									}
									required
								/>
							</Col>
							<Col>
								<Form.Control
									type="text"
									placeholder="Phone"
									onChange={(e) => setPhone(e.target.value)}
									required
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Control
									type="email"
									placeholder={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								{/* <InputGroup>
                <FormControl
                  placeholder= {email}
                  // aria-label="Your Awesome Mail"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputGroup.Text id="basic-addon2">
                  @gmail.com
                </InputGroup.Text>
              </InputGroup> */}
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Control
									type="text"
									placeholder="Birthday"
									onChange={(e) =>
										setBirthday(e.target.value)
									}
									required
								/>
							</Col>
							<Col>
								<Form.Control
									type="text"
									placeholder="Age"
									onChange={(e) => setAge(e.target.value)}
									required
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Control
									type="text"
									placeholder="Residence"
									onChange={(e) =>
										setResidence(e.target.value)
									}
									required
								/>
							</Col>
							<Col>
								<Form.Control
									type="text"
									placeholder="Address"
									onChange={(e) => setAddress(e.target.value)}
									required
								/>
							</Col>
							<Col>
								{/* <Form.Control type="" placeholder="Freelance" /> */}
								<Form.Select
									placeholder="Freelance"
									onChange={(e) =>
										setFreelance(e.target.value)
									}
									required
								>
									<option value="Available">Available</option>
									<option value="NotAvailable">
										NotAvailable
									</option>
								</Form.Select>
							</Col>
						</Row>
						<Row>
							<Col>
								<Button
									className="right-0"
									variant="success"
									type="submit"
								>
									Update
								</Button>
							</Col>
						</Row>
					</Form>
				</Modal>
			</div>
		</>
	);
};

export default ProfilePage;
