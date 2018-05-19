import React from 'react';
import Title from './Components/Title';
import ToDo from './Components/ToDo';
import Done from './Components/Done';
import tasks from './tasks'

import './index.css';

class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			tasks: tasks,
			doneTasks: tasks.undone,
			undoneTasks: tasks.undone
		};

		this.handleAddEvent = this.handleAddEvent.bind(this);
		this.handleDoEvent = this.handleDoEvent.bind(this);
		this.handleUndoEvent = this.handleUndoEvent.bind(this);
	}

	handleAddEvent(target, value){
		let arr = this.state.tasks;

		this.setState({
			undoneTasks: arr.addFromInput(false, value)
		});
	}

	handleDoEvent(isDone, taskObj){

		this.setState({
			tasks: this.state.tasks.toogleStatus(isDone, taskObj, this.state.tasks)
		});
	}

	handleUndoEvent(isDone, taskObj){

		this.setState({
			tasks: this.state.tasks.toogleStatus(isDone, taskObj, this.state.tasks)
		});
	}

	render() {

		return (
				<div id='toDoBlock'>	
					<Title 
						liftUpAddEvent={this.handleAddEvent}
					/>
					<ToDo 
						tasks={this.state.tasks}
						liftUpDoEvent={this.handleDoEvent}
					/>
					<Done
						tasks={this.state.tasks}
						liftUpDoEvent={this.handleUndoEvent}
					/>
				</div>
		);

	}

	

}

export default App;