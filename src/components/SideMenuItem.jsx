import React, { Component } from 'react';


export default class SideMenuItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

	render() {
		return (
			<li onClick={this.props.onClick} className={this.props.isOpen ? 'selected' : ''}>
				<span>{this.props.title}</span>
				<i className="fa fa-angle-right" aria-hidden="true"></i>
			</li>
		)
	}
}