import React from "react";
import ResourceCard from "./ResourceCard";

export default function ResourceList({ resources }) {
  return (
    <div className='ui celled list'>
      {resources.map((resource, index) => (
        <ResourceCard key={index} resource={resource} />
      ))}
    </div>
  );
}
