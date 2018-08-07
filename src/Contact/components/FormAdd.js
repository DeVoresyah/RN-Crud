import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Icon, Text } from 'native-base';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';

export default class FormAdd extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			phone: ''
		}
	}

	validateEmail = (email) => {
		const regex = /^[a-z._-]+@[a-z.-]+\.[a-z]{2,4}$/;

		if (email == "") {
			return false
		} else {
			return regex.test(email);
		}
	}

	validatePhone = (phone) => {
		const regex = /^\+?[0-9]*$/;
		
		if (phone == "") {
			return false
		} else {
			return regex.test(phone);
		}
	}

	formSubmit = () => {
		const vm = this;

		if (this.state.name == "") {
			alert('Please enter contact name!')
		} else if (this.validateEmail(this.state.email) == false) {
			alert('Please enter a valid email!')
		} else if (this.validatePhone(this.state.phone) == false) {
			alert('Please enter a valid phone number!')
		} else {
			axios.post('http://192.168.0.27:3000/contact/add', vm.state)
			.then(function(response) {
				const data = response.data;

				alert(data.msg);
				vm.props.navigation.dispatch(
					StackActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({routeName: 'Contact'})]
					})
				)
			})
			.catch(function(err) {
				alert(err)
			})
		}
	}

	render() {
		return (
			<Content>
				<Form style={styles.formOuter}>
					<Item floatingLabel style={styles.formInput}>
						<Label>Name</Label>
						<Input
						onChangeText={(name) => this.setState({name})}
						value={this.state.name}
						/>
					</Item>
					<Item floatingLabel style={styles.formInput}>
						<Label>Email</Label>
						<Input
						onChangeText={(email) => this.setState({email})}
						value={this.state.email}
						/>
					</Item>
					<Item floatingLabel style={styles.formInput}>
						<Label>Phone</Label>
						<Input
						onChangeText={(phone) => this.setState({phone})}
						value={this.state.phone}
						/>
					</Item>
					<Button block primary iconLeft style={styles.submitBtn} onPress={this.formSubmit.bind(this)}>
						<Icon name='add' />
						<Text>Add</Text>
					</Button>
				</Form>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	formOuter: {
		flex: 1,
		padding: 8
	},
	formInput: {
		marginLeft: 0
	},
	submitBtn: {
		marginTop: 20
	}
});