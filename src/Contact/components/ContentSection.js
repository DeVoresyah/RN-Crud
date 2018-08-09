import React, { Component } from 'react';
import { Alert, View, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { Content, List, ListItem, Button, Icon, Body, Text } from 'native-base';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ContentSection extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	contactList: [],
	  	page: 2,
	  	loading: false,
	  	refreshing: false
	  };
	}

	componentDidMount() {
		this.getData();
	};

	getData = () => {
		const vm = this;

		this.setState({
			loading:true
		});

		axios.get('http://192.168.0.27:3000/contact')
		.then(function(result) {
			vm.setState({
				page: 2,
				loading: false,
				refreshing: false,
				contactList: result.data
			});
		})
		.catch(function(err) {
			alert(err)
		});
	};

	deleteContact = (id) => {
		var vm = this;

		axios.delete('http://192.168.0.27:3000/contact/delete/'+id)
		.then(function(response) {
			const data = response.data;

			alert(data.msg);
			vm.getData();
		})
		.catch(function(err) {
			alert(err)
		})
	};

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
	};

	renderFooter = () => {
		if (!this.state.loading) return null;

		return (
			<View
			style={{
				flex:1,
				paddingVertical: 20,
				justifyContent: 'center',
				position: 'absolute'
			}}>
				<ActivityIndicator animating size="large" />
			</View>
		)
	};

	dataRefresh = () => {
		this.setState({
			refreshing: true
		},
		() => {
			this.getData();
		}
		)
	}

	loadMore = () => {
		const vm = this;

		this.setState({
			loading: true
		}, () => {
			axios.get('http://192.168.0.27:3000/contact/page/'+this.state.page)
			.then(function(response) {
				const newList = vm.state.contactList.concat(response.data);
				const newPage = vm.state.page + 1;
				vm.setState({
					contactList: newList,
					page: newPage,
					loading: false
				})
			})
			.catch(function(err) {
				alert(err)
			})
		});
	};

	render() {
		if (this.state.contactList.length == 0) {
			return(
				<Content style={styles.contentWrapper}>
					<View style={{justifyContent:'center', alignItems:'center', paddingTop:250}}>
						<Text style={styles.emptyText}>No Data Available</Text>
					</View>
				</Content>
			)
		} else {
			return (
					<List style={{flex:1}}>
						<FlatList
							data={this.state.contactList}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({item}) => (
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
							)}
							ListFooterComponent={this.renderFooter}
							onRefresh={this.dataRefresh}
							refreshing={this.state.refreshing}
							onEndReached={this.loadMore}
							onEndReachedThreshold={0.1}
						/>
					</List>
			)
		}
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