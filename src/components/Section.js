import React from "react";

const Section = ({ className, category }) => {
  return (
    <div className={className}>
      <h2>{category.category}</h2>
      <div className="movies-list">
        {category.images.map((imgUrl, index) => {
          return <img src={imgUrl} alt="" key={index}></img>;
        })}
      </div>
    </div>
  );
};

export default Section;
