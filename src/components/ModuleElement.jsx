import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class ModuleElement extends Component {
	constructor(props) {
    super(props);

		this.state = {
			videoModalVisible : false,
			audioModalVisible : false,
			colorState: 0
    }
  }

	openModal(name) {
		name == 'video' ? this.setState({'videoModalVisible' : true}) : this.setState({'audioModalVisible' : true})
	}

	closeModal(name) {
		name == 'video' ? this.setState({'videoModalVisible' : false}) : this.setState({'audioModalVisible' : false})
	}

	changeColorState(color) {
		color == 'red' ? this.setState({'colorState' : 1}) : color == 'green' ? this.setState({'colorState' : 2}) : console.log('error');
	}

	render() {

		const photo = require(`../img/${this.props.img}`);
		return (
			
			<div className={this.state.colorState == 0 ? 'module-element' : this.state.colorState == '1' ? 'module-element red-color' : 'module-element green-color'}>
				<div className="head-part">
					<div className="img"><img src={photo} alt=""/></div>
					<div className="content">
						<div className="caption">{this.props.caption}</div>
						<div className="description">{this.props.description}</div>
					</div>
				</div>
				<Modal 
						visible={this.state.videoModalVisible}
						width="400"
						height="300"
						effect="fadeInUp"
						onClickAway={() => this.closeModal('video')}
				>
						<div className='modal-wrapper' >
							<h1>Modal</h1>
							<p>Are you really want to do smth?</p>
							<div className="buttons">
								<a href="javascript:void(0);" onClick={() => {this.closeModal('video'); this.changeColorState('green')}}>Yes</a>
								<a href="javascript:void(0);" onClick={() => {this.closeModal('video'); this.changeColorState('red')}}>No</a>
							</div>
								
						</div>
				</Modal>
				<Modal 
						visible={this.state.audioModalVisible}
						width="400"
						height="300"
						effect="fadeInUp"
						onClickAway={() => this.closeModal('audio')}
				>
						<div className='modal-wrapper' >
							<h1>Modal</h1>
							<p>Are you really want to do smth?</p>
							<div className="buttons">
								<a href="javascript:void(0);" onClick={() => {this.closeModal('audio'); this.changeColorState('green')}}>Yes</a>
								<a href="javascript:void(0);" onClick={() => {this.closeModal('audio'); this.changeColorState('red')}}>No</a>
							</div>
								
						</div>
				</Modal>
				<div className="buttons">
					<div className="button button-video" onClick={() => this.openModal('video')}>Video</div>
					<div className="button button-audio" onClick={() => this.openModal('audio')}>Audio</div>
				</div>
				
			</div>
		)
	}
}