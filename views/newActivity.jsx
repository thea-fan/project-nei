var React = require("react");
var Layout = require('./components/layout.jsx');

class NewActivity extends React.Component {
  render() {
    return (
      <Layout>
         <div class = "container">
                <div class = "content">
                    <h1> Add New activity! </h1>
                    <form action ="/activity/new" method ="POST">

                        <h2>Activity Type</h2>
                        <input type="text" name="type" placeholder="Activity Type"/>

                        <h2>Activity Title</h2>
                        <input type="text" name="name" placeholder="Activity Title"/>

                        <h2>Max Pax</h2>
                        <input type="text" name="max_pax" placeholder="Max Pax"/>

                        <h2>Date of Event</h2>
                        <input type="date" name="event_date"/>

                        <br/><br/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = NewActivity;