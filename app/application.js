"use strict";

const origin = window.location.origin;
const Announcement = require('announcement');
const announcement = new Announcement;
const AnnouncementPresenter = require('announcement-presenter');
const announcementPresenter = new AnnouncementPresenter;
const AnnouncementValidator = require('announcement-validator');
const validator = new AnnouncementValidator;

var App = {
  init: function init() {
    $("body").prepend(
        `<a href = ${origin}/new_announcement.html> + </a>`)
  },
  showAnnouncement: function showAnnouncement(id) {
    announcement.find(id).done(function(data){
        announcementPresenter.show(data.announcement);
    });
  },
  allAnnouncements: function allAnnouncements() {
    announcement.all().done(function(data){
      announcementPresenter.index(data.announcements);
    });
  },
  createAnnouncement: function createAnnouncement(formData) {
    const validated_announcement = validator.validate(formData);
    if(validated_announcement.valid){
      announcement.create(formData);
    } else {
      $("body").append(validated_announcement.error);
    }
  }
};

module.exports = App
