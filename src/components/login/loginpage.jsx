import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class loginpage extends Component {
  render(){
    return (
      <div class="wrapper">
      <div class="login">
          <div>
            <form action="#" class="form-login">
              <div class="field-input">
                <input type="text" placeholder="Email" required class="in" />
              </div>
              <div class="field-input">
                <input type="password" placeholder="password" class="in" />
              </div>
              <div class="btn-login">
                <button type="submit" class="btn-in" name="button">LOGIN</button>
              </div>
            </form>
          </div>
          <div>
            <p class="form-text">Not a member ? <Link to="/sign-up">Sign up now</Link>.</p>
          </div>
      </div>
    </div>
    )
  }
}
