import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Content, Text } from 'native-base';

export default class ContentSection extends Component {
	render() {
		return (
			<Content>
				<View style={styles.mainWrapper}>
					<Text style={styles.mainContent}>Welcome to Dashboard!</Text>
				</View>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	mainWrapper: {
		paddingTop: 250,
		justifyContent: 'center',
		alignItems: 'center'
	},
	mainContent: {
		fontSize: 14,
		color: '#424242'
	}
});