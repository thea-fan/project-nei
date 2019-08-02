var React = require('react');
var Layout = require('./components/layout.jsx');

class userProfile extends React.Component {
  render() {
        let eventURL = "/activity/" + this.props.attending.activity_id;
        // let deleteurl = "/artist/" + this.props.id + "/delete";
        // let songPage = "/artist/" + this.props.id + "/songs";

    const attend = this.props.attending.map(activity =>{
        let eventURL = "/activity/" + activity.activity_id;
        let url = "/activity/"+ activity.activity_id + "?_method=DELETE";
        let eventDate = activity.event_date;
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = eventDate.getDate() + " " + months[eventDate.getMonth()];

        return (
            <li class="d-flex justify-content-between list-group-item">
                <a href={eventURL}>{date} - {activity.name}
                </a>
                <form action ={url} method ="POST"><button type="submit" class="myButton">Oops I change my mind~</button>
            </form>
            </li>
        );
    });


    return(
        <Layout>
             <div class = "container">
                <div class = "content">
                    <h1>Welcome, {this.props.userInfo.user_name}! </h1>
                    <h2>Activities you are attending</h2>
                    <ul class="list-group">
                    {attend}
                    </ul>
                </div>
            </div>
        </Layout>
    )
  }
}


module.exports = userProfile;