
/*
 *	The javascript serves for datatable html page. 
 */

// Bootgrid widget
$("#grid").bootgrid({
	selection : true,
	multiSelect : true,
	formatters: {
		"link": function(column, row) {
			return "<a href=\"www.google.com.au\">Google" + "</a>";
		},
		
		"name": function(column, row) {
			var cellValue = row[column.id];
			return "<a href=\"www.google.com.au\">" + cellValue + "</a>";
		}
	}
}).on("selected.rs.jquery.bootgrid", function(e, rows) {
	var rowIds = [];
	for (var i = 0; i < rows.length; i++) {
		rowIds.push(rows[i].id);
	}
	// Pass selected rowIds from bootgrid widget to another javascript
	// function
	print(rowIds);
});

function print(rowIds) {
	console.log("Printing selected row ID(s): " + rowIds.join(","));
}

$(function() {
	$("#drop-down").change(function() {
		var selected = $("#drop-down").val();
		console.log("selected item in drop-down: " + selected);
	});
});

function getCellValue(column, row) {
	var columnIndex = $("#" + column).index();
	var row = $("#" + row);
	return row.find("td").eq(columnIndex);
}
