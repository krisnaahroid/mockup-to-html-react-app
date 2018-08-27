import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class registerpage extends Component {
  render() {
    return (
      <div class="wrapper-signup">
      <div class="login">
          <div>
            <form action="#" class="form-login">
              <div class="field-input">
                <input type="text" placeholder="Fullname" class="sign-up" />
              </div>
              <div class="field-input">
                <input type="text" placeholder="Email" class="sign-up" required />
              </div>
              <div class="field-input">
                <input type="password" placeholder="Password" class="sign-up" />
              </div>
              <div class="btn-register">
                <button type="submit" class="btn-reg" name="button">Register</button>
              </div>
            </form>
          </div>
          <div>
            <p class="form-text">Already registred! <Link to="/">Login me</Link>.</p>
          </div>
      </div>
    </div>
    )
  }
}
