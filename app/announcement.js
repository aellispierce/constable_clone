Path = require('path');
const path = new Path;
ConstableApi = require('constable-api');
const api = new ConstableApi

class Announcement {
  all(){
     return api.get(path.announcements())
  }

  create(){
     return api.post(path.announcements(), $("#new").serializeArray())
  }

  find(id){
     return api.get(path.show_announcement(id)).done(function(data) {
    });
  }

  show(data){
    $("#response").append(
        `${data.announcement["body"]} <br/> <br/>`)
  }

  index(data){
    var announcements = data.announcements;
    announcements.forEach(function(announcement){
      $("#response").append(path.link(announcement["id"], announcement["title"]))
    });
  }
}

module.exports = Announcement
