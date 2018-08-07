import React, { Component } from 'react';
import { Alert, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, List, ListItem, Button, Icon, Body, Text } from 'native-base';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';

class Showlist extends Component {

	deleteContact = (id) => {
		const vm = this;

		axios.delete('http://192.168.0.27:3000/contact/delete/'+id)
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

	showAlert = (id, name) => {
		const vm = this;

		Alert.alert(
			'Delete Confirmation',
			'Are you sure want to delete "'+name+'" from contact?',
			[
				{text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel'},
				{text: 'Delete', onPress: () => this.deleteContact(id)},
			]
		)
	}

	render() {
		let contactList = this.props.list;

		if (contactList.length === 0) {
			return (
				<View style={{justifyContent:'center', alignItems:'center', paddingTop:250}}>
					<Text style={styles.emptyText}>No Data Available</Text>
				</View>
			)
		} else {
			return (
				<List
				dataArray={contactList}
				renderRow={(item) => 
					<ListItem style={styles.listItem}>
						<TouchableOpacity
						onPress={() => this.props.navigation.navigate('EditContact', item)}
						onLongPress={() => this.showAlert(item.id, item.name)}
						activeOpacity={0.5}>
							<Body>
								<Text>{item.name}</Text>
								<Text note numberOfLines={1}>{item.phone}</Text>
							</Body>
						</TouchableOpacity>
					</ListItem>
				}>
				</List>
			)
		}
	}
}

export default class ContentSection extends Component {
	constructor() {
	  super();
	
	  this.state = {
	  	contactList: []
	  };
	}

	componentDidMount() {
		const vm = this;

		axios.get('http://192.168.0.27:3000/contact')
		.then(function(result) {
			vm.setState({
				contactList: result.data
			})
		})
		.catch(function(err) {
			alert(err)
		});
	}

	render() {
		return (
			<Content style={styles.contentWrapper}>
				<Showlist list={this.state.contactList} navigation={this.props.navigation} />
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	contentWrapper: {
		padding: 10
	},
	emptyText: {
		fontSize: 15,
		color: '#424242'
	},
	listItem: {
		marginLeft: 0
	}
});