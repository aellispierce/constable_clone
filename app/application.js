"use strict";

var root = 'http://localhost:4000/api';
var origin = window.location.origin;

var App = {
    init: function init() {
          $("body").prepend(
              `<a href = ${origin}/new.html> + </a>`)
            },
    getAnnouncements: function getAnnouncements(){
      $.ajax({
        url: root + '/announcements',
        method: 'GET'
      }).done(function(data) {
        var announcements = data.announcements;

        announcements.forEach(function(announcement){
        $("#response").append(
          `<a href= ${origin}/announcement.html?id=${(announcement["id"])}>
          ${announcement["title"]} <br/> <br/></a>`)
        });
      });
    },
    showAnnouncement: function showAnnouncement(id){
      $.ajax({
        url: root + '/announcements/' + id,
        method: 'GET'
      }).done(function(data) {
        $("#response").append(
          `${data.announcement["body"]} <br/> <br/>`)
      });
    },
};

module.exports = App
