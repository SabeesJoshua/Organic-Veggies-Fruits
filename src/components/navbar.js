import './navbar.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SignUp from './signup';
import H from './home';
import LogIn from './login';
import About from './about';
function Home(params)
{
    return(
        <H/>
    )
}
function Ab(params)
{
    return(
        <About/>
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
                <ul className='ul'>
                    <li className='li'>
                        <Link to = "/home" className='link'>Home</Link>
                    </li>
                    <li className='li'>
                        <Link to = "/about" className='link'>About Us</Link>
                    </li>
                    <li className='li'>
                        <Link to = "/" className='link'>Login</Link>
                    </li>
                    <li className='li'>
                        <Link to = "/signup" className='link'>Signup</Link>
                    </li>
                    <li className="search">
                        <input className="srch" type="search" placeholder="Type Here"/>
                        <Link><button className="btn"><b>Search</b></button></Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path = '/home'element = {<Home/>}/>
                <Route exact path = '/about' element = {<Ab/>}/>
                <Route className='si' exact path = '/' element = {<Login/>}/>
                <Route exact path = '/signup' element = {<Signup/>}/>
            </Routes>
        </Router>
    )
}
export default Navbar;