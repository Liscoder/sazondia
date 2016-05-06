var data = require('./json.js');

data.restaurants.forEach(function restaurants() {

  document.getElementId(data.restaurants.company.manager);
 });

//Variables
@blanco:white;
@gris-claro:#BBB;
@gris-obscuro:#011627;

/* Estilos */
table{ 
			width: 100%;
			background: @blanco;
			line-height: 1.3em;
			display: table;
			/* Fondo intercalado */
			tr:nth-of-type(odd) { 
				background:(@gris-claro + 50); 
			}
			td, th { 
				padding: 6px; 
				border: 1px solid (@gris-claro + 20) ; 
				text-align: left; 
			}
			th { 
				background:#2EC4B6; 
				color:@blanco; 
				font-weight: bold; 
			}
		}

/* Mobile */
@media only screen and (max-width: 767px) {
	/* inician los estilos mobiles */
table.table { 
	  margin-bottom: 0; 
	  td, th { 
		  position: relative; 
		  white-space: nowrap; 
		  overflow: hidden;
		  &:first-child, {display: none;}
	  }
	  .pinned td{display: none;}
}

.pinned { 
	  position: absolute; 
	  left: 0; 
	  top: 0; 
	  background: @blanco; 
	  width: 35%; 
	  overflow: hidden; 
	  overflow-x: scroll; 
	  border-right: 1px solid (@gris-claro + 20); 
	  border-left: 1px solid (@gris-claro + 20); 
	  table { 
		  border-right: none; 
		  border-left: none; 
		  width: 100%; 
		  th, td { white-space: nowrap;}
		  td:last-child { border-bottom: 0; }
	  }
}
div.table-wrapper { 
	position: relative; 
	margin-bottom: 20px; 
	overflow: hidden; 
	border-right: 1px solid (@gris-claro + 20); 
  div.scrollable { 
	  overflow: scroll; 
	  overflow-y: hidden; 
	  table { margin-left: 35%;}
  }
}
/* terminan los estilos mobiles */
}

/* Botón para ocular/ mostrar la tabla */
button{margin:1em 0;}