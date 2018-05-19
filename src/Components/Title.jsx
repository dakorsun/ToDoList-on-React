import React from 'react';

class Title extends React.Component {
	
	constructor(props){
		super(props);

		this.state = {
			taskValue : 'Write a new Task...'
		}

		this.handleAddButton = this.handleAddButton.bind(this);
	}

	handleAddButton(e){
		if (this.refs.input.value !== ''){
			this.props.liftUpAddEvent(e.target, this.refs.input.value);
		}else {
			console.log('Фу ты лентяй, придумай себе задание какоенить')
		}
	}

	render() {

		return (
				<div>
					<div className="title">
						Add a task
					</div>
					<div className='enter'>
						<input 
							type="text" 
							placeholder={this.state.taskValue}
							ref="input"

						/>
						<span 
							onClick={this.handleAddButton}
							id="addBtn" 
							className="addBtn"
						>Add</span>
					</div>
				</div>
		)
	}
}


export default Title;