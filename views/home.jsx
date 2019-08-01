var React = require('react');
var Layout = require('./components/layout.jsx');

class Home extends React.Component {
  render() {
    const activity = this.props.allActivities.map(activity =>{
        console.log(activity);

        let eventDate = activity.event_date;
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = eventDate.getDate() + "-" + months[eventDate.getMonth()] + "-" + eventDate.getFullYear();

        return (


            <div className = "single-tweed">
                <p><span className = 'activity-type'>{activity.type}</span>   ==== {activity.name} on {date} - Post by {activity.username}</p>
            </div>
        )
    });


    return (
        <Layout>
        <div class = "find-navbar-wrap">
        <div id="findNavBar" class="find-navbar line">
        <div class="unit size5of7">
        </div>
        </div>
        </div>
           <div class = "container">
                <div class = "content">
                    <h1>Home</h1>
                    <div class="form-group">
                        <form action = '/new' method ="GET">
                            <button type="submit" class="btn btn-outline-primary">Post New Activities</button>
                        </form>
                    </div>
                    <p className ="latest">Upcoming Activities </p>
                    <div className = "display-tweeds">
                        {activity}
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Home;