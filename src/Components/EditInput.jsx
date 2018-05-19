import React from 'react';
import SubmitButton from './SubmitButton';

class EditInput extends React.Component{

	constructor(props){
		super(props);

		this.liftUpConfirm = this.liftUpConfirm.bind(this);
		this.setTextValue = this.setTextValue.bind(this);

		this.state = {
			textValue: ''
		};

	}

	setTextValue(){
		this.setState({
			textValue: this.refs.editValue.value
		});
	}

	liftUpConfirm(target){
		this.props.liftUpConfirm(target, this.state.textValue);
	}

	render(){

		return(
			<div>
				<input
					type="text"
					className='task-edit-input'
					ref="editValue"
					onChange={this.setTextValue}
					default={this.props.taskObj.name}
				/>
				<SubmitButton 
					liftUpConfirm={this.liftUpConfirm}
				/>
			</div>
			)
	}

};


export default EditInput;
