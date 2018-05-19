import React from 'react';
import './OpenButton.css';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class OpenButton extends React.Component{

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		};	


		handleClick(e){
			this.props.onClickOpenButton(e.target);
		}

	render() {

		return (
			<div
				onClick={this.handleClick}
				className='button'
			>
				<img 
					src="arrow.png" 
					alt=""
				/>
			</div>
		)
	};


	

}

export default OpenButton;