import React from "react";

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }
    
      handleChange(event) {
        this.setState({username: event.target.value});
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username + 'Password: ' + this.state.password);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              
              <div>Name: <input type="text" value={this.state.username} onChange={this.handleChange} /></div>
              <div>Senha: <input type="password" value={this.state.value} onChange={this.handleChangePassword} /></div>
              
            </label>
            <div><input type="submit" value="Submit" /></div>
          </form>
        );
      }
    }