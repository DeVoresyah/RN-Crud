import React, { Component } from 'react';
import { Container } from 'native-base';
import HeaderSection from '../components/HeaderSection';
import ContentSection from '../components/ContentSection';

export default class Contact extends Component {
	render() {
		return (
			<Container>
				<HeaderSection navigation={this.props.navigation} />
				<ContentSection navigation={this.props.navigation} />
			</Container>
		)
	}
}