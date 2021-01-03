import React from "react";
import "./style/Footer.css";
import Icon from './Icon'

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer">
               <div className="footer__brand"><span>Book Store</span></div>
               <ul className="footer__social-media">
                    <li><a href="/"><Icon svg="facebook" classes="svg-icon" title="Facebook"/></a></li>
                    <li><a href="/"><Icon svg="twitter" classes="svg-icon" title="Twitter"/></a></li>
                    <li><a href="/"><Icon svg="whatsapp" classes="svg-icon" title="Whatsapp"/></a></li>
                    <li><a href="/"><Icon svg="instagram" classes="svg-icon" title="Instagram"/></a></li>
                </ul>
                <div className="container-footer">
                    
                        <ul className="footer__contact">
                            <li><span>Dirección: Mi pueblito rs</span></li>
                            <li><span>Telefono: +51 12345678</span></li>
                            <li><span>Email: soporte@elmo.edu.pe</span></li>
                            
                        </ul>
                    
                    
                        <ul className="footer__extra">
                            <li><a href="/"><span>FAQs</span></a></li>
                            <li><a href="/"><span>Misión</span></a></li>
                            <li><a href="/"><span>Visión</span></a></li>
                            
                        </ul>
                   
                </div>
            </footer>
        )
    }
}
export default Footer;
