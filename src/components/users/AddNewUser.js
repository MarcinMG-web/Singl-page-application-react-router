import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postNewUser } from '../services/ApiService';

const AddNewUser = () => {
  let history = useHistory();

  const initUser = {
    id: '',
    name: '',
    username: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
    company: '',
    catchPhrase: '',
    bs: '',
  };

  const [newUser, setNewUser] = useState(initUser);

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const setNewUserForFrom = async () => {
      await postNewUser(newUser);
      history.push('/application');
    };

    setNewUserForFrom();
  };

  return (
    <div className='container'>
      <div className='py-4 d-flex'>
        <h1>Add new user</h1>

        <div className='d-flex ml-auto p-2'>
          <Link
            type='submit'
            className='btn btn-outline-warning  pull-right'
            to='../Application'
          >
            Back to application
          </Link>
        </div>
      </div>

      <small className='form-text text-muted py-2'>
        Enter all of input element to add new user:
      </small>

      <form onSubmit={handleSubmitForm}>
        <span>Main information:</span>

        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter name...'
            name={'name'}
            onChange={handleChange}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter user name...'
            name={'username'}
            onChange={handleChange}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email...'
            name={'email'}
            onChange={handleChange}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter phone...'
            name={'phone'}
            onChange={handleChange}
          />
        </div>

        <span>Address:</span>

        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter street...'
            name={'street'}
            onChange={handleChange}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter suite...'
            name={'suite'}
            onChange={handleChange}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter city...'
            name={'city'}
            onChange={handleChange}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter zipcode...'
            name={'zipcode'}
            onChange={handleChange}
          />
        </div>

        <span>Company:</span>

        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter company...'
            name={'company'}
            onChange={handleChange}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter website...'
            name={'website'}
            onChange={handleChange}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter comments...'
            name={'bs'}
            onChange={handleChange}
          />
        </div>
        <div className='panel-body'>
          <button className='btn btn-outline-secondary btn-block' type='submit'>
            Add user
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
