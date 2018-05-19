import React from 'react';
import SubmitButton from './SubmitButton';
import shortid from 'shortid';

class EditInput extends React.Component{

	constructor(props){
		super(props);

		this.liftUpConfirm = this.liftUpConfirm.bind(this);

		this.state = {
			textValue: ''
		};

	}

	setTextValue(){
		let key = this.props.key
		this.setState({
			textValue: this.refs.key.value
		});
	}

	liftUpConfirm(target){
		this.props.liftUpConfirm(target, this.state.textValue);
	}

	render(){

		return(
			<li>
				<textarea
					className='task-edit-textarea'
					ref={this.props.ref}
					onChange={this.setTextValue}
					default={this.props.taskObj.name}
				/>
				<SubmitButton 
					liftUpConfirm={this.liftUpConfirm}
				/>
			</li>
			)
	}

};


export default EditInput;
