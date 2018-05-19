import React from 'react';

class SubmitButton extends React.Component{

	constructor(props){
		super(props);

		
		this.handleConfirm = this.handleConfirm.bind(this);

	}

	handleConfirm(e){
		this.props.liftUpConfirm(e.target);
	}

	render(){
		return(
			<div 
				className="ok-button"
				onClick={this.handleConfirm}
			>OK</div>
			)
	}

}

export default SubmitButton;
