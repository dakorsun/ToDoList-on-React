import React from 'react';
import List from './List';


class Done extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			doneTasks: this.props.tasks.done,
			isDone: true
		}

		this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
		this.handleEditConfirm = this.handleEditConfirm.bind(this);
		this.liftUpUndoEvent = this.liftUpUndoEvent.bind(this);

	}

	handleDeleteEvent(target, task) {
		
		this.setState({
			doneTasks: this.props.tasks.remove(this.state.isDone, task)
		})

	}

	handleEditConfirm(target, taskObj, text){

		this.setState({
			doneTasks: this.props.tasks.refreshTaskValue(this.state.isDone, taskObj, text)
		})
	}

	liftUpUndoEvent(target, taskObj){

		this.props.liftUpDoEvent(this.state.isDone, taskObj) 
	}

	render() {

		return (
			<div>
				<div className="title">Done</div>
				<ul id="done" className="listDone">
					{this.state.doneTasks.map((task, i) => 
						<List 
							isDone={this.state.isDone}
							taskObj={this.state.doneTasks[i]}
							key={task.id}
							liftUpDeleteEvent={this.handleDeleteEvent}
							liftUpEditConfirm={this.handleEditConfirm}
							liftUpUndoEvent={this.liftUpUndoEvent}
							liftUpDoEvent={null}
						/>
					)}	
				</ul>
			</div>
		)
	}

}

export default Done;