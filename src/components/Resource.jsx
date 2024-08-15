import React, { useState } from "react";

export default function Resource({
  name,
  setName,
  description,
  setDescription,
  link,
  setLink,
  resources,
  setResources,
}) {
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleLink = (e) => {
    setLink(e.target.value);
  };
  const addResource = (e) => {
    e.preventDefault();
    setResources([...resources, { name, description, link }]);
    setName("");
    setDescription("");
    setLink("");
  };
  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form className='ui form'>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Website Name'
            onChange={(e) => {
              handleName(e);
            }}
            value={name}
          />
        </div>
        <div className='field'>
          <label>Description</label>
          <input
            type='text'
            name='description'
            placeholder='Description'
            onChange={(e) => {
              handleDescription(e);
            }}
            value={description}
          />
        </div>
        <div className='field'>
          <label>Link</label>
          <input
            type='text'
            name='link'
            placeholder='Name'
            value={link}
            onChange={(e) => {
              handleLink(e);
            }}
          />
        </div>
        <button onClick={addResource} className='ui button blue'>
          Add
        </button>
      </form>
    </div>
  );
}
