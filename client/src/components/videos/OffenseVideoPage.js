import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideos } from "../../actions/video";
import "./OffenseVideoPage.css";

class OffenseVideoPage extends React.Component {
	componentDidMount() {
		this.props.fetchVideos();
	}

	renderPunchingVideos(skill) {
		const punchingVideos = this.props.videos.filter(
			punching => punching.skill === "punching"
		);
		return (
			<div>
				<div>
					<h5>Punching</h5>
				</div>
				<div className="row">
					{punchingVideos.map(video => {
						return (
							<Link
								to={{
									pathname: `/video/${video.id}`,
									state: {
										title: video.title,
										id: video.id,
										url: video.url
									}
								}}
								key={video.id}
							>
								<div className="card small col s12 m6 l3">
									<div className="card-image">
										<img
											className="offense-thumbnail"
											src={video.thumbnail}
											alt="offense_thumbnail"
										/>
									</div>
									<div className="card-content">{video.title}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}

	renderFootworkVideos() {
		const footworkVideos = this.props.videos.filter(
			footwork => footwork.skill === "footwork"
		);
		return (
			<div>
				<div>
					<h5>Footwork</h5>
				</div>
				<div className="row">
					{footworkVideos.map(video => {
						return (
							<Link
								to={{
									pathname: `/video/${video.id}`,
									state: {
										title: video.title,
										id: video.id,
										url: video.url
									}
								}}
								key={video.id}
							>
								<div className="card small col s12 m6 l3">
									<div className="card-image">
										<img
											className="offense-thumbnail"
											src={video.thumbnail}
											alt="offense_thumbnail"
										/>
									</div>
									<div className="card-content">{video.title}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}

	renderCombosVideos() {
		const combosVideos = this.props.videos.filter(
			combos => combos.skill === "combos"
		);
		return (
			<div>
				<div>
					<h5>Combos</h5>
				</div>
				<div className="row">
					{combosVideos.map(video => {
						return (
							<Link
								to={{
									pathname: `/video/${video.id}`,
									state: {
										title: video.title,
										id: video.id,
										url: video.url
									}
								}}
								key={video.id}
							>
								<div className="card small col s12 m6 l3">
									<div className="card-image">
										<img
											className="offense-thumbnail"
											src={video.thumbnail}
											alt="offense_thumbnail"
										/>
									</div>
									<div className="card-content">{video.title}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}

	renderStanceVideos() {
		const stanceVideos = this.props.videos.filter(
			stance => stance.skill === "stance"
		);
		return (
			<div>
				<div>
					<h5>Stance</h5>
				</div>
				<div className="row">
					{stanceVideos.map(video => {
						return (
							<Link
								to={{
									pathname: `/video/${video.id}`,
									state: {
										title: video.title,
										id: video.id,
										url: video.url
									}
								}}
								key={video.id}
							>
								<div className="card small col s12 m6 l3">
									<div className="card-image">
										<img
											className="offense-thumbnail"
											src={video.thumbnail}
											alt="offense_thumbnail"
										/>
									</div>
									<div className="card-content">{video.title}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}

	render() {
		if (!this.props.videos) {
			return <div>loading</div>;
		} else {
			return (
				<div className="container">
					<div className="offense-title">
						<h5>Offense</h5>
					</div>
					<div>{this.renderPunchingVideos()}</div>
					<div>{this.renderFootworkVideos()}</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		videos: state.videos.offenseVideos
	};
};

export default connect(
	mapStateToProps,
	{ fetchVideos }
)(OffenseVideoPage);
