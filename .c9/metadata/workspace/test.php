{"filter":false,"title":"test.php","tooltip":"/test.php","undoManager":{"mark":12,"position":12,"stack":[[{"start":{"row":0,"column":0},"end":{"row":26,"column":7},"action":"insert","lines":["<html>","<head>","\t<title>SAZONDÍA</title>\t","\t<!-- JAVASCRIPT JS FILES -->\t","<script src=\"js/jquery.js\"></script>","<script src=\"js/jquery.parallax.js\"></script>","<script type=\"text/javascript\">","   $.ajax({","        type: \"GET\",","        url: 'http://beta.mapadecalor.com/restaurants.json',","        data:{q:idiom},","        async:true,","        dataType : 'jsonp',   //you may use jsonp for cross origin request","        crossDomain:true,","        success: function(data, status, xhr) {","            alert(xhr.getResponseHeader('Location'));","        }","    });"," ","</script>","</head>","<body>","","<input name=\"button\" type=\"button\" class=\"btn\" value=\"Go\" onclick=\"updateTxt()\">","","</body>","</html>"],"id":1}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"remove","lines":["."],"id":2}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["."],"id":3}],[{"start":{"row":7,"column":0},"end":{"row":17,"column":7},"action":"remove","lines":["   $.ajax({","        type: \"GET\",","        url: 'http://beta.mapadecalor.com/restaurants.json',","        data:{q:idiom},","        async:true,","        dataType : 'jsonp',   //you may use jsonp for cross origin request","        crossDomain:true,","        success: function(data, status, xhr) {","            alert(xhr.getResponseHeader('Location'));","        }","    });"],"id":4}],[{"start":{"row":7,"column":0},"end":{"row":10,"column":50},"action":"insert","lines":["var text = '{ \"employees\" : [' +","'{ \"firstName\":\"John\" , \"lastName\":\"Doe\" },' +","'{ \"firstName\":\"Anna\" , \"lastName\":\"Smith\" },' +","'{ \"firstName\":\"Peter\" , \"lastName\":\"Jones\" } ]}';"],"id":5}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"remove","lines":[" "],"id":6}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":7}],[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":8}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":27},"action":"insert","lines":["var obj = JSON.parse(text);"],"id":9}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":12}],[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":13}],[{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":14}],[{"start":{"row":0,"column":0},"end":{"row":24,"column":7},"action":"remove","lines":["<html>","<head>","\t<title>SAZONDÍA</title>\t","\t<!-- JAVASCRIPT JS FILES -->\t","<script src=\"js/jquery.js\"></script>","<script src=\"js/jquery.parallax.js\"></script>","<script type=\"text/javascript\">","var text = '{ \"employees\" : [' +","'{ \"firstName\":\"John\" , \"lastName\":\"Doe\" },' +","'{ \"firstName\":\"Anna\" , \"lastName\":\"Smith\" },' +","'{ \"firstName\":\"Peter\" , \"lastName\":\"Jones\" } ]}';","","var obj = JSON.parse(text);","","</script>","</head>","<body>","","<input name=\"button\" type=\"button\" class=\"btn\" value=\"Go\" onclick=\"updateTxt()\">","","","","","</body>","</html>"],"id":16},{"start":{"row":0,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["<!DOCTYPE html>","<html>","<body>","","<h2>Create Object from JSON String</h2>","","<p id=\"demo\"></p>","","<script>","var text = '{\"employees\":[' +","'{\"firstName\":\"John\",\"lastName\":\"Doe\" },' +","'{\"firstName\":\"Anna\",\"lastName\":\"Smith\" },' +","'{\"firstName\":\"Peter\",\"lastName\":\"Jones\" }]}';","","obj = JSON.parse(text);","document.getElementById(\"demo\").innerHTML =","obj.employees[1].firstName + \" \" + obj.employees[1].lastName;","</script>","","</body>","</html>",""]}]]},"ace":{"folds":[],"scrolltop":8,"scrollleft":0,"selection":{"start":{"row":20,"column":7},"end":{"row":20,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":51,"mode":"ace/mode/php"}},"timestamp":1462124224000,"hash":"8fcf364e7e7979cb8b2032cb5a48fe0757b010d2"}