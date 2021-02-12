import React from "react";
import "./style/LoginForm.css";



class PassRecovery extends React.Component{
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
            <h1 className="recovery-form">Recuperar contraseña</h1>
    
            <form onSubmit={this.handleSubmit} className="Loginform" >
              
              <div className="form-group-login">
                
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="ingrese contraseña"
                />
              </div>
              <div className="form-group-login">
                
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="repita contraseña"
                />
              </div>
              
              <div className="form-group-login">
                 <button onClick={this.handleClick} className="btnform btn-registerForm">
                  Cambiar contraseña
                </button>
              </div>
            </form>
            

            
              
            
          </section>
        </div>
      );
    }
}
    

export default PassRecovery;