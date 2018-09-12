import React, { Component } from 'react';

export default class ModuleElement extends Component {
	constructor(props) {
    super(props);

		this.state = {
			isOpen: false
    }
  }

	toggleOpen = () => {
		this.setState({'isOpen' : !this.state.isOpen})
	}

	render() {

		return (
			
			<div className={this.state.isOpen ? 'question-element opened' : 'question-element'}>
				<div className="title" onClick={this.toggleOpen}>
					<h3>{this.props.question}</h3>
					{this.state.isOpen ? <i className="fa fa-angle-down" aria-hidden="true"></i> : <i className="fa fa-angle-right" aria-hidden="true"></i>}
				</div>
				<div className="text">{this.props.answer}</div>
			</div>
		)
	}
}