import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addRunEntry } from "../../actions/exercise";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import "react-widgets/dist/css/react-widgets.css";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import "./ExerciseForm.css";

Moment.locale("en");
momentLocalizer();

class RunForm extends React.Component {
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
		const { hours, minutes, miles, date } = formValues;
		this.props.addRunEntry(hours, minutes, miles, date, this.props.user);
	};

	render() {
		return (
			<div className="container">
				<form
					onSubmit={this.props.handleSubmit(this.onSubmit)}
					className="form-field"
				>
					<label>Enter Run Time</label>
					<div className="row">
						<div className="col s3 m3 l2">
							<Field name="hours" component={this.renderTimeInput} label="Hr" />
						</div>
						<div className="col s3 m3 l2">
							<Field
								name="minutes"
								component={this.renderTimeInput}
								label="Min"
							/>
						</div>
					</div>
					<Field
						name="miles"
						component={this.renderInput}
						label="Enter Distance (Miles)"
					/>
					<Field
						name="date"
						showTime={false}
						component={this.renderDateTimePicker}
					/>
					<button className="submit-button teal btn-flat white-text right">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

const validate = formValues => {
	const errors = {};

	if (!formValues.hours || !formValues.minutes) {
		errors.hours = "You must enter run time.";
	}

	if (!formValues.miles) {
		errors.miles = "You must enter distance in miles.";
	}

	if (!formValues.date) {
		errors.date = "You must enter the date.";
	}

	return errors;
};

const formWrapped = reduxForm({
	form: "exerciseForm",
	touchOnBlur: false,
	validate
})(RunForm);

export default connect(
	null,
	{ addRunEntry }
)(formWrapped);
