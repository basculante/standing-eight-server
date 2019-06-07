import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideos } from "../../actions/video";
import Slider from "react-slick";
import "./VideosList.css";

class Videos extends Component {
	componentDidMount() {
		this.props.fetchVideos();
	}

	render() {
		if (!this.props.videos.offenseVideos) {
			console.log(this.props.videos.offenseVideos);
			return <div>Loading...</div>;
		} else {
			const OffenseVideos = this.props.videos.offenseVideos.map(video => {
				return (
					<Link
						to={{
							pathname: `/video/${video.id}`,
							state: {
								title: video.title,
								id: video.id,
								url: video.url,
								thumbnail: video.thumbnail
							}
						}}
						key={video.id}
					>
						<div className="card small">
							<div className="card-image">
								<img
									className="video_thumbnail"
									src={video.thumbnail}
									alt="video_thumbnail"
								/>
							</div>
							<div className="card-content">{video.title}</div>
						</div>
					</Link>
				);
			});

			const DefenseVideos = this.props.videos.defenseVideos.map(video => {
				return (
					<Link
						to={{
							pathname: `/video/${video.id}`,
							state: {
								title: video.title,
								id: video.id,
								url: video.url,
								thumbnail: video.thumbnail
							}
						}}
						key={video.id}
					>
						<div className="card small">
							<div className="card-image">
								<img
									className="video_thumbnail"
									src={video.thumbnail}
									alt="video_thumbnail"
								/>
							</div>
							<div className="card-content">{video.title}</div>
						</div>
					</Link>
				);
			});

			var settings = {
				infinite: false,
				centerPadding: "0px",
				speed: 400,
				slidesToShow: 3,
				slidesToScroll: 3,
				initialSlide: 0,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							initialSlide: 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			};
			return (
				<div>
					<div className="slider_container">
						<h1 className="video_section_title">Videos</h1>
						<h6 className="video_section_title">
							Learn new boxing skills and take notes.
						</h6>
						<h5 className="video_section_title">
							<Link to="/offensevideos">Offense</Link>
						</h5>
						<Slider {...settings}>{OffenseVideos}</Slider>
					</div>
					<div className="slider_container">
						<h5 className="video_section_title">
							<Link to="/defensevideos">Defense</Link>
						</h5>
						<Slider {...settings}>{DefenseVideos}</Slider>
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		authId: state.auth,
		videos: state.videos
	};
};

export default connect(
	mapStateToProps,
	{
		fetchVideos
	}
)(Videos);
