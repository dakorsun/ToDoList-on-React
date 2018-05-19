import React from 'react';
import OpenButton from './OpenButton'

class Options extends React.Component{
	constructor(props) {
		super(props);

		this.optionsOpeningAnimate = this.optionsOpeningAnimate.bind(this);
		this.handleDoEvent = this.handleDoEvent.bind(this);
		this.handleUndoEvent = this.handleUndoEvent.bind(this);
		this.handleEditEvent = this.handleEditEvent.bind(this);
		this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
		

		this.state = {
			isArrowButtonOpened: false, 
			isArrowButtonClicked: false
		}
}

	handleDoEvent(e){
		this.props.liftUpDoEvent(e.target);
	};
	
	handleUndoEvent(e){
		this.props.liftUpUndoEvent(e.target);
	};
	
	handleEditEvent(e){
		console.log('1');

		this.props.liftUpEditEvent(e.target)

		};
	
	handleDeleteEvent(e){

		this.props.liftUpDeleteEvent(e.target);

		};

	optionsOpeningAnimate(target) {
		
		this.props.clickOptionsOpenButton(target);
	}

	render() {
		let isDone = this.props.isDone;

		return(
			<div className={this.props.className}>
				<OpenButton 
					onClickOpenButton={this.optionsOpeningAnimate}
					className='button'
				/>
				{isDone ? <div className="undone" onClick={this.handleUndoEvent}>Undo</div>
								: <div className="done" onClick={this.handleDoEvent}>Do</div>
				}
				<div className="edit" onClick={this.handleEditEvent}>Edit</div>
				<div className="delete" onClick={this.handleDeleteEvent}>Delete</div>
			</div>
		)

	};



	
};

export default Options