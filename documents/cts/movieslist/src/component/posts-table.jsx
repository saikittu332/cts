import React from "react";
import Input from "./input";
const PostsTable = props => {
  const {
    posts,
    getInfo,
    addPost,
    updatePost,
    deletePost,
    post1,
    handleInputField
  } = props;
  return (
    <div className="container">
      <button
        className="btn btn-success"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        AddPost
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
                Add Posts Details
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
                  value={post1.id}
                  type="number"
                  handleInputField={handleInputField}
                  label="Id"
                />
                <Input
                  inputName="title"
                  value={post1.title}
                  type="text"
                  handleInputField={handleInputField}
                  label="Title"
                />
                <Input
                  inputName="body"
                  value={post1.body}
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
                    onClick={addPost}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-hover table-bordered table-sm">
        <thead className="table-danger">
          {posts.length > 0 && (
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          )}
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td className="text-justify">{post.title}</td>
              <td className="text-justify">{post.body}</td>
              <td>
                <button
                  onClick={() => getInfo(post)}
                  className="btn btn-outline-info"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  update
                </button>
                <button
                  onClick={() => deletePost(post)}
                  className="btn btn-outline-danger"
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
                Update Posts Details
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
                  value={post1.id}
                  type="number"
                  handleInputField={handleInputField}
                  label="Id"
                />
                <Input
                  inputName="title"
                  value={post1.title}
                  type="text"
                  handleInputField={handleInputField}
                  label="Title"
                />
                <Input
                  inputName="body"
                  value={post1.body}
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
                    onClick={updatePost}
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

export default PostsTable;
