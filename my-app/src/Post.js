import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
      super(props);
      this.state = {value: '',
                    readonly: false};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
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
                 <p>id{this.props.id}</p>
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
