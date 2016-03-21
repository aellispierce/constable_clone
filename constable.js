  var root = 'http://localhost:4000/api';
  var local = 'file:///Users/ashley/thoughtbot/constable_clone/';

  function getAnnouncements(){
    $.ajax({
      url: root + '/announcements',
      method: 'GET'
    }).done(function(data) {
      console.log(data);
      var announcements = data.announcements;

      announcements.forEach(function(announcement){
      $("#response").append(
          '<a href=' + local + '/announcement.html?id=' + (announcement['id']) + '>'+
          announcement['title'] + " " +"<br/> <br/>"+
          '</a>')
      });
    });
  };

  function showAnnouncement(id){
    $.ajax({
      url: root + '/announcements/' + id,
      method: 'GET'
    }).done(function(data) {
      console.log(data);

      $("#response").append(
        data.announcement['body'] + " " +"<br/> <br/>")
    });
  };

  function search(query){
    $.ajax({
      url: root + '/searches',
      method: 'POST',
      data: {query: query }
    }).done(function(data) {
      var announcements = data.announcements.forEach(function(announcement){
      $("#response").append(
          '<a href=' + local + '/announcement.html?id=' + (announcement['id']) + '>'+
          announcement['title'] + " " +"<br/> <br/>"+
          '</a>')
      });
      $("#response").append(announcements)
    });
  };
