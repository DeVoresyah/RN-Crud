import React, { Component } from 'react';
import { Container } from 'native-base';
import HeaderWithBack from '../components/HeaderWithBack';
import FormAdd from '../components/FormAdd';

export default class AddContact extends Component {
	render() {
		return (
			<Container>
				<HeaderWithBack navigation={this.props.navigation} title='Add New Contact' />
				<FormAdd navigation={this.props.navigation} />
			</Container>
		)
	}
}