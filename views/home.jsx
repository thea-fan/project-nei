var React = require('react');
var Layout;
var memberNav = require('./components/layout.jsx');
var nonMemberNav = require('./components/rootLayout.jsx');

class Home extends React.Component {
  render() {

    if (this.props.status.loggedIn !== undefined ){
        Layout = memberNav;
    } else {
        Layout = nonMemberNav;
    }

    const activity = this.props.allActivities.map(activity =>{

        let eventURL ="/activity/"+activity.id;
        let userURL = "/user/"+activity.host_id;
        let eventDate = activity.event_date;
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
        let startTime = activity.start_time;
        let endTime = activity.end_time;
        let day = days[eventDate.getDay()]
        let date = eventDate.getDate() + " " + months[eventDate.getMonth()];

        return (
            <li class="home-event-list">
                    <div class="row">
                        <div class="d-flex text-center justify-content-center align-items-center col-2 text-uppercase font-weight-bold">
                            {day} <br/>
                            {date} <br/>
                            {startTime} - {endTime}
                        </div>
                        <div class="col">
                           <a href={eventURL}>
                            <span class="mt-3 badge badge-secondary">{activity.type}</span>
                            <p class="home-activity-name text-uppercase font-weight-bold mt-1 mb-1">{activity.name} <br/></p>
                            <h6><i class="fas fa-map-marker-alt"></i> {activity.event_address} S{activity.event_postal}</h6>
                            </a>
                            <p class ="font-italic">Posted by: <a href={userURL}>{activity.username}</a></p>
                        </div>
                    </div>
            </li>
        )
    });

    return (
        <Layout>
            <div class="homepage-banner d-flex text-center align-items-center justify-content-center flex-column">
                <h1 class="text-white mt-5">Join your nēighbours</h1>
                <input class="form-control homepage-searchbar" id="myInput" type="text" placeholder="Search for events by name, host, date, time location, or category"/>
                </div>
                <div class="container mt-3">
                <div class = "container">
                <div class = "content px-5">
                    <ul id="myTable" className = "event-listing-container mx-4 mb-5">
                        {activity}
                    </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Home;