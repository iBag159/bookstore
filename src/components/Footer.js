import React from "react";
import "./style/Footer.css";
import Icon from './Icon'
 
class Footer extends React.Component{
    render() {
        return(
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__container__social container">
                        <div className="footer__brand">
                            <span>BOOK STORE</span>
                        </div>
                        <div className="footer__line"><a href="/"><Icon svg="linef" classes="svg-icon" title="Linefoot"/></a></div>
                        
                        <ul className="footer__social-media">
                            <li><a href="/"><Icon svg="facebook" classes="svg-icon" title="Facebook"/></a></li>
                            <li><a href="/"><Icon svg="twitter" classes="svg-icon" title="Twitter"/></a></li>
                            <li><a href="/"><Icon svg="whatsapp" classes="svg-icon" title="Whatsapp"/></a></li>
                            <li><a href="/"><Icon svg="instagram" classes="svg-icon" title="Instagram"/></a></li>
                        </ul>
                    </div>
                    <div className="footer__container__contact container">
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
                </div>
                
            </footer>
        )
    }
}
export default Footer;

