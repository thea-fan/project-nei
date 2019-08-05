var React = require('react');
var React = require('react');
var Banner = require('./components/headerBanner.jsx');
var Layout;
var memberNav = require('./components/layout.jsx');
var nonMemberNav = require('./components/rootLayout.jsx');

class singleActivity extends React.Component {
  render() {
    if (this.props.status.loggedIn !== undefined ){
        Layout = memberNav;
    } else {
        Layout = nonMemberNav;
    }

    let activity = this.props.specificActivity[0];
    let eventDate = activity.event_date;
    let postURL = "/activity/"+this.props.Id;
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    let date = day[eventDate.getDay()] + ", " +eventDate.getDate() + " " + months[eventDate.getMonth()];

    let respondents = "";
    if (this.props.specificActivity[0].respondent_id === null) {
        respondents = <li>No neighbour has responded yet. <br/> Why not be the first to do so?</li>;
    }
    else if (this.props.specificActivity) {
        respondents = this.props.specificActivity.map(activity =>{
            return (<li class ="single-li m-2">{activity.respondent_name}</li>);
        });
    }

    return (
        <Layout>
            <Banner/>
           <div class = "container">
                <div class = "col activity-banner d-flex flex-column justify-content-center border-bottom border-secondary">
                    <h1 class = "text-uppercase font-weight-bold m-0">{activity.name}</h1>
                    <h2 class="font-italic">Hosted by: {activity.username}</h2>
                </div>
                <div class = "row px-4">
                    <div class = "col-9 mt-4 pr-3">
                        <div>
                        ACTIVITY IMAGE
                        </div>
                        <h3>
                            Description
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, eros sit amet viverra fermentum, nunc mi vestibulum nunc, eget sollicitudin sem purus a orci. Proin quis purus et risus malesuada varius. Mauris sed laoreet nisi, ut tempus ligula. Curabitur suscipit augue nec est eleifend elementum. Aliquam sed imperdiet mi. Suspendisse placerat suscipit eros, in efficitur risus ultricies at. Cras at finibus sapien, bibendum pharetra ipsum. Sed turpis sapien, laoreet sit amet nibh in, fermentum accumsan erat. Fusce ultricies dapibus urna nec tempus.

                                Etiam nec nibh laoreet, tempus felis a, ultrices orci. Curabitur eget scelerisque nibh, eu commodo eros. Fusce hendrerit sem in dignissim molestie. Maecenas vitae odio consectetur, luctus massa vestibulum, vehicula augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed quis ante dictum, mollis leo at, finibus ex. Etiam in egestas mi, id tincidunt dui. In hac habitasse platea dictumst. Ut tempus varius lectus nec elementum. Nulla elementum iaculis magna quis blandit. Donec faucibus scelerisque urna, at eleifend ex ultricies a.
                        </p>
                        </div>
                        <div class ="col-3 mt-4">
                        <h5 class = "font-weight-bold mb-3"><u>Date of event</u></h5><h4>{date}</h4>
                        <h5 class = "font-weight-bold mt-5 mb-3"><u>Are you going?</u></h5>
                        <div class = "row">
                            <form action = {postURL} method ="POST">
                                <button type="submit" class="attendance-button btn mx-2 myButton">✓</button>
                            </form>
                            <button class="attendance-button btn mx-2 myButton">✗</button>
                        </div>
                        <h5 class="mt-5 mb-3"><u>
                            Attending Neighbours:
                        </u></h5>
                        <div>
                        <ul class = "d-flex flex-wrap">{respondents}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = singleActivity;