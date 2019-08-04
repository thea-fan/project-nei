var React = require('react');
var Layout = require('./components/rootLayout.jsx');

class wrongPwd extends React.Component {
  render() {
    return (
        <Layout>
             <div class = "container px-5 pt-5">
                <div class = "content">
                    <h1>Oops! Wrong Password!<br/>Please try again.</h1>
                    <form action="/login" method="POST">
                        <div class="form-group">
                            <label for="name">Username:</label>
                            <input name="name" class="form-control col-3" id="name"/>
                          </div>
                          <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input name="password" class="form-control col-3" id="pwd"/>
                          </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = wrongPwd;