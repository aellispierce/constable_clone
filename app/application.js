"use strict";

const root = 'http://localhost:4000/api';
const origin = window.location.origin;

function link(id, text){
  return `<a href= ${origin}/announcement.html?id=${id}>${text}<br/><br/></a>`
}

var App = {
  init: function init() {
    $("body").prepend(
        `<a href = ${origin}/new.html> + </a>`)
  },
  path: class Path {
    announcements() {
      `${root}/announcements`
    }

  },
  constableApi: class ConstableApi {
    getAnnouncements(){
      $.ajax({
        url: Path.announcements(),
        method: 'GET'
      }).done(function(data) {
        var announcements = data.announcements;

        announcements.forEach(function(announcement){
          $("#response").append(link(announcement["id"], announcement["title"]))
        });
      });
    }

    showAnnouncement(id){
      $.ajax({
        url: root + '/announcements/' + id,
        method: 'GET'
      }).done(function(data) {
        $("#response").append(
            `${data.announcement["body"]} <br/> <br/>`)
      });
    }

    newAnnouncement(){
      $.ajax({
        url: root + '/announcements',
        method: 'post',
        dataType: 'application/json',
        data: $("#new").serializeArray()
      }).done(function(data) {
        $("#response").append(
          `${data.announcement["body"]} <br/> <br/>`)
      });
    }
  }
};

module.exports = App
