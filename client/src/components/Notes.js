import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { fetchNote, addNote, deleteNote } from "../actions/note";
import SweetAlert from "sweetalert2-react";
import "./Note.css";

class Note extends React.Component {
	state = {
		delete: false,
		alert: false
	};

	componentDidMount() {
		this.props.fetchNote();
	}

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="red-text">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInputAuth = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "red-text" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "red-text" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
			</div>
		);
	};

	onSubmit = formValues => {
		const { notes } = formValues;
		const videoId = this.props.videoId;
		this.props.addNote(notes, videoId);
		this.props.reset();
	};

	deleteNote(entryId) {
		this.props.deleteNote(entryId);
	}

	renderDeleteBtn() {
		this.state.delete
			? this.setState({ delete: false })
			: this.setState({ delete: true });
	}

	renderNoteEntries() {
		return this.props.notes.map((note, index) => {
			if (!this.state.delete) {
				return (
					<table className="highlight" key={index}>
						<tbody>
							<tr>
								<td>{note.note}</td>
							</tr>
						</tbody>
					</table>
				);
			} else {
				return (
					<table className="highlight" key={index}>
						<tbody>
							<tr>
								<td>{note.note}</td>
								<td>
									<button
										className="btn-floating btn-small waves-effect waves-light red right"
										onClick={() => this.deleteNote(note._id)}
									>
										<i className="material-icons">remove</i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				);
			}
		});
	}

	render() {
		if (!this.props.auth) {
			return (
				<div>
					<div>
						<form
							onSubmit={this.props.handleSubmit(this.onSubmit)}
							className="form-field"
						>
							<Field
								name="notes"
								component={this.renderInput}
								label="Enter Note"
							/>
							<button
								className="submit-button waves-effect waves-light btn left"
								onClick={() => this.setState({ alert: true })}
							>
								Submit
							</button>
							<SweetAlert
								show={this.state.alert}
								title="Login with Google"
								text="Please login with Google to add notes."
								onConfirm={() => this.setState({ alert: false })}
							/>
						</form>
						<button
							className="submit-button waves-effect waves-light btn red right"
							onClick={() => this.renderDeleteBtn()}
						>
							Delete
						</button>
					</div>
					<div className="note-entries">{this.renderNoteEntries()}</div>
				</div>
			);
		} else {
			return (
				<div>
					<div>
						<form
							onSubmit={this.props.handleSubmit(this.onSubmit)}
							className="form-field"
						>
							<Field
								name="notes"
								component={this.renderInputAuth}
								label="Enter Note"
							/>
							<button className="submit-button waves-effect waves-light btn left">
								Submit
							</button>
						</form>
						<button
							className="submit-button waves-effect waves-light btn red right"
							onClick={() => this.renderDeleteBtn()}
						>
							Delete
						</button>
					</div>
					<div className="note-entries">{this.renderNoteEntries()}</div>
				</div>
			);
		}
	}
}

const validate = formValues => {
	const errors = {};

	if (!formValues.notes) {
		errors.notes = "Please enter a note first.";
	}

	return errors;
};

const mapStateToProps = (state, ownProps) => {
	return {
		notes: state.note.filter(notes => notes.videoId === ownProps.videoId),
		videoId: ownProps.videoId,
		auth: state.auth
	};
};

const formWrapped = reduxForm({
	form: "exerciseForm",
	touchOnBlur: false,
	validate
})(Note);

export default connect(
	mapStateToProps,
	{ addNote, deleteNote, fetchNote }
)(formWrapped);
