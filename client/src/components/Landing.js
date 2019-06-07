import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VideosList from "./videos/VideosList";
import Footer from "./Footer";
import "./Landing.css";

class Landing extends React.Component {
	render() {
		return (
			<div>
				<div className="title-div">
					<div className="landing-title">
						<h1>Standing-Eight!</h1>
						<h6>Learn boxing, track progress, and grow.</h6>
					</div>
				</div>
				<VideosList />
				<div className="dashboard-div">
					<div className="landing-title">
						<h1>Dashboard</h1>
						<h6>
							Track your boxing progress using the dashboard.
						</h6>
						<Link to={`/profile/${this.props.auth._id}`}>
							<button className="dashboard-btn waves-effect waves-light btn">
								Dashboard
							</button>
						</Link>
					</div>
				</div>
				<div className="program-div">
					<div className="landing-title">
						<h1>Boxing Programs</h1>
						<h6>Buy our boxing programs to help with your training.</h6>
						<Link to="/programs">
							<button className="dashboard-btn waves-effect waves-light btn">
								Purchase
							</button>
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps)(Landing);
