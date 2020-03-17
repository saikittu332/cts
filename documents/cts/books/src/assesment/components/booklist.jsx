import React from "react";

const List = props => {
  console.log(props.categories);
  return (
    <div className="mt-5 ml-3">
      <ul className="list-group">
        {props.categories.map(category => (
          <li
            onClick={() => props.handleSelectedCategory(category)}
            key={category.id}
            className={
              category.id === props.selectedCategory
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
