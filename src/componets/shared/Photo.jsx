import React from "react";

const Photo = ({ ...props }) => {
  return <img className="photo" {...props} alt="img" />;
};

export default Photo;
