var React = require('react');
var Layout = require('./components/layout.jsx');

class Home extends React.Component {
  render() {


    const activity = this.props.allActivities.map(activity =>{

        let eventURL ="/activity/"+activity.id;

        let eventDate = activity.event_date;
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = eventDate.getDate() + " " + months[eventDate.getMonth()];

        return (
            <li class="home-event-list">
                <a href={eventURL}>
                    <div class="row">
                        <div class="d-flex justify-content-center align-items-center col-2 text-uppercase font-weight-bold">
                            {date}
                        </div>
                        <div class="col">
                            <p class="text-uppercase font-weight-bold m-0">= {activity.type} =</p>
                            <p class="home-activity-name text-uppercase font-weight-bold m-0">{activity.name}</p>
                            <p class ="font-italic">Posted by: {activity.username}</p>
                        </div>
                    </div>
                </a>
            </li>
        )
    });



    return (
        <Layout>
           <div class = "container">
                <div class = "content">
                    <h1>Home</h1>
                    <div class="form-group">
                        <form action = '/activity/new' method ="GET">
                            <button type="submit" class="btn btn-outline-primary">Post New Activities</button>
                        </form>
                    </div>
                    <p className ="latest">Upcoming Activities </p>
                    <ul className = "event-listing-container">
                        {activity}
                    </ul>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Home;