import React, { Component } from 'react';
import 'Components/Form/Form.styles.css';
// import './Form.styles.css';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      politicalLean: 'right', 
    };
  }
    /* don't capitalize politicalLean because it is not capitalized in the database*/
  

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert('You are submitting ' + this.state.handle);
    console.log(this.state.politicalLean);
    this.props.changePage(this.state.politicalLean);
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    console.log(val);
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h4>@{this.state.handle}</h4>
        <p>Twitter Handle:</p>
        <input type="text" name="handle" onChange={this.myChangeHandler} />
        <p>Political Leaning:</p>
        <select name="politicalLean" defaultValue="right" onChange={this.myChangeHandler}>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
        <input className={'btn btn-primary'} type="submit" />
      </form>
    );
  }
  /* don't capitalize the value properties in the option elements because they are not capitalized in the database*/
}
