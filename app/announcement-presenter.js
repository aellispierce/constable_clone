Path = require('path');
const path = new Path;

class AnnouncementPresenter {
  show(announcement){
    $("#response").append(`${announcement["body"]} <br/> <br/>`)
  }

  index(announcements){
      announcements.forEach(function(announcement){
        $("#response").append(
            path.link(announcement["id"], announcement["title"])
            )
    });
  }
}

module.exports = AnnouncementPresenter
