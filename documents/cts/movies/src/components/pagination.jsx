import React, { Component } from "react";

class Pages extends Component {
  render() {
    return (
      <div>
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                1<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="page-item ">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pages;
