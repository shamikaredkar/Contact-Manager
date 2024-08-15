import React from "react";
import ResourceCard from "./ResourceCard";

export default function ResourceList({ resources }) {
  const handleList = resources.map((resource) => {
    return <ResourceCard resource={resource} />;
  });
  return <div className='ui celled list'>{handleList}</div>;
}
