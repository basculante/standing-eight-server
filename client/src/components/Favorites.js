import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFavoriteVideos } from "../actions/video";
import "./Favorites.css";

class Favorites extends React.Component {
	componentDidMount() {
		this.props.fetchFavoriteVideos();
	}

	render() {
		return (
			<div className="container">
				<div className="favorite-title">
					<h3>Favorites</h3>
				</div>
				<div className="row">
					{this.props.favorites.map(favorite => {
						return (
							<Link
								to={{
									pathname: `/video/${favorite.videoId}`,
									state: {
										title: favorite.title,
										id: favorite.videoId,
										url: favorite.source
									}
								}}
								key={favorite.videoId}
							>
								<div className="card small col s12 m6 l3">
									<div className="card-image">
										<img
											className="favorite-thumbnail"
											src={favorite.thumbnailUrl}
											alt="favorite_thumbnail"
										/>
									</div>
									<div className="card-content">{favorite.title}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		favorites: state.favoriteVideos
	};
};

export default connect(
	mapStateToProps,
	{ fetchFavoriteVideos }
)(Favorites);
