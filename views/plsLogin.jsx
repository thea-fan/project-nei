var React = require('react');
var Layout = require('./components/rootLayout.jsx');
var LoginRegister = require('./components/loginRegister.jsx');

class plsLogin extends React.Component {
  render() {
    return(
        <Layout>
        <header>
                <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" type="video/mp4"/>
                </video>
                <LoginRegister/>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1>You are not logged in.<br/></h1>
                            <p class="lead mb-0"> Pls login, or register if you are a new user.</p><br/>
                             <div class="form-group d-flex row justify-content-center">
                            <button type="submit" class="myButton mx-3" data-toggle="modal" data-target="#register">
                              Register
                            </button>
                            <button type="submit" class="myButton mx-3" data-toggle="modal" data-target="#login">
                              Login
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Layout>
    )
  }
}

module.exports = plsLogin;