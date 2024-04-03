/*import { Link} from 'react-router-dom';
import './login.css';
import LoginIcon from '@mui/icons-material/Login';
function LogIn(params)
{
  return(
      <div className="form">
          <form>
              <h2 className='sig'><LoginIcon sx={{ fontSize: 40 }} />LogIn</h2>
              <input type="email" name="email" placeholder="Enter Email Here" /><br></br>
              <input type="password"  name="pass" placeholder="Enter Password Here" /><br></br>
              <Link to='/home' className='l'><button className='bt'><b>Login</b></button></Link>
              <br></br>
              <p>Don't have an Account ?<Link to='/signup' className='l' > <b>Sign Up</b></Link></p>
              <Link className='l'><b>Forgot password?</b></Link>
          </form>
      </div>
  )
}
export default LogIn;*/

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios'; // Import Axios

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('YOUR_BACKEND_ENDPOINT_HERE', {
        email,
        password,
      });

      if (response.data.success) {
        // Redirect or set some state here based on successful login
        console.log('Logged in successfully!');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2 className='sig'><LoginIcon sx={{ fontSize: 40 }} />LogIn</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br></br>
        <input
          type="password"
          name="pass"
          placeholder="Enter Password Here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>
        <button type="submit" className='bt'><b>Login</b></button>
        <br></br>
        <p>Don't have an Account ?<Link to='/signup' className='l' > <b>Sign Up</b></Link></p>
        <Link className='l'><b>Forgot password?</b></Link>
      </form>
    </div>
  );
}

export default LogIn;