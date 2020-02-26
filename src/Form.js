import React, { useState } from 'react';
import './Form.css';

const Form = props => {
    const [data, setData] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = event => {        
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(data);
        setData({ name: "", email: "", role: "" });
      };

    return (
        <form className='formName' onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            onChange={handleChanges}
            value={data.name}
          />
          <label htmlFor="email">Email</label>
          <input
            id="note"
            type="email"
            placeholder="Your email"
            name="email"
            onChange={handleChanges}
            value={data.email}
          />
          <label htmlFor="role">Role</label>
          <select>
            id="role"
            name="role"
            <option value='1'>Front End</option>
            <option value='2'>Back End</option>
            <option value='3'>Designer</option> 
            onChange={handleChanges}
            value={data.role}
          </select>
          <button type="submit">Submit</button>
        </form>
    );
};

export default Form;