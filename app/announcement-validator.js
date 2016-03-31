Announcement = require('announcement');
const announcement = new Announcement;

class AnnouncementValidator {
  validate(formData){
    const title = formData[0]["value"]
    const body = formData[1]["value"]
    if(title == ""){
      return {valid: false, error: 'Title is required'};
    } else if (body == ""){
      return {valid: false, error: 'Body is required'}
    } else {
      return {valid: true, error: null}
    }
  }
}

module.exports = AnnouncementValidator
