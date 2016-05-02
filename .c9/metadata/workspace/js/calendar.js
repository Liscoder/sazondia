{"filter":false,"title":"calendar.js","tooltip":"/js/calendar.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":139,"column":1},"action":"insert","lines":["// Start","_('#calendar').innerHTML = calendar();","","// short queySelector","function _(s) {","  return document.querySelector(s);","};","","// show info","function showInfo(event) {","  // link ","  var url = 'https://dl.dropboxusercontent.com/u/23834858/api/calendar.json';","  // get json","  getjson(url, function(obj) {","    for (key in obj) {","      // if has envent add class","      if(_('[data-id=\"' + key + '\"]')){","        _('[data-id=\"' + key + '\"]').classList.add('event');        ","      }","      if (event === key) {","        // template info","        var data = '<h3>' + obj[key].type + '</h3>' +","            '<dl>' +","            '<dt><dfn>Title:</dfn></dt><dd>' + obj[key].title + '</dd>' +","            '<dt><dfn>Hour:</dfn></dt><dd>' + obj[key].time + '</dd>' +","            '<dt><dfn>Venue:</dfn></dt><dd>' + obj[key].venue + '</dd>' +","            '<dt><dfn>Location:</dfn></dt><dd>' + obj[key].location + '</dd>' +","            '<dt><dfn>Description:</dfn></dt><dd>' + obj[key].desc + '</dd>' +","            '<dt><dfn>More Info:</dfn></dt><dd><a href=\"' + obj[key].more +","            '\" title=\"More info\">Here</a><dt></dd>' +","            '</dl>';","        return _('#calendar_data').innerHTML = data;","      }","    }","  });","}","","// simple calendar","function calendar() {","  // show info on init","  showInfo();","","  // vars","  var day_of_week = new Array(","    'Sun', 'Mon', 'Tue',","    'Wed', 'Thu', 'Fri', 'Sat'),","      month_of_year = new Array(","    'January', 'February', 'March',","    'April', 'May', 'June', 'July',","    'August', 'September', 'October',","    'November', 'December'),","      ","      Calendar = new Date(),","      year = Calendar.getYear(),","      month = Calendar.getMonth(),","      today = Calendar.getDate(),","      weekday = Calendar.getDay(),","      html = '';","","  // start in 1 and this month","  Calendar.setDate(1);","  Calendar.setMonth(month);","","  // template calendar","  html = '<table>';","  // head","  html += '<thead>';","  html += '<tr class=\"head_cal\"><th colspan=\"7\">' + month_of_year[month] + '</th></tr>';","  html += '<tr class=\"subhead_cal\"><th colspan=\"7\">' + Calendar.getFullYear() + '</th></tr>';","  html += '<tr class=\"week_cal\">';","  for (index = 0; index < 7; index++) {","    if (weekday == index) {","      html += '<th class=\"week_event\">' + day_of_week[index] + '</th>';","    } else {","      html += '<th>' + day_of_week[index] + '</th>';","    }","  }","  html += '</tr>';","  html += '</thead>';","","  // body","  html += '<tbody class=\"days_cal\">';","  html += '</tr>';","  // white zone","  for (index = 0; index < Calendar.getDay(); index++) {","    html += '<td class=\"white_cal\"> </td>';","  }","  ","  for (index = 0; index < 31; index++) {","    if (Calendar.getDate() > index) {","","      week_day = Calendar.getDay();","      ","      if (week_day === 0) {","        html += '</tr>';","      }","      if (week_day !== 7) {","        // this day","        var day = Calendar.getDate();","        var info = (Calendar.getMonth() + 1) + '/' + day + '/' + Calendar.getFullYear();","","        if (today === Calendar.getDate()) {","          html += '<td><a class=\"today_cal\" href=\"#\" data-id=\"' + info + '\" onclick=\"showInfo(\\'' + info + '\\')\">' +","            day + '</a></td>';","","          showInfo(info);","          ","        } else {","          html += '<td><a href=\"#\" data-id=\"' + info + '\" onclick=\"showInfo(\\'' + info + '\\')\">' +","            day + '</a></td>';","        }","","      }","      if (week_day == 7) {","        html += '</tr>';","      }","    }","    Calendar.setDate(Calendar.getDate() + 1);","  } // end for loop","  return html;","}","","","//   Get Json data  ","function getjson(url, callback) {","  var self = this,","      ajax = new XMLHttpRequest();","  ajax.open('GET', url, true);","  ajax.onreadystatechange = function() {","    if (ajax.readyState == 4) {","      if (ajax.status == 200) {","        var data = JSON.parse(ajax.responseText);","        return callback(data);","      } else {","        console.log(ajax.status);","      }","    }","  };","  ajax.send();","}"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":123,"column":20},"end":{"row":123,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1462089674985,"hash":"af037fcd9426db24bbbccf4b00568c80be06b28e"}