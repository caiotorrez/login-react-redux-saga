import React, { Component } from 'react';
import { LinearProgress, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import './login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from './redux/login.action';

class Login extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      remember: false
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    let {
      email,
      password,
      remember
    } = this.state;
    this.props.loginRequest(email, password, remember);
  }
  
  _url = 'http://demo.iprefeituras.com.br/uploads/config/16025/braso_city_Recovered.png';
  render() {
    let {isLoginSuccess, loginError, loading} = this.props;
    return (
      <div>
      { isLoginSuccess && <div>Login efetuado com sucesso!</div> }
      { (!isLoginSuccess) && <form onSubmit={this.onSubmit}>
      <LinearProgress className="progress-bar" color={loading ? 'secondary': null} />
        <div className="login-cardbox">
          <div className="login-img-logo" style={{backgroundImage: `url(${this._url})`}}></div>
          <TextField
            id="login-username-field"
            label="Usuário"
            className="login-cardbox-usernamefield"
            onChange={this.onChange}
            name="email"
            margin="normal"
            autoComplete="username"
          />
          <TextField
            id="login-password-field"
            label="Senha"
            className="login-cardbox-passwordfield"
            onChange={this.onChange}
            name="password"
            type="password"
            margin="normal"
            autoComplete="current-password"
          />
          <div className="login-container">
            <FormControlLabel className="login-checkbox"
              control={
                <Checkbox
                  checked={this.state.remember}
                  onChange={e => this.setState({remember: e.target.checked})}
                  color="primary"
                />
              } label="Lembrar"
            />
            <Button disabled={loading} type="submit" variant="contained" color="primary" className="login-button">Entrar</Button>
          </div>
          <div className="login-cardbox-links">
          { loginError && <div className="login-error-message">{loginError}</div> }
            <a href="https://facebook.com">Esqueceu a senha?</a>
            <span>Novo por aqui? <a href="/cadastro">Cadastrar</a></span>
          </div>
        </div>
        <span className="logo-company">101 Soluções © 2019</span>
      </form> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loginReducer.loading,
  isLoginSuccess: state.loginReducer.loginSuccess,
  loginError: state.loginReducer.error,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(loginActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);