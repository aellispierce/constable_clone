Path = require('path');
const path = new Path;
Announcement = require('announcement');
const announcement = new Announcement;

class AnnouncementPresenter {
  show(id){
    announcement.find(id).done(function(data){
      $("#response").append(
          `${data.announcement["body"]} <br/> <br/>`)
    });
  }

  index(){
    announcement.all().done(function(data){
      data.announcements.forEach(function(announcement){
        $("#response").append(path.link(announcement["id"], announcement["title"]))
      });
    });
  }
}

module.exports = AnnouncementPresenter
