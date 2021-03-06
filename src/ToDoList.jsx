import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddToDo from "./AddToDo";

class ToDoList extends React.Component {
  state = {
    todos: [{ Id: "1", Title: "Create a To Do List" }],
  };

  addToDO = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  deleteToDo = (todo) => {
    const filteredItems = this.state.todos.filter((X) => X.Id != todo.Id);

    this.setState({
      todos: filteredItems,
    });
  };

  editToDo = (x) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.Id === x.Id) {
          return {
            ...todo,
            Status: todo.Status === "Done" ? "Pending" : "Done",
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  render() {
    return (
      <div>
        <AddToDo onAdd={this.addToDO} />
        <h1>TodoList</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((x) => {
              return (
                <tr key={x.Id}>
                  <td>{x.Id}</td>
                  <td>{x.Title}</td>
                  <td style={{ color: x.Status === "Done" ? "green" : "red" }}>
                    {x.Status}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.deleteToDo(x)}
                    >
                      <span>
                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                      </span>
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.editToDo(x)}
                    >
                      <span>
                        <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ToDoList;
