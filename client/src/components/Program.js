import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class Program extends React.Component {
	render() {
		return (
			<div className="container">
				<Tabs>
					<TabList>
						<Tab>Boxing</Tab>
						<Tab>Running</Tab>
					</TabList>

					<TabPanel>
						<div>
							<h5>Warm-Up</h5>
						</div>
						<table>
							<thead>
								<tr>
									<th>Round</th>
									<th>Workout</th>
									<th>Time</th>
									<th>Rest</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>1</td>
									<td>Jumprope</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jumprope</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Jumprope</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>4</td>
									<td>Shadowbox</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>5</td>
									<td>Shadowbox</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>6</td>
									<td>Shadowbox</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
							</tbody>
						</table>
						<div>
							<h5>Heavy Bag</h5>
						</div>
						<table>
							<thead>
								<tr>
									<th>Round</th>
									<th>Workout</th>
									<th>Time</th>
									<th>Rest</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>1</td>
									<td>Footwork</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jabs/Double Jabs</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>3</td>
									<td>1-2 Combo</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>4</td>
									<td>2-3 Combo</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>5</td>
									<td>Infighting</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>6</td>
									<td>Freestyle Speed</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>7</td>
									<td>2-3 Speed</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
								<tr>
									<td>8</td>
									<td>Freestyle Power</td>
									<td>3 min</td>
									<td>1 min</td>
								</tr>
							</tbody>
						</table>
					</TabPanel>
					<TabPanel>
						<div>
							<div>
								<h5>Program 1 (Basic)</h5>
							</div>
							<table>
								<thead>
									<tr>
										<th>Round</th>
										<th>Phase</th>
										<th>Time</th>
										<th>Heart Rate %</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>1</td>
										<td>Warm-Up</td>
										<td>5 min</td>
										<td>50-60%</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Basic</td>
										<td>10 min</td>
										<td>60-70%</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Work</td>
										<td>2 min</td>
										<td>70-80%</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Basic</td>
										<td>10 min</td>
										<td>60-70%</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Cool Down</td>
										<td>5 min</td>
										<td>50-60%</td>
									</tr>
								</tbody>
							</table>
							<div>
								<h5>Program 2 (Novice)</h5>
							</div>
							<table>
								<thead>
									<tr>
										<th>Round</th>
										<th>Phase</th>
										<th>Time</th>
										<th>Heart Rate %</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>1</td>
										<td>Warm-Up</td>
										<td>5 min</td>
										<td>50-60%</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Basic</td>
										<td>10 min</td>
										<td>60-70%</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Work</td>
										<td>20 min</td>
										<td>80-90%</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Cool Down</td>
										<td>5 min</td>
										<td>50-60%</td>
									</tr>
								</tbody>
							</table>
							<div>
								<h5>Program 3 (Intermediate)</h5>
							</div>
							<table>
								<thead>
									<tr>
										<th>Round</th>
										<th>Phase</th>
										<th>Time</th>
										<th>Heart Rate %</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>1</td>
										<td>Warm-Up</td>
										<td>5 min</td>
										<td>50-60%</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Basic</td>
										<td>20 min</td>
										<td>60-70%</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Work</td>
										<td>3 min</td>
										<td>80-90%</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Basic</td>
										<td>20 min</td>
										<td>60-70%</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Work</td>
										<td>3 min</td>
										<td>90%</td>
									</tr>
									<tr>
										<td>6</td>
										<td>Cool Down</td>
										<td>5 min</td>
										<td>50-60%</td>
									</tr>
								</tbody>
							</table>
							<div>
								<h5>Program 4 (Advanced)</h5>
							</div>
							<table>
								<thead>
									<tr>
										<th>Round</th>
										<th>Phase</th>
										<th>Time</th>
										<th>Heart Rate %</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>1</td>
										<td>Warm-Up</td>
										<td>5 min</td>
										<td>60%</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Work</td>
										<td>4 min</td>
										<td>80-90%</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Sprint</td>
										<td>1 min</td>
										<td>90-100%</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Recovery</td>
										<td>1 min</td>
										<td>Sit Down</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Cool Down</td>
										<td>5 min</td>
										<td>60-70%</td>
									</tr>
									<tr>
										<td>6</td>
										<td>Work</td>
										<td>4 min</td>
										<td>80-90%</td>
									</tr>
									<tr>
										<td>7</td>
										<td>Sprint</td>
										<td>1 min</td>
										<td>90-100%</td>
									</tr>
									<tr>
										<td>8</td>
										<td>Recovery</td>
										<td>1 min</td>
										<td>Sit Down</td>
									</tr>
									<tr>
										<td>9</td>
										<td>Work</td>
										<td>4 min</td>
										<td>80-90%</td>
									</tr>
									<tr>
										<td>10</td>
										<td>Sprint</td>
										<td>1 min</td>
										<td>90-100%</td>
									</tr>
									<tr>
										<td>11</td>
										<td>Recovery</td>
										<td>1 min</td>
										<td>Sit Down</td>
									</tr>
									<tr>
										<td>12</td>
										<td>Work</td>
										<td>4 min</td>
										<td>80-90%</td>
									</tr>
									<tr>
										<td>13</td>
										<td>Sprint</td>
										<td>1 min</td>
										<td>90-100%</td>
									</tr>
									<tr>
										<td>14</td>
										<td>Recovery</td>
										<td>1 min</td>
										<td>Sit Down</td>
									</tr>
								</tbody>
							</table>
						</div>
					</TabPanel>
				</Tabs>
			</div>
		);
	}
}

export default Program;
