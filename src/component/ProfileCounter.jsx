import { useEffect, useState } from "react";

const ProfileCounter = () => {
	const [clients, setClients] = useState(0);
	const [project, setProject] = useState(0);
	const [photo, setPhoto] = useState(0);
	const [telephonic, setTelephonic] = useState(0);

	useEffect(() => {
		if (clients != 500) setClients(clients + 1);
		if (project != 850) setProject(project + 1);
		if (photo != 1199) setPhoto(photo + 1);
		if (telephonic != 745) setTelephonic(telephonic + 1);
	});

	return (
		<>
			<div className="counter">
				<div className="row">
					<div className="col-6 col-lg-3">
						<div className="count-data text-center">
							<h6
								className="count h2"
								data-to="500"
								data-speed="500"
							>
								{clients}
							</h6>
							<p className="m-0px font-w-600">Happy Clients</p>
						</div>
					</div>
					<div className="col-6 col-lg-3">
						<div className="count-data text-center">
							<h6
								className="count h2"
								data-to="150"
								data-speed="150"
							>
								{project}
							</h6>
							<p className="m-0px font-w-600">
								Project Completed
							</p>
						</div>
					</div>
					<div className="col-6 col-lg-3">
						<div className="count-data text-center">
							<h6
								className="count h2"
								data-to="850"
								data-speed="850"
							>
								{photo}
							</h6>
							<p className="m-0px font-w-600">Photo Capture</p>
						</div>
					</div>
					<div className="col-6 col-lg-3">
						<div className="count-data text-center">
							<h6
								className="count h2"
								data-to="190"
								data-speed="190"
							>
								{telephonic}
							</h6>
							<p className="m-0px font-w-600">Telephonic Talk</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileCounter;
