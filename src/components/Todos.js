import React from "react";
import List from "./List";

import { connect } from "react-redux";

import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle,
} from "../actions/todos";

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };

  removeItem = (todo) => {
    // make the change in state before network request to nake appear faster. If there's an error, just put it back

    this.props.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = (id) => {
    // delete from database

    this.props.dispatch(toggleTodoAction(id));
    return API.saveTodoToggle(id).catch(() => {
      this.props.dispatch(toggleTodoAction(id));
      alert("An error occured. Try again");
    });
  };
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          remove={this.removeItem}
          toggle={this.toggleItem}
          items={this.props.todos}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
