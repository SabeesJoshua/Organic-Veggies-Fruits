import { Link } from 'react-router-dom';
import './home.css';
import Footer from './footer';
function H(params)
{
    return (
        <div>
            <div className='content'>
                <h1 className='h11'>Organic Veggies &<br/>Fruits</h1>
                <p className="par">Good Products Never Fail In Bringing People Together<br/>Eating Healthy Food Fills Your Body With Energy And Nutrients.<br/>
                    Imagine Your Cells Smiling Back At You And Saying:<br/><b><span className='span'>Thank you!</span></b></p> 
                <Link to='' className='li1'><button className="cn"><b>ORDER</b></button></Link>
            </div>
            <Footer/>
        </div>
    );
};
export default H;