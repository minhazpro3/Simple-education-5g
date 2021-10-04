import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer" className="footer-1 mt-5">
             <div className="main-footer widgets-dark typo-light">
                 <div className="container">
                     <div className="row">
          
                    <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget subscribe no-box">
                    <h5 className="widget-title">Study Family<span></span></h5>
                    <p>About the company, little discription will goes here.. and some deiscrption in Navbar on click. </p>
                    </div>
                    </div>
        
                    <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget no-box">
                    <h5 className="widget-title">Quick Links<span></span></h5>
                    <ul className="thumbnail-widget">
                    <li>
                    <div className="thumb-content"><p><Link to="#">Get Started</Link></p></div> 
                    </li>
                    <li>
                    <div className="thumb-content"><p><Link  to="#">Top Service</Link></p></div> 
                    </li>
                    <li>
                    <div className="thumb-content"><p><Link  to="#">Success Stories</Link></p></div> 
                    </li>
                    <li>
                    <div className="thumb-content"><p><Link  to="#">Events</Link></p></div> 
                    </li>
                    <li>
                    <div className="thumb-content"><p><Link  to="#">Compititions</Link></p></div>  
                    </li>
                    </ul>
                    </div>
                    </div>
                    
                    <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget no-box">
                    <h5 className="widget-title">Get Started<span></span></h5>
                    <p>Get access to your full details and if you apply to online.</p>
                    <p><Link  to="#">Subscribe Now</Link></p>
                    </div>
                    </div>
        
                    <div className="col-xs-12 col-sm-6 col-md-3">
                    
                    <div className="widget no-box">
                    <h5 className="widget-title">Contact Us<span></span></h5>
                    
                    <p><Link  to="#">info@domain.com</Link></p>
    
                    <ul className="social-footer2">

                    <li className=""><Link  to="#"><i target="_blank" className="fab fa-facebook"></i></Link> Facebook</li>

                    <li className=""><Link  to="#"><i target="_blank" className="fab fa-twitter"></i></Link> Twitter</li>
                    <li className=""><Link  to="#"><i target="_blank" className="fab fa-instagram"></i></Link> Instagram</li>
                    <li className=""><Link  to="#"><i target="_blank" className="fab fa-youtube"></i></Link> Youtube</li>
                 </ul>
             </div>
         </div>
        
        </div>
        </div>
        </div>
          
        <div className="footer-copyright">
        <div className="container">
        <div className="row">
        <div className="col-md-12 text-center">
        <p>Copyright by minhaz © 2021. All rights reserved.</p>
        </div>
        </div>
        </div>
        </div>
        </footer>
    );
};

export default Footer;