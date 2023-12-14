import './navbar.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SignUp from './signup';
import H from './home';
import Or from './order';
import LogIn from './login';
function Home(params)
{
    return(
        <H/>
    )
}
function Order(params)
{
    return(
        <Or/>
    )
}
function Login(params)
{
    return(
        <LogIn/>
    )
}
function Signup(params)
{
    return(
        <SignUp/>
    )
}
function Navbar(params)
{
    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to = "/" className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to = "/order" className='link'>Order</Link>
                    </li>
                    <li>
                        <Link to = "/login" className='link'>Login</Link>
                    </li>
                    <li>
                        <Link to = "signup" className='link'>Signup</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path = '/'element = {<Home/>}/>
                <Route exact path = '/order' element = {<Order/>}/>
                <Route className='si' exact path = '/login' element = {<Login/>}/>
                <Route exact path = '/signup' element = {<Signup/>}/>
            </Routes>
        </Router>
    )
}
export default Navbar;