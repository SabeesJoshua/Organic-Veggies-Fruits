import './login.css';
function LogIn(params)
{
    return(
        <div className="form">
            <form>
                <h2 className='sig'>LogIn</h2>
                <input type="email" name="email" placeholder="Enter Email Here"></input><br></br>
                <input type="password" name="pass" placeholder="Enter Password Here"></input><br></br>
                <button>Login</button>
                <br></br>
                <p>Don't have an Account ?<a href='#'> Sign Up</a></p>
                <a href='#'>Forgot password?</a>
            </form>
        </div>
    )
}
export default LogIn;