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
        </div>
     );
  }
}

module.exports = LoginRegister;