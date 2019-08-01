module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const neiController = require('./controllers/nei')(allModels);

    app.post('/login', neiController.loginPost);
    app.get('/login', neiController.login);
    app.post('/register', neiController.registerPost);
    app.get('/register', neiController.register);
    app.get('/profile', neiController.profile);
    app.post('/new', neiController.newPost);
    app.get('/new', neiController.new);
    app.get('/home', neiController.home);
    app.get('/logout', neiController.logout);
    app.get('/', neiController.root);

};