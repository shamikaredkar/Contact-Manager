import React from "react";

export default function ResourceCard({ resource }) {
  return (
    <div className='item'>
      <div className='content'>
        <div className='header'>{resource.name}</div>
        <div>{resource.description}</div>
        <a>{resource.link}</a>
        <i
          style={{ color: "red", marginTop: "7px" }}
          className='trash alternate outline icon'
        ></i>
      </div>
    </div>
  );
}
