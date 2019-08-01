var React = require('react');
var Layout = require('./components/layout.jsx');

class userProfile extends React.Component {
  render() {
        // let editurl = "/artist/" + this.props.id + "/edit";
        // let deleteurl = "/artist/" + this.props.id + "/delete";
        // let songPage = "/artist/" + this.props.id + "/songs";


    return(
        <Layout>
             <div class = "container">
                <div class = "content">
                    <h1>{this.props.userInfo.user_name}</h1>
                </div>
            </div>
        </Layout>
    )
  }
}


module.exports = userProfile;