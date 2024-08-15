import React from "react";

export default function Resource() {
  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form className='ui form'>
        <div className='field'>
          <label>Name</label>
          <input type='text' name='name' placeholder='Website Name' />
        </div>
        <div className='field'>
          <label>Description</label>
          <input type='text' name='description' placeholder='Description' />
        </div>
        <div className='field'>
          <label>Link</label>
          <input type='text' name='link' placeholder='Name' />
          <button className='ui button blue'>Add</button>
        </div>
      </form>
    </div>
  );
}
