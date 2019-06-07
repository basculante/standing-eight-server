import React from "react";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import HeavyBagLineGraph from "./graphs/HeavyBagLineGraph";
import JumpRopeLineGraph from "./graphs/JumpRopeLineGraph";
import RunLineGraph from "./graphs/RunLineGraph";


class Dashboard extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div className="container">
				<Tabs>
					<TabList>
						<Tab>Heavy Bag</Tab>
						<Tab>Jump Rope</Tab>
						<Tab>Running</Tab>
					</TabList>
					
					<TabPanel>
						<HeavyBagLineGraph user={this.props.user} />
					</TabPanel>
					<TabPanel>
						<JumpRopeLineGraph user={this.props.user} />
					</TabPanel>
					<TabPanel>
						<RunLineGraph user={this.props.user} />
					</TabPanel>
				</Tabs>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: ownProps.match.params.id
	};
};

export default connect(mapStateToProps)(Dashboard);
