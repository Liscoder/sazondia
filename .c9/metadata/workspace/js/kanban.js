{"filter":false,"title":"kanban.js","tooltip":"/js/kanban.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":88,"column":0},"action":"insert","lines":["dragula([","\tdocument.getElementById('1'),","\tdocument.getElementById('2'),","\tdocument.getElementById('3'),","\tdocument.getElementById('4'),","\tdocument.getElementById('5')","])","",".on('drag', function(el) {","\t","\t// add 'is-moving' class to element being dragged","\tel.classList.add('is-moving');","})",".on('dragend', function(el) {","\t","\t// remove 'is-moving' class from element after dragging has stopped","\tel.classList.remove('is-moving');","\t","\t// add the 'is-moved' class for 600ms then remove it","\twindow.setTimeout(function() {","\t\tel.classList.add('is-moved');","\t\twindow.setTimeout(function() {","\t\t\tel.classList.remove('is-moved');","\t\t}, 600);","\t}, 100);","});","","","var createOptions = (function() {","\tvar dragOptions = document.querySelectorAll('.drag-options');","\t","\t// these strings are used for the checkbox labels","\tvar options = ['Research', 'Strategy', 'Inspiration', 'Execution'];","\t","\t// create the checkbox and labels here, just to keep the html clean. append the <label> to '.drag-options'","\tfunction create() {","\t\tfor (var i = 0; i < dragOptions.length; i++) {","","\t\t\toptions.forEach(function(item) {","\t\t\t\tvar checkbox = document.createElement('input');","\t\t\t\tvar label = document.createElement('label');","\t\t\t\tvar span = document.createElement('span');","\t\t\t\tcheckbox.setAttribute('type', 'checkbox');","\t\t\t\tspan.innerHTML = item;","\t\t\t\tlabel.appendChild(span);","\t\t\t\tlabel.insertBefore(checkbox, label.firstChild);","\t\t\t\tlabel.classList.add('drag-options-label');","\t\t\t\tdragOptions[i].appendChild(label);","\t\t\t});","","\t\t}","\t}","\t","\treturn {","\t\tcreate: create","\t}","\t","\t","}());","","var showOptions = (function () {","\t","\t// the 3 dot icon","\tvar more = document.querySelectorAll('.drag-header-more');","\t","\tfunction show() {","\t\t// show 'drag-options' div when the more icon is clicked","\t\tvar target = this.getAttribute('data-target');","\t\tvar options = document.getElementById(target);","\t\toptions.classList.toggle('active');","\t}","\t","\t","\tfunction init() {","\t\tfor (i = 0; i < more.length; i++) {","\t\t\tmore[i].addEventListener('click', show, false);","\t\t}","\t}","\t","\treturn {","\t\tinit: init","\t}","}());","","createOptions.create();","showOptions.init();","","",""],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":88,"column":0},"end":{"row":88,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":190,"mode":"ace/mode/javascript"}},"timestamp":1462119406000,"hash":"c0e984bad8905f4e60c48079dddb0e193686cd22"}