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

    app.post('/activity/new', neiController.newPost);
    app.get('/activity/new', neiController.new);
    app.put('/activity/:id/edit', neiController. editPostPut);
    app.get('/activity/:id/edit', neiController. editPost);
    app.delete('/activity/:id', neiController.deleteAttending);
    app.post('/activity/:id', neiController.attend);
    app.get('/activity/:id', neiController.activity)
    app.get('/activity', neiController.home);
    app.post('/login', neiController.loginPost);
    app.get('/login', neiController.login);
    app.post('/register', neiController.registerPost);
    app.get('/register', neiController.register);
    app.get('/profile', neiController.profile);
    app.get('/home', neiController.home);
    app.get('/logout', neiController.logout);
    app.get('/', neiController.root);

};