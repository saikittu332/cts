import React, { Component } from "react";
import TodosList from "./todos-list";
import axios from "axios";
import _ from "lodash";
import Pagination from "react-js-pagination";

const baseUrl = "http://jsonplaceholder.typicode.com";

class ToDos extends Component {
  state = {
    todos: [],
    activePage: 1,
    pageSize: 20,
    todo: {
      userId: "",
      id: "",
      title: "",
      completed: ""
    },
    subtodos: [],
    todos2: []
  };

  handlePageSelect = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  paginate = (items, activePage, pageSize) => {
    const startIndex = (activePage - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  async componentDidMount() {
    const list = await axios.get(baseUrl + "/todos");
    this.setState({ todos: list.data });
    this.setState({ subtodos: list.data });
  }

  handleInputField = event => {
    console.log("Inside handleInputField");
    const todo = this.state.todo;
    const { name, value } = event.currentTarget;
    todo[name] = value;
    console.log("todo", todo);
    this.setState({ todo });
  };

  addTodo = async () => {
    console.log("inside addtodo");
    const subtodos = [this.state.todo, ...this.state.subtodos];
    this.setState({ subtodos });
    // this.setState({ subtodos });
  };

  updateInfo = event => {
    const tod = this.state.todo;
    const todos = this.state.todos;
    const indx = this.state.todos.indexOf(tod);
    todos[indx] = tod;
    this.setState({ todos });
    console.log(indx);
  };

  getInfo = todo => {
    const ppp = this.state.todos.filter(p => p.id === todo.id);
    console.log("ppp", ppp);
    this.setState({ todo: ppp[0] });
  };

  deleteTodo = async todo => {
    // const originalTodos = this.state.todos;
    const subtodos = this.state.subtodos.filter(p => p.id !== todo.id);
    this.setState({ subtodos });
    // console.log(todos);
  };

  True = () => {
    const subtodos = this.state.todos.filter(m1 => m1.completed === true);
    console.log(subtodos);
    this.setState({ subtodos });
  };

  False = () => {
    const todos = this.state.todos;
    const subtodos = todos.filter(m1 => m1.completed !== true);
    console.log(subtodos);
    this.setState({ subtodos });
  };

  render() {
    const paginatedTodos = this.paginate(
      this.state.subtodos,
      // this.state.todos2,
      this.state.activePage,
      this.state.pageSize
    );

    // console.log(this.state.todos[0].completed);

    return (
      <div>
        <TodosList
          todos={paginatedTodos}
          deleteTodo={this.deleteTodo}
          todo1={this.state.todo}
          handleInputField={this.handleInputField}
          updateTodo={this.updateInfo}
          addTodo={this.addTodo}
          getInfo={this.getInfo}
          Search={this.Search}
          True={this.True}
          False={this.False}
          // All={this.All}
        />
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={20}
          totalItemsCount={this.state.todos.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageSelect.bind(this)}
        />
      </div>
    );
  }
}

export default ToDos;
