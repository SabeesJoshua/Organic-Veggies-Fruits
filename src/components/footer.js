import { Link } from 'react-router-dom';
import './footer.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer()
{
    return(
        <div className='footer'>
        <footer>
        <div className="footercontainer">
            <div className='socialicons'>
                <Link to="https://www.facebook.com/" className='icons'><i className="facebook"><FacebookRoundedIcon/></i></Link>
                <Link to="https://www.instagram.com/?hl=en" className='icons'><i className="instagram"><InstagramIcon/></i></Link>
                <Link to="https://twitter.com/?lang=en-in" className='icons'><i className="twitter"><TwitterIcon/></i></Link>
                <Link to="https://www.google.com/" className='icons'><i className="google"><GoogleIcon/></i></Link>
                <Link to="https://www.youtube.com/" className='icons'><i className="youtube"><YouTubeIcon/></i></Link>
            </div>
            <div class="footernav">
                <ul>
                    <li>
                        <Link to='/home' className='foot'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className='foot'>About US</Link>
                    </li>
                    <li>
                        <Link to="/" className='foot'>Login</Link>
                    </li>
                    <li>
                        <Link to="/signup" className='foot'>Signup</Link>
                    </li>
                </ul>
            </div>
            <div class="footerbottom">
                <p>&copy; 2023 Organic Veggies & Fruits. All Rights Reserved.</p>
            </div>
        </div>
        </footer>
        </div>
    );
}
export default Footer;