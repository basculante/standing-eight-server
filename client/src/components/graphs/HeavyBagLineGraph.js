import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHeavyBag } from "../../actions/exercise";
import {
	FlexibleWidthXYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	LineMarkSeries,
	Hint
} from "react-vis";
import moment from 'moment';

class LineGraph extends React.Component {
	state = {
		value: null
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
		this.props.fetchHeavyBag();
	}

	renderTable() {
		return (
			<table className="highlight">
				<thead>
					<tr>
						<th>Date</th>
						<th>Min/Round</th>
						<th>Rounds</th>
						<th>Total Time</th>
					</tr>
				</thead>

				{this.props.heavyBagTable.map((entry, index) => {
					return (
						<tbody key={index}>
							<tr>
								<td>{moment(entry.date).format('MM-DD-YYYY')}</td>
								<td>{entry.minRound}</td>
								<td>{entry.rounds}</td>
								<td>{entry.totalTime}</td>
							</tr>
						</tbody>
					);
				})}
			</table>
		);
	}

	render() {
		const data =
			!this.props.heavyBagGraph || !this.props.heavyBagGraph.length
				? [{ x: 0, y: 0 }]
				: this.props.heavyBagGraph;

		const { value } = this.state;

		return (
			<div>
				<div>
					<h5>Heavy Bag</h5>
					<FlexibleWidthXYPlot xType="time" height={250}>
						<HorizontalGridLines />
						<XAxis title="Date" />
						<YAxis title="Total Minutes" />
						<LineMarkSeries
							data={data}
							onValueMouseOver={this._rememberValue}
							onValueMouseOut={this._forgetValue}
						/>
						{value ? <Hint value={value} /> : null}
					</FlexibleWidthXYPlot>
					<Link to={`/profile/formentry/${this.props.user}`}>
						<button className="waves-effect waves-light btn right">
							New Entry
						</button>
					</Link>
				</div>
				<div>{this.renderTable()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		heavyBagGraph: state.heavyBag
			.sort(function(a, b) {
				return new Date(b.date) - new Date(a.date);
			})
			.map(function(data) {
				return {
					x: new Date(data.date),
					y: data.totalTime
				};
			}),
		heavyBagTable: state.heavyBag
	};
};

export default connect(
	mapStateToProps,
	{ fetchHeavyBag }
)(LineGraph);
