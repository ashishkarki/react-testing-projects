import * as React from 'react'
import { LoginService } from '../services/LoginService'

interface CredentialsState {
  userName: string
  password: string
  isLoggedIn: boolean
  loginAttempted: boolean
}

interface CustomEvent {
  target: HTMLInputElement
}

export class Login extends React.Component<{}, CredentialsState> {
  state: CredentialsState = {
    password: '',
    userName: '',
    isLoggedIn: false,
    loginAttempted: false,
  }

  private loginService: LoginService = new LoginService()

  private async handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    console.log('Click!!!!')
    const loginResponse = await this.loginService.login(
      this.state.userName,
      this.state.password
    )
    this.setState({
      loginAttempted: true,
      isLoggedIn: loginResponse,
    })
  }

  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value })
  }
  private setUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value })
  }

  render() {
    let loginLabel = <label>Did you enter your creds??</label>
    if (this.state.loginAttempted) {
      if (this.state.isLoggedIn) {
        loginLabel = <label>Login successful</label>
      } else {
        loginLabel = <label>Login failed</label>
      }
    }

    return (
      <div>
        <form
          data-test='login-form'
          onSubmit={e => this.handleSubmit(e)}
          style={{
            margin: '2rem 20%',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            border: '3px groove brown',
          }}
        >
          <input
            data-test='login-input'
            name='login'
            value={this.state.userName}
            onChange={e => this.setUserName(e)}
            required
          />
          <br />
          <input
            data-test='password-input'
            name='password'
            value={this.state.password}
            onChange={e => this.setPassword(e)}
            type='password'
            required
          />
          <br />
          <input data-test='submit-button' type='submit' value='Login' />
          <br />
        </form>

        <div
          style={{
            margin: '1rem 20%',
            padding: '0.5rem',
            border: '2px solid brown',
            color: this.state.isLoggedIn ? 'green' : 'red',
          }}
        >
          {loginLabel}
        </div>
      </div>
    )
  }
}