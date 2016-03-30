Path = require('path');
const path = new Path;

class ConstableApi {
  get(url){
    return $.ajax({
      url: url,
      method: 'GET'
    })
  }

  post(url, data) {
    $.ajax({
      url: url,
      method: 'POST',
      data: data
    })
  }
}
module.exports = ConstableApi
