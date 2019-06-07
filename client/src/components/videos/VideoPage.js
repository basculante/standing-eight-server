import React from "react";
import { connect } from "react-redux";
import "./VideoPage.css";
import {
	addFavoriteVideo,
	deleteFavoriteVideo,
	fetchFavoriteVideos
} from "../../actions/video";
import SweetAlert from "sweetalert2-react";
import Notes from "../Notes";

class VideoPage extends React.Component {
	state = {
		favorite: false,
		alert: false
	};

	componentDidMount() {
		this.props.fetchFavoriteVideos();
		!this.props.favoriteVideos.length
			? this.setState({ favorite: false })
			: this.setState({ favorite: true });
	}

	toggleFavorite() {
		const { id, title, thumbnail, url } = this.props.location.state;
		if (this.state.favorite === false) {
			this.props.addFavoriteVideo(id, title, thumbnail, url);
			this.setState({ favorite: true });
		} else {
			this.props.deleteFavoriteVideo(id);
			this.setState({ favorite: false });
		}
	}

	renderFavoriteBtn() {
		if (!this.props.auth) {
			return (
				<i
					className="heart-icon small material-icons right"
					id="favoriteicon"
					onClick={() => this.setState({ alert: true })}
				>
					favorite_border
					<SweetAlert
						show={this.state.alert}
						title="Login with Google"
						text="Please login with Google to use the dashboard."
						onConfirm={() => this.setState({ alert: false })}
					/>
				</i>
			);
		} else {
			return (
				<i
					className="heart-icon small material-icons right"
					id="favoriteicon"
					onClick={() => this.toggleFavorite()}
				>
					{this.state.favorite ? "favorite" : "favorite_border"}
				</i>
			);
		}
	}

	render() {
		const { title, url } = this.props.location.state;
		console.log(this.props.favoriteVideos);
		if (!this.props.favoriteVideos) {
			return <div>loading...</div>;
		} else {
			return (
				<div className="container">
					<div className="row">
						<div className="title col s12">
							<div>
								{title}
								{this.renderFavoriteBtn()}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="video-container">
							<iframe
								width="660"
								height="415"
								src={url}
								frameBorder="0"
								title="video"
								allowFullScreen
							/>
						</div>
						<Notes videoId={this.props.videoId} />
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		favoriteVideos: state.favoriteVideos.filter(
			favorite => favorite.videoId === ownProps.match.params.id
		),
		videoId: ownProps.match.params.id,
		auth: state.auth
	};
};

export default connect(
	mapStateToProps,
	{ addFavoriteVideo, deleteFavoriteVideo, fetchFavoriteVideos }
)(VideoPage);
