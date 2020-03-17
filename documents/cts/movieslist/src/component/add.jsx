import React from "react";
import Input from "./input";

const AddTodo = props => {
  const {
    todos,
    todo1,
    handleInputField,

    addTodo
  } = props;
  return (
    <div className="container">
      <button
        className="btn btn-success"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add ToDo
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
                Add ToDos Details
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
                  inputName="id"
                  value={todo1.id}
                  type="number"
                  handleInputField={handleInputField}
                  label="Id"
                />
                <Input
                  inputName="title"
                  value={todo1.title}
                  type="text"
                  handleInputField={handleInputField}
                  label="Title"
                />
                <Input
                  inputName="body"
                  value={todo1.body}
                  type="text"
                  handleInputField={handleInputField}
                  label="Body"
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
    </div>
  );
};

export default AddTodo;
