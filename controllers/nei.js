var sha256 = require('js-sha256');
const SALT = "project two gogogo";
const cookieParser = require('cookie-parser')

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

//app.GET (register)
    let registerController = (request, response) => {
        response.render('register');
    };

//app.POST (register)
    let registerPostController = (request, response) => {

        let hashedPassword = sha256( request.body.password + SALT );

        request.body.password = hashedPassword;

        db.nei.registerUser(request.body, (err, result) => {
            if (err) {
                response.send(err)

            } else {

                if (result) {
                    let user_id = result.rows[0].id;

                    let loggedInCookie = sha256( user_id + 'logged_id' + SALT );

                    response.cookie('user_name', result.rows[0].username);
                    response.cookie('loggedIn', loggedInCookie);
                    response.cookie('user_id', user_id);

                    response.redirect('/home');

                } else {
                    response.render('usernameTaken');
                }
            }
        });
    };

//app.GET (login)
    let loginController = (request, response) => {
        response.render('login');
    };

//app.POST (login)
    let loginPostController = (request, response) => {
        let hashedPassword = sha256( request.body.password + SALT );

        request.body.password = hashedPassword;

        db.nei.loginUser(request.body, (err, result) => {
            if (err) {
                response.send(err)

            } else {

                if(result.rows[0].password === hashedPassword) {
                    let user_id = result.rows[0].id;

                    let loggedInCookie = sha256( user_id + 'logged_id' + SALT );

                    response.cookie('user_name', result.rows[0].username);
                    response.cookie('loggedIn', loggedInCookie);
                    response.cookie('user_id', user_id);

                    response.redirect('/home');

                } else {
                    response.render('wrongPwd');
                }
            }
        });
    };

//app.GET (home - view all activities)
    let homeController = (request, response) => {

        if( request.cookies.loggedIn === undefined ){
            response.redirect('/');

        }else{

            db.nei.showActivity(request.body, (err, result) => {
                if (err) {
                    response.send(err)
                }

                else {
                    let data = {
                        allActivities : result.rows
                    }
                    response.render('home', data);
                }
            });
        };
    };

//app.GET (activity - view respective activity)
    let activityController = (request, response) => {
        let activityId = parseInt(request.params.id);

        db.nei.singleActivity(activityId, (err, result) => {
            if (err) {
                response.send(err)
            }
            else {
                let data = {
                    specificActivity : result.rows
                }
                response.render('singleActivity',data);
            }
        });
    };

//app.POST (attend activity)
    let attendController = (request, response) => {

        let activityId = parseInt(request.params.id);

        db.nei.attendActivity(activityId, request.cookies, (err, result) => {
            if (err) {
                response.send(err)
            }
            else {
                response.redirect('/profile')
            }
        });
    };

//app.GET (user profile)
    let profileController = (request, response) => {
        if( request.cookies.loggedIn === undefined ){
            response.render('plsLogin');

        }else{
            db.nei.singleActivity(request.body, request.cookies, (err, result) => {
                if (err) {
                    response.send(err)
                }

                else {

                    let data = {
                        userInfo : request.cookies,
                        activityInfo: result.rows
                    }
                    response.render('profile', data);
                }
            });
        };
    };

//app.GET (new - post new activity)
    let newController = (request, response) => {
        if( request.cookies.loggedIn === undefined ){
            response.render('plsLogin');

        }else{
            response.render('newActivity');
        }
    };

//app.POST (new - post new activity)
    let newPostController = (request, response) =>{

        db.nei.postActivity(request.body, request.cookies, (err, result) => {
            if (err) {
                response.send(err)

            } else {
                response.redirect('/profile')
            };
        });
    };

//app.GET (default home - not login)
    let rootController = (request, response) => {
        if( request.cookies.loggedIn !== undefined ){
            response.redirect('/home');

        }else{
            db.nei.activityOverview(request.body, (err, result) => {
                if (err) {
                    response.send(err)
                }

                else {
                    let data = {
                        allActivities : result.rows
                    }
                    response.render('root', data);
                }
            });
        }
    };

//app.GET (logout)
    let logoutController = (request, response) => {
        response.clearCookie('loggedIn');
        response.redirect('/')
    };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginController,
    loginPost: loginPostController,
    register: registerController,
    registerPost: registerPostController,
    profile: profileController,
    home: homeController,
    attend: attendController,
    activity: activityController,
    new: newController,
    newPost: newPostController,
    logout: logoutController,
    root: rootController,
  };

}