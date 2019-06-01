import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addExerciseRound } from "../../actions/exercise";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import "react-widgets/dist/css/react-widgets.css";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import "./ExerciseForm.css";

Moment.locale("en");
momentLocalizer();

class ExerciseForm extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="red-text">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "red-text" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	renderTimeInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "red-text" : ""}`;
		return (
			<div className={className}>
				<input {...input} autoComplete="off" />
				<label>{label}</label>
				{this.renderError(meta)}
			</div>
		);
	};

	renderDateTimePicker = ({ input: { onChange, value }, showTime, meta }) => {
		return (
			<div>
				<label>Enter Date</label>
				<DateTimePicker
					onChange={onChange}
					format="DD MMM YYYY"
					time={false}
					value={!value ? null : new Date(value)}
				/>

				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = formValues => {
		const { minutes, seconds, rounds, date } = formValues;
		this.props.addExerciseRound(minutes, seconds, rounds, date, this.props.user);
	};

	render() {
		console.log(this.props.user)
		return (
			<div className="container">
				<form
					onSubmit={this.props.handleSubmit(this.onSubmit)}
					className="form-field"
				>
					<label>Enter Minutes Per Round</label>
					<div className="row">
						<div className="col s3 m3 l2">
							<Field
								name="minutes"
								component={this.renderTimeInput}
								label="Min"
							/>
						</div>
						<div className="col s3 m3 l2">
							<Field
								name="seconds"
								component={this.renderTimeInput}
								label="Sec"
							/>
						</div>
					</div>
					<Field
						name="rounds"
						component={this.renderInput}
						label="Enter Number of Rounds"
					/>
					<Field
						name="date"
						showTime={false}
						component={this.renderDateTimePicker}
					/>
					<button className="submit-button teal btn-flat white-text right">Submit</button>
				</form>
			</div>
		);
	}
}

const validate = formValues => {
	const errors = {};

	if (!formValues.minutes || !formValues.seconds) {
		errors.minutes = "You must enter minutes per round.";
	}

	if (!formValues.rounds) {
		errors.rounds = "You must enter the number of rounds.";
	}

	if (!formValues.date) {
		errors.date = "You must enter the date.";
	}

	return errors;
};

const mapStateToProps = (state, ownProps) => {
	return {
		user: ownProps.match.params.id
	}
}

const formWrapped = reduxForm({
	form: "exerciseForm",
	touchOnBlur: false,
	validate
})(ExerciseForm);

export default connect(
	mapStateToProps,
	{ addExerciseRound }
)(formWrapped);
