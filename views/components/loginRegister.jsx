var React = require('react');

class LoginRegister extends React.Component {
  render() {
    return (
        <div>
            <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title font-weight-bold" id="exampleModalLongTitle">New User Registration</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="/register" method="POST">
                                <div class="form-group">
                                    <label for="name">Username:</label>
                                    <input name="username" class="form-control col-3" id="name"/>
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Password:</label>
                                    <input name="password" class="form-control col-3" id="pwd"/>
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Home postal code:</label>
                                    <input name="postal" class="form-control col-3" id="pwd"/>
                                </div>

                                <div class="modal-footer border-0 pb-0">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title font-weight-bold" id="exampleModalLongTitle">User Login</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="/login" method="POST">
                                <div class="form-group">
                                    <label for="name">Username:</label>
                                    <input name="username" class="form-control col-3" id="name"/>
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Password:</label>
                                    <input name="password" class="form-control col-3" id="pwd"/>
                                </div>
                                <div class="modal-footer border-0 pb-0">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="new" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title font-weight-bold" id="exampleModalLongTitle">Host New Event</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action ="/activity/new" method ="POST">
                            <label class = "font-weight-bold">Activity Type</label>
                            <input type="text" class="p-0 pl-2 new-input mb-3" name="type" placeholder="Activity Type"/>

                            <label class = "font-weight-bold">Activity Title</label>
                            <input type="text" class="p-0 pl-2 new-input mb-3" name="name" placeholder="Activity Title"/>

                            <label class = "font-weight-bold">Max Pax</label>
                            <input type="text" class="p-0 pl-2 new-input mb-3" name="max_pax" placeholder="Max Pax"/>

                            <label class = "font-weight-bold">Event Address</label>
                            <input type="text" class="p-0 pl-2 new-input mb-3" name="event_address" placeholder="Address"/>

                            <label class = "font-weight-bold">Event Address Postal Code (Please enter the numeric digits only)</label>
                            <input type="text" class="p-0 pl-2 new-input mb-3" name="event_postal" placeholder="Postal Code"/>

                            <label class = "font-weight-bold">Date of Event</label>
                            <input type="date" class="p-0 pl-2 new-input mb-3" name="event_date"/>

                            <label class = "font-weight-bold">Start Time</label>
                            <input type="time" class="p-0 pl-2 new-input mb-3" name="start_time"/>

                            <label class = "font-weight-bold">Ending Time</label>
                            <input type="time" class="p-0 pl-2 new-input mb-3" name="end_time"/>

                            <label class = "font-weight-bold">Event Description</label>
                            <textarea type="text" name = "event_description" className="form-control p-0 pl-2 new-input mb-3" rows="3" placeholder="Describe event details"></textarea>

                            <label class = "font-weight-bold">Event Photo</label>
                            <input type="text" class="p-0 pl-2 new-input mb-3" name="event_photo" placeholder="Photo URL"/>

                            <div class="modal-footer border-0 pb-0">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Add New</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
  }
}

module.exports = LoginRegister;