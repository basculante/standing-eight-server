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
			return <div>Loading...</div>;
		} else {
			const OffenseVideos = this.props.videos.offenseVideos.map(video => {
				return (
					<div key={video.id}>
						<Link
							to={{
								pathname: `/video/${video.id}`,
								state: {
									title: video.title,
									description: video.description,
									id: video.id,
									url: video.url,
									thumbnail: video.thumbnail
								}
							}}
							className="thumbnail_container"
						>
							<img
								className="video_thumbnail"
								src={video.thumbnail}
								alt="video_thumbnail"
							/>
						</Link>
						<div className="video_titles">{video.title}</div>
					</div>
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
						<h5 className="video_section_title">Offense</h5>
						<Slider {...settings}>{OffenseVideos}</Slider>
					</div>
					<div className="slider_container">
						<h5 className="video_section_title">Defense</h5>
						<Slider {...settings} />
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
