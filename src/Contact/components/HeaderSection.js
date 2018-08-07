import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Button, Icon, Text } from 'native-base';

export default class HeaderSection extends Component {
	render() {
		return (
			<Header>
				<Left>
					<Button transparent onPress={() => this.props.navigation.openDrawer()}>
						<Icon name='menu' />
					</Button>
				</Left>
				<Body>
					<Title>Contact</Title>
				</Body>
				<Right>
					<Button transparent onPress={() => this.props.navigation.navigate('AddContact')}>
						<Icon name='add' />
					</Button>
				</Right>
			</Header>
		)
	}
}