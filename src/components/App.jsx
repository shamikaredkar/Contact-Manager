import React, { useState, useEffect } from "react";
import Header from "./Header";
import Resource from "./Resource";
import ResourceList from "./ResourceList";

function App() {
  const LOCAL_STORAGE_KEY = "resources";
  const [resources, setResources] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getItem) setResources(getItem);
  }, []);

  useEffect(() => {
    if (resources?.length) {
      // only store the state if products exists and it's length is greater than 0
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resources));
    }
  }, [resources]);

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
