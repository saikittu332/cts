import React, { Component } from "react";
import PostTable from "./posts-table";
import PostForm from "./post-form";
import _ from "lodash";
import { Link } from "react-router-dom";
import http from "../services/httpService";
import { toast } from "react-toastify";
import Spinner from "./spinner";
import Pagination from "react-js-pagination";

const baseUrl = "http://jsonplaceholder.typicode.com";

class Posts extends Component {
  constructor() {
    super();
    console.log("inside constructor");
  }

  state = {
    posts: [],
    loading: true,
    pageSize: 10,
    activePage: 1,
    post: {
      id: "",
      title: "",
      body: ""
    }
  };

  handlePageSelect = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  paginate = (items, activePage, pageSize) => {
    const startIndex = (activePage - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  componentWillUnmount() {
    console.log("inside componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("inside componentDidUpdate");
  }

  async componentDidMount() {
    console.log("inside componentDidMount");
    const promise = await http.get(baseUrl + "/posts");
    console.log(promise);
    this.setState({ posts: promise.data, loading: false });
  }

  addPost = async () => {
    console.log("inside addpost");
    // const obj = { title: "New Title", body: "sdsffff" };
    // const response = await http.post(baseUrl + "/posts", obj);
    // console.log(response);
    const posts = [this.state.post, ...this.state.posts];
    this.setState({ posts });
  };

  deletePost = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    console.log(posts);
    // http.delete(baseUrl + "/posts/" + post.id);
    try {
      await http.delete(baseUrl + "/posts/" + post.id);
    } catch (err) {
      console.log("Error:", err);
      if (err.response && err.response.status === 404) {
        alert("post has been deleted");
      } else {
        //alert("Failed to delete due to Network issue");
        this.setState({ posts: originalPosts });
      }
    }

    //this.setState({ posts: originalPosts });
  };

  getInfo = post => {
    const ppp = this.state.posts.filter(p => p.id === post.id);
    console.log("ppp", ppp);
    this.setState({ post: ppp[0] });
  };
  updatePost = async post => {
    const response = await http.put(
      baseUrl + "posts/" + post.id,
      this.state.post
    );
    /*await axios.patch(baseurl + "posts/" + post.id, {
      title: "New Title"});*/
    console.log(response);
    const indx = this.state.posts.indexOf(post);
    const posts = this.state.posts;
    posts[indx] = response.data;
    this.setState({ posts });
  };

  handleInputField = event => {
    console.log("Inside handleInputField");
    const post = this.state.post;
    const { name, value } = event.currentTarget;
    post[name] = value;
    console.log("post", post);
    this.setState({ post });
  };

  render() {
    console.log("inside render");
    const paginatedPosts = this.paginate(
      this.state.posts,
      this.state.activePage,
      this.state.pageSize
    );
    return (
      <div>
        {this.state.loading && <Spinner />}
        <PostTable
          posts={paginatedPosts}
          updatePost={this.updatePost}
          deletePost={this.deletePost}
          addPost={this.addPost}
          getInfo={this.getInfo}
          post1={this.state.post}
          handleInputField={this.handleInputField}
        />

        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.posts.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageSelect.bind(this)}
        />
      </div>
    );
  }
}

export default Posts;
