import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDefenseVideos, fetchOffenseVideos } from "../actions";
import Slider from "react-slick";
import "./VideosList.css";

class Videos extends Component {
	componentDidMount() {
		this.props.fetchDefenseVideos("boxing defense");
		this.props.fetchOffenseVideos("boxing offense");
	}

	render() {
		if (!this.props.defenseVideos || !this.props.offenseVideos) {
			return <div>...Loading</div>;
		} else {
			const renderedDefenseList = this.props.defenseVideos.map(video => {
				const videoSrc = `https://www.youtube.com/watch?v=${video.id.videoId}`;

				return (
					<div>
						<a className="video_thumbnail" href={videoSrc}>
							<img
								src={video.snippet.thumbnails.medium.url}
								alt="video_thumbnail"
							/>
						</a>
						<div className="video_titles">{video.snippet.title}</div>
					</div>
				);
			});
			const renderedOffenseList = this.props.offenseVideos.map(video => {
				const videoSrc = `https://www.youtube.com/watch?v=${video.id.videoId}`;

				return (
					<div>
						<a className="video_thumbnail" href={videoSrc}>
							<img
								src={video.snippet.thumbnails.medium.url}
								alt="video_thumbnail"
							/>
						</a>
						<div className="video_titles">{video.snippet.title}</div>
						<div className="favorite_icon"><a><i class="small material-icons">favorite_border</i></a></div>
					</div>
				);
			});
			var settings = {
				dots: true,
				infinite: false,
				speed: 400,
				slidesToShow: 3,
				slidesToScroll: 3,
				initialSlide: 0, 
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true
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
					<h5 className="video_section_title">Defense</h5>
					<Slider {...settings}>{renderedDefenseList}</Slider>
				</div>
				<div className="slider_container">
					<h5 className="video_section_title">Offense</h5>
					<Slider {...settings}>{renderedOffenseList}</Slider>
				</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		defenseVideos: state.defenseVideos,
		offenseVideos: state.offenseVideos
	};
};

export default connect(
	mapStateToProps,
	{ fetchDefenseVideos, fetchOffenseVideos }
)(Videos);
