/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let registerUser = (userDetails, callback) => {
        let text = "SELECT username FROM users WHERE username = $1";
        let values = [userDetails.username];

        dbPoolInstance.query(text, values, (error, result) => {

            if( error ){
            callback(error, null);

            } else {
                if (result.rows.length > 0) {
                    callback(null, null);

                } else {
                    let query = "INSERT INTO users (username, password, postalCode) values ($1, $2, $3) RETURNING *";
                    let values = [userDetails.username, userDetails.password, userDetails.postal];

                    dbPoolInstance.query(query, values, (error, result) => {
                        if( error ){
                            callback(error, null);

                        } else {
                            callback(null, result);
                        }
                    });
                }
            }
        });
    }

    let loginUser = (userDetails, callback) => {
        let text = "SELECT * from users where LOWER(username) = $1";
        let values = [userDetails.username.toLowerCase()];

        dbPoolInstance.query(text, values, (error, result) => {

            if( error ){
            callback(error, null);

            } else {
                    if( error ){
                        callback(error, null);

                    } else {
                        callback(null, result);
                }
            }
        });
    }

    let attending = (profile, cookies, callback) => {
        let query = "select * from respondent inner join activity on activity_id = activity.id inner join users on host_id = users.id where respondent_id = $1 and active = true order by event_date asc";

        let values = [cookies.user_id];

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let otherAttending = (userId, callback) => {
        let query = "select * from respondent inner join activity on activity_id = activity.id inner join users on host_id = users.id where respondent_id = $1 and active = true order by event_date asc";

        let values = [userId];

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let otherPosted = (userId, callback) => {
        let query = "select * from activity where host_id = $1 order by event_date asc";

        let values = [userId];

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let postedActivity = (activity, cookies, callback) => {
        let query = "select * from activity where host_id = $1 order by event_date asc";

        let values = [cookies.user_id];

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let deletePost = (activity, cookies, callback) => {
        let query = "delete from activity where activity.id = $1 and host_id = $2 returning *";

        let values = [activity, cookies.user_id];

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let submitEdit = (activity, Id, cookies, callback) => {
        let query = "update activity set type = $1, name = $2, max_pax = $3, event_address= $4, event_postal= $5, event_description= $6, event_photo= $7, event_date= $8, start_time= $9, end_time= $10 where id = $11 and host_id = $12 returning *";
        let values = [activity.type, activity.name, parseInt(activity.max_pax), activity.event_address, parseInt(activity.event_postal), activity.event_description, activity.event_photo, activity.event_date, activity.start_time, activity.end_time, Id, parseInt(cookies.user_id)];

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let activityOverview = (activity, callback) => {
        let query = "SELECT activity.start_time, activity.end_time, activity.id, host_id, type, name, max_pax, created_at, event_date, active, username FROM activity INNER JOIN users ON users.id = host_id WHERE active = true ORDER BY event_date ASC limit 6 ";

        dbPoolInstance.query(query, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let singleActivity = (activity, cookies, callback) => {
        let query = "select * from activity left join respondent on activity_id = activity.id inner join users on host_id = users.id where activity.id = $1";

        let values = [activity];

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let deleteAttending = (activity, cookies, callback) => {
        let query = "delete from respondent where respondent_id = $1 and activity_id = $2 returning *";

        let values = [cookies.user_id, activity];

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let attendActivity = (activity, cookies, callback) => {
        let query = "insert into respondent (activity_id, respondent_id, respondent_name) values ($1, $2, $3) returning *";

        let values = [activity, cookies.user_id, cookies.user_name];

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let showActivity = (activity, cookies, callback) => {
        let query = "SELECT start_time, event_address, event_postal, end_time, activity.id, host_id, type, name, max_pax, created_at, event_date, active, username FROM activity INNER JOIN users ON users.id = host_id WHERE active = true ORDER BY event_date ASC";

        dbPoolInstance.query(query, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let postActivity = (activity, cookies, callback) => {
        let text = "INSERT INTO activity (host_id, host_postal, type, name, max_pax, event_address, event_postal, event_description, event_photo, event_date, start_time, end_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *";
        let values =[parseInt(cookies.user_id), parseInt(cookies.user_postal), activity.type, activity.name, parseInt(activity.max_pax), activity.event_address, parseInt(activity.event_postal), activity.event_description, activity.event_photo, activity.event_date, activity.start_time, activity.end_time]

        dbPoolInstance.query(text, values, (error, result) => {
            if( error ){
            callback(error, null);

            } else {
                callback(null, result);
            }
        });
    }





  return {
    postActivity,
    showActivity,
    singleActivity,
    deleteAttending,
    submitEdit,
    deletePost,
    attendActivity,
    activityOverview,
    attending,
    otherAttending,
    otherPosted,
    postedActivity,
    registerUser,
    loginUser,
  };
};