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
        let text = "SELECT * from users where username = $1";
        let values = [userDetails.username];

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

    let userProfile = (profile, cookies, callback) => {
        let query = "SELECT * FROM activity INNER JOIN users ON users.id = host_id WHERE users.id = $1";
        let values = [cookies.user_id]

        dbPoolInstance.query(query, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    // let distinctCategory = (category, callback) => {
    //     let query = "SELECT DISTINCT type FROM activity;";

    //     dbPoolInstance.query(query, (error, result) => {

    //         if( error ){
    //             callback(error, null);

    //         } else {
    //             callback(null, result);
    //          }
    //     });
    // }

    let showActivity = (activity, callback) => {
        let query = "SELECT * FROM activity INNER JOIN users ON users.id = host_id WHERE active = true ORDER BY event_date ASC limit 6 ";

        dbPoolInstance.query(query, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let postActivity = (activity, cookies, callback) => {
        let text = "INSERT INTO activity (host_id, type, name, max_pax, event_date) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        let values =[cookies.user_id, activity.type, activity.name, activity.max_pax, activity.event_date]

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
    userProfile,
    registerUser,
    loginUser,
  };
};