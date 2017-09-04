import React, { Component } from 'react';
import * as firebase from 'firebase';
var format = require('../src/Formatter.js');

/*
  The post class. This is used for displaying a single post which
  is only vaguely aware of its parent and child post
*/
export default class Post extends Component {

  // pass in props, set initial state and bind our methods to this instance
  constructor(props) {
    super(props);
    this.state = {description: '', readonly: false};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Just after load is where we want to load the data so the actual
  // screen loads first
  componentDidMount() {
    const rootReference = firebase.database().ref(); // Get a reference to the root of the database
    const orderRef = rootReference.child('values/' + this.props.id); // Get the values 'table'
    orderRef.once('value').then(snapshot => {
      if (snapshot.val()) {
          this.setState({
            name: format(snapshot.val().name),
            description: format(snapshot.val().description),
            readonly: true
          });
      }
    });
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  // handle clicking of the submit button
  handleSubmit(event) {
    this.setState({readonly: true});
    // Save the Post to the database
    var database = firebase.database();
    firebase.database().ref('values/' + this.props.id).set({
      name: this.state.name,
      description: this.state.description
    });
    // Get a reference to the database service
    event.preventDefault();
  }

  // handle Clicking of the edit button
  handleEdit(event) {
    this.setState({readonly: false});
    event.preventDefault();
  }

  handleDelete(event) {
    var database = firebase.database();
    // Delete the record
    firebase.database().ref('values/' + this.props.id).remove();
    event.preventDefault();
  }

  /*
     Render our Post component.
     If the post is saved it should be displayed in readonly module and should
     load its child(eren)
     If the post is not saved then it should be displayed as editable and
     should not display its child(eren).
  */
  render() {
    if (this.state.readonly) {
      return <div>
               <button onClick={this.handleEdit}>Edit</button>
               <p>{this.state.name} - {this.state.description}</p>
               <button className='Delete' onClick={this.handleDelete} />
               <Post id={this.props.id + 1} />
             </div>
    } else {
      return (
        <form className='Order-entry' onSubmit={this.handleSubmit}>
            <h2>Coffee order :</h2>
            <br></br>
            <label>Name: </label><input type="text" value={this.state.name} onChange={this.handleNameChange} />
            <br></br>
            <label>Items requested: </label><input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
            <br></br>
            <br></br>
          <input className='Submit-order' type="submit" value="Submit" />
        </form>
      );
    }
  }
}
