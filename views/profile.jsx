var React = require('react');
var Layout = require('./components/layout.jsx');

class userProfile extends React.Component {
  render() {
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let attend = "";
    if (this.props.attending.length=== 0){
        attend = <li class="d-flex justify-content-between list-group-item">No events yet!<br/><form action = "/home"><button class="myButton"> Browse events </button></form></li>;
    }
    else if (this.props.attending) {
        attend = this.props.attending.map(activity =>{
            let attendingURL = "/activity/" + activity.activity_id;
            let deleteURL = "/activity/"+ activity.activity_id + "?_method=DELETE";
            let eventDate = activity.event_date;
            let date = eventDate.getDate() + " " + months[eventDate.getMonth()];

            return (
                <li class="d-flex justify-content-between list-group-item">
                    <a href={attendingURL}>{date} - {activity.name}
                    </a>
                    <form action ={deleteURL} method ="POST"><button name = "activity_id" type="submit" class="myButton">Oops I've changed my mind~</button>
                </form>
                </li>
            );
        });
    };


    let post = "";
    if (this.props.posted.length === 0){
        post = <li class="d-flex justify-content-between list-group-item">You have not post any event before.<br/> Add one now!<form action = "/activity/new"><button class="myButton"> Post an event </button></form></li>;
    }
    else if (this.props.posted) {
        post =  this.props.posted.map(activity =>{
            let postedURL = "/activity/" + activity.id;
            let editURL = "/activity/"+ activity.id + "/edit";
            let deleteURL = "/activity/" + activity.id +"/delete?_method=DELETE";
            let eventDate = activity.event_date;
            let date = eventDate.getDate() + " " + months[eventDate.getMonth()];

            return (
                <li class="d-flex justify-content-between list-group-item">
                    <a href={postedURL}>{date} - {activity.name}
                    </a>
                    <form action ={editURL} method ="GET"><button name = "activity_id" type="submit" class="myButton">Edit</button>
                    </form>
                    <form action ={deleteURL} method ="POST"><button type="submit" class="myButton">Delete Event</button>
                </form>
                </li>
            );
        });
    };


    return(
        <Layout>
             <div class = "container">
                <div class = "content">
                    <h1>Welcome, {this.props.userInfo.user_name}! </h1>
                    <h2>Activities you are attending</h2>
                    <ul class="list-group">
                        {attend}
                    </ul>
                    <h2>Activities Hosted by you</h2>
                    <ul class="list-group">
                        {post}
                    </ul>
                </div>
            </div>
        </Layout>
    )
  }
}


module.exports = userProfile;