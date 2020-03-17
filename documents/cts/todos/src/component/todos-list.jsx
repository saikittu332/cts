import React from "react";
import Input from "./input";
const TodosList = props => {
  const {
    todos,
    getInfo,
    addTodo,
    updateTodo,
    deleteTodo,
    todo1,
    handleInputField,
    True,
    False,
    Search
  } = props;
  return (
    <div className="container">
      <button
        className="mt-5 btn btn-primary align-center"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        AddTodo
      </button>

      <button className="mt-5 ml-5 btn btn-success" onClick={True}>
        Completed
      </button>

      <button className="mt-5 ml-5 btn btn-info" onClick={False}>
        Pending
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add todos Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="w-75 mx-auto  pt-0">
                <Input
                  inputName="userId"
                  value={todo1.userId}
                  type="text"
                  handleInputField={handleInputField}
                  label="UserId"
                />
                <Input
                  inputName="id"
                  value={todo1.id}
                  type="number"
                  handleInputField={handleInputField}
                  label="Id"
                />

                <Input
                  inputName="completed"
                  value={todo1.completed}
                  type="text"
                  handleInputField={handleInputField}
                  label="Completed"
                />

                <Input
                  inputName="title"
                  value={todo1.title}
                  type="text"
                  handleInputField={handleInputField}
                  label="Title"
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    data-dismiss="modal"
                    className="btn btn-primary"
                    onClick={addTodo}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <table className="mt-3 table table-hover table-bordered table-sm">
        <thead>
          {todos.length > 0 && (
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          )}
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td className="text-justify">{todo.title}</td>
              <td>{todo.completed.toString()}</td>
              <td>
                <button
                  onClick={() => getInfo(todo)}
                  className="btn btn-secondary"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  update
                </button>
                &nbsp;
                <button
                  onClick={() => deleteTodo(todo)}
                  className="btn btn-danger"
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update todos Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="w-75 mx-auto  pt-0">
                <Input
                  inputName="userId"
                  value={todo1.userId}
                  type="text"
                  handleInputField={handleInputField}
                  label="UserId"
                />

                <Input
                  inputName="id"
                  value={todo1.id}
                  type="number"
                  handleInputField={handleInputField}
                  label="Id"
                />

                <Input
                  inputName="completed"
                  value={todo1.completed}
                  type="text"
                  handleInputField={handleInputField}
                  label="Completed"
                />

                <Input
                  inputName="title"
                  value={todo1.title}
                  type="text"
                  handleInputField={handleInputField}
                  label="Title"
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    data-dismiss="modal"
                    className="btn btn-primary"
                    onClick={updateTodo}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosList;
