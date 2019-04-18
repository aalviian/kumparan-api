var db = require('../../config/db');

function Story() {
  
  var _this = this;
  this.indexWelcome = = function(req, res) {
    return res.json({status: 200, message: 'Welcome to Kumparan API'});
  };

  this.getTitle = function(req, res) {
    console.log(req.query.id);
    db.acquire(function(err, con) {
      con.query('SELECT * FROM stories WHERE story_id = ?', [req.query.id], function(err, data) {
        if (err) {
          return res.json({status: 400, message: 'Failed, connection error', result: err});
        } else {
          if(data.length == 0){
            return res.json({status: 201, message: 'Data was not found'});
          } else {
             return res.json({status: 200, message: 'Successfully get data', data: {title: data[0].title}});
          }
        }
      });
    });
  };
}

module.exports = new Story();
