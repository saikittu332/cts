import React, { Component } from "react";
import Book from "./book";
import { Link } from "react-router-dom";
import _ from "lodash";
import Pagination from "./paginaton";
import List from "./booklist";

class Books extends Component {
  state = {
    books: [
      {
        _id: 1,
        title: "Unlocking Android",
        pageCount: 416,
        publishedDate: "2009-04-01",
        authors: "W. Frank Ableson",
        categories: "Android"
      },
      {
        _id: 2,
        title: "Android in Action, Second Edition",
        pageCount: 592,
        publishedDate: "2011-01-14",
        authors: "W. Frank Ableson",
        categories: "Java"
      },
      {
        _id: 3,
        title: "Specification by Example",
        pageCount: 0,
        publishedDate: "2011-06-03",
        authors: ["Gojko Adzic"],
        categories: "Software Engineering"
      },
      {
        _id: 4,
        title: "Flex 3 in Action",
        pageCount: 576,
        publishedDate: "2009-02-02",
        authors: "Tariq Ahmed with Jon Hirschi",
        categories: "Internet"
      },
      {
        _id: 5,
        title: "Flex 4 in Action",
        pageCount: 600,
        publishedDate: "2010-11-15",
        authors: ["Tariq Ahmed"],
        categories: "Internet"
      },
      {
        _id: 6,
        title: "Collective Intelligence in Action",
        pageCount: 425,
        publishedDate: "2008-10-01",
        authors: ["Satnam Alag"],
        categories: "Internet"
      },
      {
        _id: 7,
        title: "Zend Framework in Action",
        pageCount: 432,
        publishedDate: "2008-12-01",
        authors: ["Rob Allen"],
        categories: "Web Development"
      },
      {
        _id: 8,
        title: "Flex on Java",
        pageCount: 265,
        publishedDate: "2010-10-15",
        authors: ["Bernerd Allmon"],
        categories: "Internet"
      },
      {
        _id: 9,
        title: "Griffon in Action",
        pageCount: 375,
        publishedDate: "2012-06-04",
        authors: "Andres Almiray",
        categories: "Java"
      },
      {
        _id: 10,
        title: "OSGi in Depth",
        pageCount: 325,
        publishedDate: "2011-12-12",
        authors: ["Alexandre de Castro Alves"],
        categories: "Java"
      },
      {
        _id: 11,
        title: "Flexible Rails",
        pageCount: 592,
        publishedDate: "2008-01-01",
        authors: ["Peter Armstrong"],
        categories: "Web Development"
      },
      {
        _id: 13,
        title: "Hello! Flex 4",
        pageCount: 258,
        publishedDate: "2009-11-01",
        authors: ["Peter Armstrong"],
        categories: "Internet"
      },
      {
        _id: 14,
        title: "Coffeehouse",
        pageCount: 316,
        publishedDate: "1997-07-01",
        authors: ["Levi Asher"],
        categories: "Miscellaneous"
      },
      {
        _id: 15,
        title: "Team Foundation Server 2008 in Action",
        pageCount: 344,
        publishedDate: "2008-12-01",
        authors: ["Jamil Azher"],
        categories: "Microsoft .NET"
      },
      {
        _id: 16,
        title: "Brownfield Application Development in .NET",
        pageCount: 550,
        publishedDate: "2010-04-16",
        authors: ["Kyle Baley"],
        categories: "Microsoft"
      },
      {
        _id: 17,
        title: "MongoDB in Action",
        pageCount: 0,
        publishedDate: "2011-12-12",
        authors: ["Kyle Banker"],
        categories: "Next Generation Databases"
      },
      {
        _id: 18,
        title: "Distributed Application Development with PowerBuilder 6.0",
        pageCount: 504,
        publishedDate: "1998-06-01",
        authors: ["Michael J. Barlotta"],
        categories: "PowerBuilder"
      },
      {
        _id: 19,
        title: "Jaguar Development with PowerBuilder 7",
        pageCount: 550,
        publishedDate: "1999-08-01",
        authors: ["Michael Barlotta"],
        categories: "PowerBuilder"
      }
    ],
    categories: [
      { id: 1, name: "Android" },
      { id: 2, name: "Java" },
      { id: 3, name: "Software Engineering" },
      { id: 4, name: "Internet" },
      { id: 5, name: "Web Development" },
      { id: 6, name: "Miscellaneous" },
      { id: 7, name: "Microsoft .NET" },
      { id: 8, name: "Microsoft" },
      { id: 9, name: "Next Generation Databases" },
      { id: 10, name: "PowerBuilder" }
    ],
    selectedCategory: 1,
    pageSize: 1,
    selectedPage: 1
  };

  handleSelectedCategory = category => {
    console.log("hello", category.id);
    this.setState({ selectedCategory: category.id });
  };

  handlePageSelect = page => {
    this.setState({ selectedPage: page });
  };

  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  render() {
    const { categories } = this.state;
    // const { selectedcategory } = this.state;
    // filtering movies based on genre
    const category = categories.filter(
      category => category.id === this.state.selectedCategory
    );
    console.log("sai", this.state.selectedCategory);

    console.log("hi", category);

    const filteredBooks = this.state.books.filter(
      book => book.categories === category[0].name
    );
    console.log("krishna ", category[0].name);

    const paginatedBooks = this.paginate(
      filteredBooks,
      this.state.selectedPage,
      this.state.pageSize
    );

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <List
              categories={categories}
              selectedCategory={this.state.selectedCategory}
              handleSelectedCategory={this.handleSelectedCategory}
            />
          </div>
          <div className="col-6">
            {paginatedBooks.map(book => (
              <Link
                to={{ pathname: `/books/${book._id}`, state: { book } }}
                style={{ textDecoration: "none" }}
              >
                <Book book={book} />
              </Link>
            ))}
          </div>
        </div>
        <Pagination
          pageSize={this.state.pageSize}
          totalBooks={filteredBooks.length}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
        />
      </div>
    );
  }
}

export default Books;
