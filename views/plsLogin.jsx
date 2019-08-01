var React = require('react');
var Layout = require('./components/layout.jsx');

class plsLogin extends React.Component {
  render() {
    return(
        <Layout>
             <div class = "container">
                <div class = "content">
                    <h1> You are not logged in.<br/> Pls login or register if you are a new user. </h1>
                    <div className = "page-button">
                        <form action = '/register' method ="GET">
                            <input type = "submit" value="Register Account" />
                        </form>
                        <form action = '/login' method ="GET">
                            <input type = "submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
  }
}

module.exports = plsLogin;