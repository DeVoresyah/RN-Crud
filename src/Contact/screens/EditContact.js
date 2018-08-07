import React, { Component } from 'react';
import { Container } from 'native-base';
import HeaderWithBack from '../components/HeaderWithBack';
import FormUpdate from '../components/FormUpdate';

export default class EditContact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contact: this.props.navigation.state.params
		}
	}

	render() {
		return (
			<Container>
				<HeaderWithBack navigation={this.props.navigation} title='Edit Contact' />
				<FormUpdate navigation={this.props.navigation} data={this.state.contact} />
			</Container>
		)
	}
}