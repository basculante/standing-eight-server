import React from "react";

class Notes extends React.Component {
	render() {
		return (
			<form className="col s12">
				<div className="row">
					<div className="input-field col s12">
						<textarea id="textarea1" className="materialize-textarea" />
						<label>Notes</label>
						<button className="btn waves-effect waves-light right">Note</button>
					</div>
				</div>
			</form>
		);
	}
}

export default Notes;
