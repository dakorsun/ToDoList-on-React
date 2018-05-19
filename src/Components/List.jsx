import React from 'react';
import Options from './Options'
import EditInput from './EditInput'

class List extends React.Component {

	constructor(props){
		super(props);

		this.handleOptionsAnimation = this.handleOptionsAnimation.bind(this);
		this.liftUpDeleteEvent = this.liftUpDeleteEvent.bind(this);
		this.handleEditEvent = this.handleEditEvent.bind(this);
		this.endEditing = this.endEditing.bind(this);
		this.liftUpDoEvent = this.liftUpDoEvent.bind(this);
		this.liftUpUndoEvent = this.liftUpUndoEvent.bind(this);

		this.state = {
				isOptionsOpened: false, 
				isOptionsClicked: false,
				isEditing: false,
			}
	}
	
	handleOptionsAnimation(target){

		while(target !== this) {

			if(target.className === 'button'){

				this.state.isOptionsOpened ? this.setState({
					isOptionsOpened: false
				}) : this.setState({
					isOptionsOpened: true		
				});

				this.setState({
					isOptionsClicked: true
				});

				break;
			}

			target = target.parentNode
		}

	}

	liftUpUndoEvent(target){
		let taskObj = this.props.taskObj;

		this.props.liftUpUndoEvent(target, taskObj);
	}

	liftUpDoEvent(target){
			let taskObj = this.props.taskObj;

			this.props.liftUpDoEvent(target, taskObj);
	}
	

	handleEditEvent(target, text){
		console.log('2')

		this.setState({
			isEditing: true,
			isOptionsOpened: false,
			isOptionsClicked: false
		})

		
	}

	endEditing(target, text){
		this.setState({
			isEditing: false
		})

		let taskObj = this.props.taskObj;
		this.props.liftUpEditConfirm(target, taskObj, text);
	}

	liftUpDeleteEvent(target){
		let taskObj = this.props.taskObj;

		this.props.liftUpDeleteEvent(target, taskObj);
	}

	render() {
		
		if(this.state.isEditing){
			console.log('2.5');
			return (
					<li>
						<EditInput 
								liftUpConfirm={this.endEditing}
								key={this.props.key}
								taskObj={this.props.taskObj}
						/>
					</li>
				)
		}else {
			let	isOptionsClicked = this.state.isOptionsClicked,
					isOptionsOpened = this.state.isOptionsOpened;

		return (
				<li>
					<span>{this.props.taskObj.name}</span>
					
					<Options 
										clickOptionsOpenButton={this.handleOptionsAnimation}
										className={isOptionsOpened ? 'options open' : isOptionsClicked ? 'options close' : 'options closed'}
										isDone={this.props.isDone}
										liftUpDeleteEvent={this.liftUpDeleteEvent}
										liftUpUndoEvent={this.liftUpUndoEvent}
										liftUpDoEvent={this.liftUpDoEvent}
										liftUpEditEvent={this.handleEditEvent}
									/>

				</li>
		)}

	}
};

export default List;