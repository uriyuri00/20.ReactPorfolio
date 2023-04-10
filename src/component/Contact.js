// import React from 'react'

// export const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }


import React, {useState} from 'react'
import  Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

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
 
  <Form >
     <div>
    <nav id='contactme'>
      <h2> Contact ME</h2>

    </nav>
    <p>If any interest in my works, contact ME!!</p>
  </div>
      <Form.Group className="mb-3" onChange={handleInputChange}>
        <Form.Label>UserName</Form.Label>
        <Form.Control type="username" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

    <Button variant="outline-secondary"
      content='Confirm'
      label='Label with htmlFor'
      onChange={handleFormSubmit}>submit

      </Button>
  </Form>
)
  }
export default Contact