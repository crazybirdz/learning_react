import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please Log in</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => (this.inputElement = inputEl)}
          ref={this.inputElementRef}
          onChange={this.props.changeName}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changeName: PropTypes.func,
};

export default withClass(Person, classes.Person);
