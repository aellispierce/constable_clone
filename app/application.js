"use strict";

const origin = window.location.origin;

var App = {
  init: function init() {
    $("body").prepend(
        `<a href = ${origin}/new.html> + </a>`)
  },
};

module.exports = App
