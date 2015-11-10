module.exports = function(server) {
  var User = server.models.User;
  User.settings.caseSensitiveEmail = false;
  User.create({
    email: 'Test@gmail.com', 
    password: 'pooky'
  }, function (err) {
    User.findOne({
      where: {
        email: 'test@gmail.com'
      } 
    }, function (err, user) {
      if (err) throw err;
      console.log(user);
    });
  });

  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};
