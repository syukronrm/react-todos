import React from 'react';

export default class TodosListHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th width="50%">Task</th>
					<th width="50%">Action</th>
				</tr>
			</thead>
		);
	}
}