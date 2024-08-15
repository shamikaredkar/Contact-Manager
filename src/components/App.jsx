import React, { useState } from "react";
import Header from "./Header";
import Resource from "./Resource";
import ResourceList from "./ResourceList";

function App() {
  const [resources, setResources] = useState([]);
  return (
    <>
      <div className='ui container'>
        <Header />
        <Resource />
        <ResourceList resources={resources} />
      </div>
    </>
  );
}

export default App;
