import React, { Component } from 'react';
import * as firebase from 'firebase';

export default class Post extends Component {


    constructor(props) {
      super(props);
      this.state = {value: '',
                    readonly: false};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
      const rootReference = firebase.database().ref();
      const valueRef = rootReference.child('values/' + this.props.id + '/value');
      valueRef.once('value').then(snapshot => {
        var savedString = snapshot.val();
        if (savedString) {
          savedString = savedString.charAt(0).toUpperCase() + savedString.slice(1);
          this.setState({
            value: savedString,
            readonly: true
          });
        }
      });
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      this.setState({readonly: true});
      var database = firebase.database();
      firebase.database().ref('values/' + this.props.id).set({
        value: this.state.value
      });
      // Get a reference to the database service
      event.preventDefault();
    }

    handleEdit(event) {
      this.setState({readonly: false});
      event.preventDefault();
    }

    render() {

      if (this.state.readonly) {
        return <div>
                 <button onClick={this.handleEdit}>Edit</button>
                 <p>{this.state.value}</p>
                 <Post id={this.props.id + 1} />
               </div>
      } else {
        return (
          <form onSubmit={this.handleSubmit}>
          <label>
          Coffee order :
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          </form>
        );
      }
    }
}
