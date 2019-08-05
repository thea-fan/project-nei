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
    let startTime = activity.start_time;
    let endTime = activity.end_time;
    let eventAddress = activity.event_address;
    let eventPostal = activity.event_postal;

    let respondents = "";
    if (this.props.specificActivity[0].respondent_id === null) {
        respondents = <li>No neighbour <br/>has responded yet. <br/> Why not be the first to do so?</li>;
    }
    else if (this.props.specificActivity) {
        respondents = this.props.specificActivity.map(activity =>{
            return <li class ="single-li m-2">{activity.respondent_name}</li>;
        });

    }

    return (
        <Layout>
            <Banner/>
           <div class = "container">
                <div class = "col activity-banner d-flex flex-column justify-content-center border-bottom border-secondary">
                    <h1 class = "text-uppercase font-weight-bold mb-1">{activity.name}</h1>
                    <h3 class="font-italic">Hosted by: {activity.username}</h3>
                </div>
                <div class = "row px-4">
                    <div class = "col-9 mt-4 pr-3">
                        <div>
                        <img src={activity.event_photo}/>
                        </div>
                        <h3 class="mt-3">
                            Description
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, eros sit amet viverra fermentum, nunc mi vestibulum nunc, eget sollicitudin sem purus a orci. Proin quis purus et risus malesuada varius. Mauris sed laoreet nisi, ut tempus ligula. Curabitur suscipit augue nec est eleifend elementum. Aliquam sed imperdiet mi. Suspendisse placerat suscipit eros, in efficitur risus ultricies at. Cras at finibus sapien, bibendum pharetra ipsum. Sed turpis sapien, laoreet sit amet nibh in, fermentum accumsan erat. Fusce ultricies dapibus urna nec tempus.

                                Etiam nec nibh laoreet, tempus felis a, ultrices orci. Curabitur eget scelerisque nibh, eu commodo eros. Fusce hendrerit sem in dignissim molestie. Maecenas vitae odio consectetur, luctus massa vestibulum, vehicula augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed quis ante dictum, mollis leo at, finibus ex. Etiam in egestas mi, id tincidunt dui. In hac habitasse platea dictumst. Ut tempus varius lectus nec elementum. Nulla elementum iaculis magna quis blandit. Donec faucibus scelerisque urna, at eleifend ex ultricies a.
                        </p>
                        </div>
                        <div class ="col-3 mt-4">
                        <div class = "row">
                        <i class="col-1 d-flex align-items-center p-0 far fa-clock"></i><h5 class ="col"><u>{date}<br/></u>Start time: {startTime}<br/>End time: {endTime}</h5>
                       </div>
                       <div class = "row mt-3">
                        <i class="fas fa-map-marker-alt"></i><h5 class ="col">{eventAddress}<br/>{eventPostal}</h5>
                       </div>
                        <h5 class = " offset-1 font-weight-bold mt-3 mb-3"><u>Are you going?</u></h5>
                        <div class = "offset-1 row">
                            <form action = {postURL} method ="POST">
                                <button type="submit" class="attendance-button btn mr-2 myButton">✓</button>
                            </form>
                            <button class="attendance-button btn mx-2 myButton">✗</button>
                        </div>
                        <h5 class="offset-1 mt-4 mb-2"><u>
                            Attending Neighbours:
                        </u></h5>
                        <div>
                        <ul class = "offset-1 d-flex flex-wrap">{respondents}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = singleActivity;