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

        let eventDate = activity.event_date;
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
        let day = days[eventDate.getDay()]
        let date = eventDate.getDate() + " " + months[eventDate.getMonth()];

        return (
            <li class="home-event-list">
                <a href={eventURL}>
                    <div class="row">
                        <div class="d-flex text-center justify-content-center align-items-center col-2 text-uppercase font-weight-bold">
                            {day} <br/>
                            {date}
                        </div>
                        <div class="col">
                            <span class="mt-3 badge badge-secondary">{activity.type}</span>
                            <p class="home-activity-name text-uppercase font-weight-bold mt-1 mb-1">{activity.name}</p>
                            <p class ="font-italic">Posted by: {activity.username}</p>
                        </div>
                    </div>
                </a>
            </li>
        )
    });

    return (
        <Layout>
            <div class="homepage-banner d-flex text-center align-items-center justify-content-center flex-column">
                <h1 class="text-white mt-5">Join your neighbours</h1>
                <input class="form-control homepage-searchbar" id="myInput" type="text" placeholder="Search for events by name, host, date, or category"/>
                </div>
                <div class="container mt-3">
                <div class = "container">
                <div class = "content px-5">
                    <ul id="myTable" className = "event-listing-container mx-4 ">
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