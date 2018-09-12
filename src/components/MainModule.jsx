import React, { Component } from 'react';
import SideMenuItem from './SideMenuItem';
import ModulesContainer from './ModulesContainer';
import FaqContainer from './FaqContainer';

import {data} from '../data';

export default class MainModule extends Component {
	constructor(props) {
    super(props);

    this.state = {
      openTabTitle: 'Modules'
    };
  }

	onClickTabItem = (title) => {
    this.setState({ openTabTitle: title });
  }

	render() {
		return (
			<div className='main-module'>
				<div className='side-menu'>
					<ul>
						<SideMenuItem title={'Modules'} onClick={this.onClickTabItem.bind(this,'Modules')} isOpen={'Modules' === this.state.openTabTitle}/>
						<SideMenuItem title={'FAQ'} onClick={this.onClickTabItem.bind(this,'FAQ')} isOpen={'FAQ' === this.state.openTabTitle}/>
					</ul>
				</div>
				<div className="content-section">
						{this.state.openTabTitle === 'FAQ' ? <FaqContainer questions={data.questions}/> : <ModulesContainer modules={data.modules}/>}
				</div>
			</div>
		)
	}
}