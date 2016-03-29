"use strict";

const origin = window.location.origin;

var App = {
  init: function init() {
    $("body").prepend(
        `<a href = ${origin}/new_announcement.html> + </a>`)
  },
};

module.exports = App
