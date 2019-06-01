import React from "react";
import { connect } from "react-redux";
import "./VideoPage.css";
import {
	addFavoriteVideo,
	deleteFavoriteVideo,
	fetchFavoriteVideos
} from "../../actions/video";
import Notes from "../Notes";

class VideoPage extends React.Component {
	state = {
		favorite: false
	};

	componentDidMount() {
		this.props.fetchFavoriteVideos();
		!this.props.favoriteVideos || !this.props.favoriteVideos.length
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
								<i
									className="small material-icons right"
									id="favoriteicon"
									onClick={() => this.toggleFavorite()}
								>
									{this.state.favorite ? "favorite" : "favorite_border"}
								</i>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<div className="video-container">
								<iframe
									src={url}
									frameBorder="0"
									title="video"
									allowFullScreen
								/>
							</div>
						</div>
						<Notes />
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
		)
	};
};

export default connect(
	mapStateToProps,
	{ addFavoriteVideo, deleteFavoriteVideo, fetchFavoriteVideos }
)(VideoPage);
