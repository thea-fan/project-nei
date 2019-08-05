var React = require('react');
var LoginRegister = require('./loginRegister.jsx');

class Layout extends React.Component {
  render() {
    return(
        <html>
            <head>
            <link href="https://fonts.googleapis.com/css?family=Hind+Madurai|Righteous&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://www.meetup.com/mu_static/en-US/main.6e568a31.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            </head>

            <body>

            <nav class="fixed-top d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/home"><div class="main-icon"/>nēi</a>
                <div class = "d-flex justify-content-evenly">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link mr-4" href="/home">Home</a>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link mr-4" href="" data-toggle="modal" data-target="#new">Post an Event</a>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link mr-4" href="/profile">Profile</a>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link mr-4" href="/logout">Logout</a>
                  </li>
                </ul>
                </div>
            </nav>
                {this.props.children    }
                <LoginRegister/>
                <div class="col-12 footer-copyright text-center py-3">© 2019 Copy not righted
                    <a href="/"> nēi</a>
                </div>
                <script src="./script.js"/>
            </body>
        </html>
    )
  }
}


module.exports = Layout;