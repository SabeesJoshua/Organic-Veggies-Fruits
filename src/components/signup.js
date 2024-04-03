/*import { Link } from 'react-router-dom';
import './signup.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
function SignUp(params)
{
    return(
        <div className="form1">
            <form className='form2'>
                <h2 className='head'><PersonAddIcon sx={{ fontSize: 40 }}/>Sign Up</h2>
                <label>First Name:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name="fname" placeholder="Your First Name"/>
                <br></br>
                <label>Last Name:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name="lname" placeholder="Your Last Name"/>
                <br></br>
                <label>Phone Number:</label>
                <input type="text" name='number' maxlength="10" placeholder="Enter your number"/>
                <br></br>
                <label>Email:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" name="email" placeholder="Enter your Email" />
                <br></br>
                <label>Password:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" name="pass" placeholder="Enter Password Here" />
                <br></br>
                <Link to='/' className='l'><button className='button'><b>Signup</b></button></Link>
                <br></br>
                <p>Already have an Account ?<Link to='/' className='l'><b> Log In</b></Link></p>
            </form>
        </div>
    )
}
export default SignUp;*/

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios'; // Import Axios

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('YOUR_BACKEND_ENDPOINT_HERE', {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

      if (response.data.success) {
        // Redirect or set some state here based on successful signup
        console.log('Signed up successfully!');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="form1">
      <form className='form2' onSubmit={handleSubmit}>
        <h2 className='head'><PersonAddIcon sx={{ fontSize: 40 }}/>Sign Up</h2>
        <label>First Name:</label>
        <input 
          type='text' 
          name="fname" 
          placeholder="Your First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br></br>
        {/* Repeat similar onChange and value handlers for other input fields */}
        <label>Last Name:</label>
        <input
            type='text'
            name="lname"
            placeholder="Your Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
        <br></br>
        <label>Phone Number:</label>
        <input
            type="text"
            name='number'
            maxlength="10"
            placeholder="Enter your number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br></br>
        <label>Email:</label>
        <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label>Password:</label>
        <input
            type="password"
            name="pass"
            placeholder="Enter Password Here" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <Link to='/' className='l'><button type="submit" className='button'><b>Signup</b></button></Link>
        <br></br>
        <p>Already have an Account ?<Link to='/' className='l'><b> Log In</b></Link></p>
      </form>
    </div>
  );
}

export default SignUp;
