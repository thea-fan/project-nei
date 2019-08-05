var React = require('react');
var Layout = require('./components/rootLayout.jsx');
var LoginRegister = require('./components/loginRegister.jsx');

class Root extends React.Component {
  render() {

    const activity = this.props.allActivities.map(activity =>{

        let eventURL ="/activity/"+activity.id;
        let startTime = activity.start_time;
        let endTime = activity.end_time;
        let eventDate = activity.event_date;
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
        let date = day[eventDate.getDay()] + ", " +eventDate.getDate() + " " + months[eventDate.getMonth()];

    return (
            <div class = "flex-item flex-item--shrink">
                 <div class = "card card--hasShadow card--hasShadowPlusHover eventCard exploreHome-nearByEvents exploreHome-eventCard buttonPersonality">
                    <a href={eventURL}>
                        <p class = "card-date m-0 p-2"><span class = "font-weight-bold">{date}</span> <span class = "font-italic">{startTime} - {endTime}</span></p>
                        <div class="card-body"><h4 class = "d-flex  align-items-center mb-2">{activity.name}</h4>Hosted By: {activity.username}</div>
                        <div class="card-footer"><button class="btn btn-outline-primary">I WANNA GO!</button></div>
                    </a>
                </div>
            </div>
        )
    });

    return (
        <Layout>
            <header>
                <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" type="video/mp4"/>
                </video>
                <LoginRegister/>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1 class="display-3">nēi</h1>

                            <p class="lead mb-0">Neighbours by chance.<br/> <span class = "font-italic">Friends by choice.</span></p><br/>
                             <div class="form-group d-flex row justify-content-center">
                            <button type="submit" class="myButton mx-3" data-toggle="modal" data-target="#register">
                              Register
                            </button>
                            <button type="submit" class="myButton mx-3" data-toggle="modal" data-target="#login">
                              Login
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class = "container">
                <div class = "section-title row">
                    <div class="col-6">
                        <h2 class = "d-flex align-items-center m-0"> Upcoming Activities</h2>
                    </div>
                    <div class="col-6 d-flex align-items-center justify-content-end">
                        <a href="/home">See more</a>
                    </div>
                </div>
                <section class="rowWrapper">
                    <div class ="hscrollContainer hscrollGradient--hidden _popularRow-module_popular_row__mobile_hscroll__1mq0u carouselWrapper">
                        <div class="hscroll">
                            <div class="hscroll-content">
                                <div class = "flex flex--row flex--spaceBetween carousel page-0">
                                    {activity}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class = "section-title row">
                    <div class="col-6">
                        <h2 class = "d-flex align-items-center m-0"> Categories</h2>
                    </div>
                    <div class="col-6 d-flex align-items-center justify-content-end">
                        <a href="#">See more</a>
                    </div>
                </div>
                <section class="col d-flex flex-wrap justify-content-around">
                    <div class = "category-card food col-3 card card--hasShadow card--hasShadowPlusHover eventCard justify-content-end text-center ">
                        <a href="#">
                            <p>Food</p>
                        </a>
                    </div>
                    <div class = "category-card exercise col-3 card card--hasShadow card--hasShadowPlusHover eventCard justify-content-end text-center ">
                        <a href="#">
                            <p>Exercise</p>
                        </a>
                    </div>
                    <div class = "category-card pets col-3 card card--hasShadow card--hasShadowPlusHover eventCard justify-content-end text-center ">
                        <a href="#">
                            <p>Pets</p>
                        </a>
                    </div>
                    <div class = "category-card chill col-3 card card--hasShadow card--hasShadowPlusHover eventCard justify-content-end text-center ">
                        <a href="#">
                            <p>Chill</p>
                        </a>
                    </div>
                    <div class = "category-card request col-3 card card--hasShadow card--hasShadowPlusHover eventCard justify-content-end text-center ">
                        <a href="#">
                            <p>Request</p>
                        </a>
                    </div>
                    <div class = "category-card shopping col-3 card card--hasShadow card--hasShadowPlusHover eventCard justify-content-end text-center ">
                        <a href="#">
                            <p>Shopping</p>
                        </a>
                    </div>
                </section>
            </div>
        </Layout>
    );
  }
}

module.exports = Root;