import React from "react";
const jumbotron = () => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4 font-weight-normal">A Warm Welcome</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec blandit iaculis nulla a pretium. Sed varius felis eu
					lorem rhoncus aliquet. Aliquam erat volutpat. Vestibulum a
					sem quis libero semper faucibus quis vitae purus.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</p>
			</div>
		</div>
	);
};
export default jumbotron;
