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

  validate(e){
    e.preventDefault();
    const formData= $("#new").serializeArray();
    if(formData[0]["value"] == ""){
      $("body").append('Title is required');
    } else if (formData[1]["value"] == ""){
      $("body").append('Body is required');
    } else {
      announcement.create()
    }
  }
}

module.exports = Announcement
