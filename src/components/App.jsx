import React, { useState } from "react";
import Header from "./Header";
import Resource from "./Resource";
import ResourceList from "./ResourceList";

function App() {
  const [resources, setResources] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  return (
    <>
      <div className='ui container'>
        <Header />
        <Resource
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          link={link}
          setLink={setLink}
          resources={resources}
          setResources={setResources}
        />
        <ResourceList resources={resources} />
      </div>
    </>
  );
}

export default App;
