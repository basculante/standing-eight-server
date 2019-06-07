import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRun, deleteRunEntry } from "../../actions/exercise";
import {
	FlexibleWidthXYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	LineMarkSeries,
	Hint
} from "react-vis";
import moment from "moment";
import SweetAlert from "sweetalert2-react";
import "./Graph.css";

class RunLineGraph extends React.Component {
	state = {
		value: null,
		delete: false,
		alert: false
	};

	_forgetValue = () => {
		this.setState({
			value: null
		});
	};

	_rememberValue = value => {
		this.setState({ value });
	};

	componentDidMount() {
		this.props.fetchRun();
	}

	renderDeleteBtn() {
		this.state.delete
			? this.setState({ delete: false })
			: this.setState({ delete: true });
	}

	deleteExercise(entryId) {
		this.props.deleteRunEntry(entryId);
	}

	renderEntryBtn() {
		if (!this.props.auth) {
			return (
				<div>
					<button
						className="add-btn waves-effect waves-light btn"
						onClick={() => this.setState({ alert: true })}
					>
						New Entry
					</button>
					<SweetAlert
						show={this.state.alert}
						title="Login with Google"
						text="Please login with Google to use the dashboard."
						onConfirm={() => this.setState({ alert: false })}
					/>
				</div>
			);
		} else {
			return (
				<Link to={`/runform/${this.props.user}`}>
					<button className="add-btn waves-effect waves-light btn">
						New Entry
					</button>
				</Link>
			);
		}
	}

	renderTable() {
		return (
			<table className="highlight">
				<thead>
					<tr>
						<th>Date</th>
						<th>Miles</th>
						<th>Time</th>
					</tr>
				</thead>

				{this.props.runTable.map((entry, index) => {
					if (!this.state.delete) {
						return (
							<tbody key={index}>
								<tr>
									<td>{moment(entry.date).format("MM-DD-YYYY")}</td>
									<td>{entry.miles}</td>
									<td>
										{entry.hours}:{entry.minutes === 0 ? "00" : entry.minutes}
									</td>
								</tr>
							</tbody>
						);
					} else {
						return (
							<tbody key={index}>
								<tr>
									<td>{moment(entry.date).format("MM-DD-YYYY")}</td>
									<td>{entry.miles}</td>
									<td>
										{entry.hours}:{entry.minutes}
									</td>
									<td>
										<button
											className="btn-floating btn-small waves-effect waves-light red"
											onClick={() => this.deleteExercise(entry._id)}
										>
											<i className="material-icons">remove</i>
										</button>
									</td>
								</tr>
							</tbody>
						);
					}
				})}
			</table>
		);
	}

	render() {
		const graphData =
			!this.props.runGraph || !this.props.runGraph.length
				? [{ x: 0, y: 0 }]
				: this.props.runGraph;

		const { value } = this.state;

		return (
			<div>
				<div>
					<h5>Running</h5>
					<FlexibleWidthXYPlot xType="time" height={250}>
						<HorizontalGridLines />
						<XAxis title="Date" />
						<YAxis title="Miles" />
						<LineMarkSeries
							data={graphData}
							onValueMouseOver={this._rememberValue}
							onValueMouseOut={this._forgetValue}
						/>
						{value ? <Hint value={value} /> : null}
					</FlexibleWidthXYPlot>
					<button
						className="delete-btn waves-effect waves-light btn red right"
						onClick={() => this.renderDeleteBtn()}
					>
						Delete Entry
					</button>
					{this.renderEntryBtn()}
				</div>
				<div>{this.renderTable()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		runGraph: state.run
			.sort(function(a, b) {
				return new Date(b.date) - new Date(a.date);
			})
			.map(function(data) {
				return {
					x: new Date(data.date),
					y: data.miles
				};
			}),
		runTable: state.run,
		auth: state.auth
	};
};

export default connect(
	mapStateToProps,
	{ fetchRun, deleteRunEntry }
)(RunLineGraph);
