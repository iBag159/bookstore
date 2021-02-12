import React from "react";
import "./style/LoginForm.css";
import Icon from '../components/Icon'
import { Link } from 'react-router-dom';

class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      isLogined: false,
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }
  submitClick=() =>
  {
    if((this.state.username=="nsipiran@unitru.edu.pe") &&   (this.state.password=="1234"))
  {
    this.setState({isLogined:true});
    
         
    return this.props.history.push('/#');
    

  }
  

  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    if (!this.state.isLogined) {
      return this.setState({ error: 'Usuario o contraseña incorrecta' });
    }
    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
      return (
        <div className="formLogin-container">
          <section class="wrapper-login">
            <h1>Acceso a usuario</h1>
    
            <form onSubmit={this.handleSubmit} className="Loginform" >
              {
                this.state.error &&
                <h3 className="error-login" data-test="error" onClick={this.dismissError}>
                  
                  <button onClick={this.dismissError}>✖</button>
                 <a href="">{this.state.error}</a> 
                </h3>
              }
              <div className="form-group-login ">
                
                <input
                  value={this.state.username} 
                  onChange={this.handleUserChange}
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group-login">
                
                <input
                  value={this.state.password} 
                  onChange={this.handlePassChange}
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="form-group-login">
              <Link to="/password-recovery" class="text text-links">¿Olvidaste tu contraseña?</Link>
                <button  onClick={this.submitClick} className="btnform btn-loginform">
                  Ingresar
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
                <a href="/" class="method-action-loginForm">
                <Icon svg="googlec" classes="svg-icon" title="Googlec"/>
                  <span>Ingresar con Google</span>
                </a>
              </div>
              <div class="method-control-loginForm">
                <a href="/" class="method-action-loginForm">
                  <Icon svg="facebookc" classes="svg-icon" title="Facebookc"/>
                  <span>Ingresar con Facebook</span>
                </a>
              </div>
              <div className="form-register">
                <span>¿No tienes cuenta?&nbsp; &nbsp; </span>
                <Link to="/register">  Create una cuenta</Link>
              </div>
              
            </div>
          </section>
        </div>
      );
    }
}
    

export default Login;