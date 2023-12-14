import './signup.css';
function SignUp(params)
{
    return(
        <div className="form1">
            <form className='form2'>
                <h2 className='head'>Sign UP</h2>
                <label>First Name:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name="fname" placeholder="Your Firt Name"></input>
                <br></br>
                <label>Last Name:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name="lname" placeholder="Your Last Name"></input>
                <br></br>
                <label>Phone Number:</label>
                <input type="text" maxlength="10" placeholder="Enter your number"></input>
                <br></br>
                <label>Email:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" name="email" placeholder="Enter your Email"></input>
                <br></br>
                <label>Password:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" name="pass" placeholder="Enter Password Here"></input>
                <br></br>
                <button className='button'>Signup</button>
            <br></br>
            <p>Already have an Account ?<a href='#'> Sign In</a></p>
            </form>
        </div>
    )
}
export default SignUp;