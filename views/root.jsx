var React = require('react');
var Layout = require('./components/layout.jsx');

class Root extends React.Component {
  render() {

    let typeArray = [];
    this.props.allActivities.map(activity => {
        typeArray.push(activity.type);
    });
    typeArray = [...new Set(typeArray)];

    const type = typeArray.map(type =>{
        return(
                 <div class = "category-card col-3 card card--hasShadow card--hasShadowPlusHover eventCard justify-content-center text-center ">
                    <a href="#">
                        <h1>{type}</h1>
                    </a>
                </div>
        )
    });

    const activity = this.props.allActivities.map(activity =>{

        let eventDate = activity.event_date;
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = eventDate.getDate() + "-" + months[eventDate.getMonth()] + "-" + eventDate.getFullYear();

    return (
            <div class = "flex-item flex-item--shrink">
                 <div class = "card card--hasShadow card--hasShadowPlusHover eventCard exploreHome-nearByEvents exploreHome-eventCard buttonPersonality">
                    <a href="#">
                        <div class="card-header">{activity.type}</div>
                        <div class="card-body">{date}<br/><br/>{activity.name}</div>
                        <div class="card-footer">By: {activity.username}</div>
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
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1 class="display-3">nei</h1>
                            <p class="lead mb-0">Neighbours by chance.<br/> Friends by choice.</p><br/>
                            <div class="form-group row centered">
                                <form className = 'account-btn' action = '/register' method ="GET">
                                    <button type="submit" class="myButton">Register
                                    </button>
                                </form>
                                <form className = 'account-btn' action = '/login' method ="GET">
                                    <button type="submit" class="myButton">Login
                                    </button>
                                </form>
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
                        <a href="#">See more</a>
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
                    {type}
                </section>
            </div>
        </Layout>
    );
  }
}

module.exports = Root;