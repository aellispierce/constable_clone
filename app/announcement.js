Path = require('path');
const path = new Path;
ConstableApi = require('constable-api');
const api = new ConstableApi

class Announcement {
  all(){
     return api.get(path.announcements())
  }

  create(formData){
     return api.post(path.announcements(), formData)
  }

  find(id){
     return api.get(path.show_announcement(id)).done(function(data) {
    });
  }

}

module.exports = Announcement
