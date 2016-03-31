Announcement = require('announcement');
const announcement = new Announcement;

class AnnouncementValidator {
  validate(formData){
    const title = formData[0]["value"]
    const body = formData[1]["value"]
    if(title == ""){
      $("body").append('Title is required');
    } else if (body == ""){
      $("body").append('Body is required');
    } else {
      announcement.create(formData)
    }
  }
}

module.exports = AnnouncementValidator
