import React from "react";
import Header from "./Header";
import Resource from "./Resource";
import ResourceList from "./ResourceList";

function App() {
  return (
    <>
      <div className='ui container'>
        <Header />
        <Resource />
        <ResourceList />
      </div>
    </>
  );
}

export default App;
