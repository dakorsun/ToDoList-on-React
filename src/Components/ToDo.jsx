import React from 'react';
import List from './List';


class ToDo extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			undoneTasks: this.props.tasks.undone,
			isDone: false
		}

		this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
		this.handleEditConfirm = this.handleEditConfirm.bind(this);
		this.liftUpDoEvent = this.liftUpDoEvent.bind(this);
	
	}

	handleDeleteEvent(target, task) {
		
		this.setState({
			undoneTasks: this.props.tasks.remove(this.state.isDone, task)
		})

	}

	handleEditConfirm(target, taskObj, text){

		this.setState({
			undoneTasks: this.props.tasks.refreshTaskValue(this.state.isDone, taskObj, text)
		})
	}

	liftUpDoEvent(target, taskObj){

		this.props.liftUpDoEvent(this.state.isDone, taskObj) 
	}

	render() {

		return (
			<div>
				<div className="title">To Do</div>
				<ul id="toDo" className="listToDo">
					{this.state.undoneTasks.map((task, i) => 
						<List  
							isDone={this.state.isDone}
							taskObj={this.state.undoneTasks[i]}
							key={task.id}
							liftUpDeleteEvent={this.handleDeleteEvent}
							liftUpEditConfirm={this.handleEditConfirm}
							liftUpDoEvent={this.liftUpDoEvent}
							liftUpUndoEvent={null}
						/>
					)}				
				</ul>
			</div>
		)
	}

}

export default ToDo;