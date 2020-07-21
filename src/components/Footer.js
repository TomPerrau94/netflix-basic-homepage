import React from "react";

const Footer = ({
  className,
  technoLink,
  technoName,
  companyLink,
  companyName,
  authorLink,
  authorName,
}) => {
  return (
    <div className={className}>
      <span>
        Made with{" "}
        <a href={technoLink} target="blank">
          {technoName}
        </a>
      </span>
      <span>
        {" "}
        in{" "}
        <a href={companyLink} target="blank">
          {companyName}
        </a>
      </span>
      <span>
        {" "}
        by{" "}
        <a href={authorLink} target="blank">
          {authorName}
        </a>
      </span>
    </div>
  );
};

export default Footer;
