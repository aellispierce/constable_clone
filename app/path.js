const root = 'http://localhost:4000/api';
const origin = window.location.origin;

class Path {
  announcements() {
    return `${root}/announcements`
  }
  link(id, text){
    return `<a href= ${origin}/announcement.html?id=${id}>${text}<br/><br/></a>`
  }
  show_announcement(id) {
    return `${root}/announcements/${id}`
  }
}
module.exports = Path
