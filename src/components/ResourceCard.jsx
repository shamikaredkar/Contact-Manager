import React from "react";

export default function ResourceCard({ resource }) {
  return (
    <div className='item'>
      <div className='content'>
        <div className='header'>{resource.name}</div>
        <div>{resource.description}</div>
        <a href={resource.link} target='_blank'>
          {resource.link}
        </a>
        <i
          style={{
            color: "red",
            marginTop: "7px",
            cursor: "pointer",
          }}
          className='trash alternate outline icon'
        ></i>
      </div>
    </div>
  );
}
