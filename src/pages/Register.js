import React from "react";
import "./style/LoginForm.css";
import Icon from '../components/Icon'
import { Link } from 'react-router-dom';

class Register extends React.Component{
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
  };

  render() {
      return (
        <div className="formLogin-container">
          <section class="wrapper-login">
            <h1>Registrar usuario</h1>
    
            <form onSubmit={this.handleSubmit} className="Loginform" >
              <div className="form-group-login ">
                
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group-login">
                
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="form-group-login">
                 <button onClick={this.handleClick} className="btnform btn-registerForm">
                  Registrar
                </button>
              </div>
            </form>
            

            <div class="striped-loginForm">
              <span class="striped-line-loginForm"></span>
              <span class="striped-text-loginForm">O</span>
              <span class="striped-line-loginForm"></span>
            </div>
            <div class="method-loginForm">
              <div class="method-control-loginForm">
                <a href="#" class="method-action-loginForm">
                <Icon svg="googlec" classes="svg-icon" title="Googlec"/>
                  <span>Registrar con Google</span>
                </a>
              </div>
              <div class="method-control-loginForm">
                <a href="/" class="method-action-loginForm">
                  <Icon svg="facebookc" classes="svg-icon" title="Facebookc"/>
                  <span>Registrar con Facebook</span>
                </a>
              </div>
              <div className="form-register">
                <span>¿Ya tienes cuenta?&nbsp; &nbsp; </span>
                <Link to="/login">  Inicia Sesión</Link>
              </div>
              
            </div>
          </section>
        </div>
      );
    }
}
    

export default Register;