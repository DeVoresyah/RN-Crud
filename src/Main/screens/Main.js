import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import HeaderSection from '../components/HeaderSection';
import ContentSection from '../components/ContentSection';

export default class Main extends Component {

	render() {
		return (
			<Container>
				<HeaderSection navigation={this.props.navigation} />
				<ContentSection />
			</Container>
		)
	}
}