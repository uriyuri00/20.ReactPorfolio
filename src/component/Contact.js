// import React from 'react'

// export const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }


import React, {useState} from 'react'


import { validateEmail } from '../utils/helper';



export const Contact = () =>{
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const handleInputChange = (e)=> {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.Value;

    if (inputType === 'email'){
      setEmail(inputValue)
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !username){
      setErrMessage('Email or Username is invalid');
      return
    }
    // if successful, we want to clear out the input after registration 
    setUsername('');
    setErrMessage('');
    setMessage('');
    setEmail('');
  }
  
  return (
 
  <form >
     <div>
    <nav id='contactme'>
      <h2> Contact ME</h2>

    </nav>
    <p>If any interest in my works, contact ME!!</p>
  </div>
      <div className='form-group'>
        <label>username</label>
        <input
          name='username'
          type='text'
          className='form-control'
          placeholder='username'
          >
        </input>
        <label>Email</label>
        <input
          name='email'
          type='email'
          className='form-control'
          placeholder='abc@aol.com'
          validateEmail
          >
        </input>
        <label>Message</label>
        <input
          name='message'
          type='text'
          className='form-control'
          placeholder='feel free '
          >
        </input>

      </div>

    <button 
      className='btn outline-secondary'
      content='Confirm'
      type='submit'
      onClick={handleFormSubmit}>submit

      </button>
  </form>
)
  }
export default Contact