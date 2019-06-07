import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideos } from "../../actions/video";
import "./OffenseVideoPage.css";

class OffenseVideoPage extends React.Component {
	componentDidMount() {
		this.props.fetchVideos();
	}

	renderSlippingVideos(skill) {
		const slippingVideos = this.props.videos.filter(
			slipping => slipping.skill === "slipping"
		);
		return (
			<div>
				<div>
					<h5>Slipping</h5>
				</div>
				<div className="row">
					{slippingVideos.map(video => {
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

	renderParryVideos() {
		const parryVideos = this.props.videos.filter(
			parry => parry.skill === "parry"
		);
		return (
			<div>
				<div>
					<h5>Parry</h5>
				</div>
				<div className="row">
					{parryVideos.map(video => {
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

	renderCounterVideos() {
		const counterVideos = this.props.videos.filter(
			counter => counter.skill === "counter"
		);
		return (
			<div>
				<div>
					<h5>Counter</h5>
				</div>
				<div className="row">
					{counterVideos.map(video => {
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
						<h5>Defense</h5>
					</div>
					<div>{this.renderSlippingVideos()}</div>
					<div>{this.renderParryVideos()}</div>
					<div>{this.renderFootworkVideos()}</div>
					<div>{this.renderCounterVideos()}</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		videos: state.videos.defenseVideos
	};
};

export default connect(
	mapStateToProps,
	{ fetchVideos }
)(OffenseVideoPage);
