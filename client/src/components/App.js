import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const Videos = () => <h2>Videos</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" component={Landing} exact />
					<Route path="/profile" component={Dashboard} exact />
					<Route path="/videos" component={Videos} exact />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
