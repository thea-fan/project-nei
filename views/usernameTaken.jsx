var React = require('react');
var Layout = require('./components/rootLayout.jsx');

class Taken extends React.Component {
  render() {
    return (
        <Layout>

        <header>
            <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" type="video/mp4"/>
                </video>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1>Sorry, the username has been taken.<br/></h1>

                            <p class="lead mb-0">Please try something else.</p><br/>
                        </div>
                    </div>
                </div>
                </header>

             <div class = "container px-5">
                <div class = "content">
                    <form action="/register" method="POST">
                        <div class="form-group">
                            <label for="name">Username:</label>
                            <input name="name" class="form-control col-3" id="name"/>
                          </div>
                          <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input name="password" class="form-control col-3" id="pwd"/>
                          </div>
                          <div class="form-group">
                            <label for="pwd">Home postal code:</label>
                            <input name="postal" class="form-control col-3" id="pwd"/>
                          </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Taken;