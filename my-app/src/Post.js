import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
      super(props);
      this.state = {value: '',
                    readonly: false,
                    data: ""};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleComponentUpdate = this.handleComponentUpdate.bind(this);
    }

    handleComponentUpdate(event) {
      this.setState({data: event.target.value});
    }

    handleChange(event) {
      this.setState({value: event.target.value});
      this.props.handleUpdate(this.state.value);
    }

    handleSubmit(event) {
      this.setState({readonly: true});
      event.preventDefault();
    }

    handleEdit(event) {
      this.setState({readonly: false});
      event.preventDefault();
    }

    render() {
      if (this.state.readonly) {
        return <div>
                 <p>{this.state.value}</p>
                 <button onClick={this.handleEdit}>Edit</button>
                 <p>id{this.props.id}, status{this.state.data}</p>
                 <Post id={this.props.id + 1} handleUpdate={this.handleComponentUpdate}/>
               </div>
      } else {
        return (
          <form onSubmit={this.handleSubmit}>
          <label>
          Coffee order : 
          <input type="text" value={this.state.value} handleUpdate={this.handleComponentUpdate} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
          </form>
        );
      }
    }
}
