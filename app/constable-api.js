Path = require('path');
const path = new Path;

class ConstableApi {
  getAnnouncements(){
    $.ajax({
      url: path.announcements(),
      method: 'GET'
    }).done(function(data) {
      var announcements = data.announcements;
      announcements.forEach(function(announcement){
        $("#response").append(path.link(announcement["id"], announcement["title"]))
      });
    });
  }

  showAnnouncement(id){
    $.ajax({
      url: path.show_announcement(id),
      method: 'GET'
    }).done(function(data) {
      $("#response").append(
          `${data.announcement["body"]} <br/> <br/>`)
    });
  }

  newAnnouncement(){
    $.ajax({
      url: path.announcements(),
      method: 'post',
      dataType: 'application/json',
      data: $("#new").serializeArray()
    }).done(function(data) {
      $("#response").append(
          `${data.announcement["body"]} <br/> <br/>`)
    });
  }
}
module.exports = ConstableApi
