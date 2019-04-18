var story = require('../controllers/story');
 
module.exports = {
  configure: function(app) {
  	app.route('/').get(story.indexWelcome);
    app.route('/story/getTitle').get(story.getTitle);
  }
};
