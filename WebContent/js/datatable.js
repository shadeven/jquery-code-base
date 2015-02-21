
/*
 *	The javascript serves for datatable html page. 
 */

// Global variable
var rowIds = [];

// Bootgrid widget
var grid = $("#grid").bootgrid({
	selection : true,
	multiSelect : true,
	
	formatters: {
		"link": function(column, row) {
			return "<a href=\"www.google.com.au\">Google" + "</a>";
		},
		
		"name": function(column, row) {
			var cellValue = row[column.id];
			return "<a href=\"www.google.com.au\">" + cellValue + "</a>";
		},
		
		"commands": function(column, row) {
			return "<button type=\"button\" class=\"btn btn-xs btn-default command-edit\" data-row-id=\"" 
			+ row.id + "\"><span class=\"fa fa-pencil\"></span></button>";
		}
	}
}).on("selected.rs.jquery.bootgrid", function(e, rows) {
	for (var i = 0; i < rows.length; i++) {
		rowIds.push(rows[i].id);
	}
	// Pass selected rowIds from bootgrid widget to another javascript function.
	print(rowIds);
}).on("deselected.rs.jquery.bootgrid", function(e, rows) {
	for (var i = 0; i < rows.length; i++) {
		rowIds.splice($.inArray(rows[i].id, rowIds), 1);
	}
}).on("loaded.rs.jquery.bootgrid", function() {
	grid.find(".command-edit").on("click", function(e) {
		alert("Replace the alert with dialog box.");
	});
});

function print(rowIds) {
	console.log("Printing selected row ID(s): " + rowIds.join(","));
}

$("#drop-down").change(function() {
		var selected = $("#drop-down").val();
		console.log("selected item in drop-down: " + selected);
});

function getCellValue(column, row) {
	var columnIndex = $("#" + column).index();
	var row = $("#" + row);
	return row.find("td").eq(columnIndex);
}

function getColor(value) {
	if (value == 8) {
		return "red";
	}
}

