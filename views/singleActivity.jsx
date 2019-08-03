var React = require('react');
var Layout = require('./components/layout');

class singleActivity extends React.Component {
  render() {
    let activity = this.props.specificActivity[0];
    let eventDate = activity.event_date;
    let postURL = "/activity/"+this.props.Id;
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = eventDate.getDate() + " " + months[eventDate.getMonth()];

    let respondents = "";
    if (this.props.specificActivity[0].respondent_id === null) {
        respondents = <li>No neighbour has responded yet. <br/> Why not be the first to do so?</li>;
    }
    else if (this.props.specificActivity) {
        respondents = this.props.specificActivity.map(activity =>{
            return (<li>{activity.respondent_name}</li>);
        });
    }


    return (
        <Layout>
           <div class = "container">
                <div class = "content">
                    <h2>
                        {date}
                    </h2>
                    <h1>
                        {activity.name}
                    </h1>
                    <h2>
                        Hosted by: {activity.username}
                    </h2>
                    <div>
                        <p>Going for the activity?</p>
                        <div class = "row">
                            <form action = {postURL} method ="POST">
                                <button type="submit" class="btn btn-outline-primary">✓</button>
                            </form>
                            <button class="btn btn-outline-primary">✗</button>
                        </div>
                    </div>
                    <div>
                        ACTIVITY IMAGE
                    </div>
                    <h2>
                        Description
                    </h2>
                    <p>
                        Some text
                    </p>
                    <h2>
                        Neighbours who are attending:
                    </h2>
                    <div>
                        <ul>{respondents}</ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = singleActivity;