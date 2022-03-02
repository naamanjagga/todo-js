var todoList = [];
var completeList = [];
$(document).ready(function() {
	$('#btn2').hide();
	$('#btn1').on('click', function() {
		var name = $('#input').val();
		todoList.push(name);
		display();
	});
});

function display() {
	var html = '<ul>';
	for (var i = 0; i < todoList.length; i++) {
		html +=
			'<li><input type ="checkbox" id="check' +
			[ i ] +
			'" onchange="change(' +
			i +
			')">' +
			todoList[i] +
			' <button id="Edit" onclick="Edit(' +
			i +
			')">Edit</button> <button id="Delete" onclick="Delete(' +
			i +
			')">Delete</button><br> ';
	}
	html += '</li></ul>';
	$('#todo').html(html);
}
var naman;
function Edit(x) {
	naman = x;
	$('#btn1').hide();
	$('#btn2').show();
	for (var i = 0; i < todoList.length; i++) {
		if (i == x) {
			$('#input').val(todoList[i]);
		}
	}
	
}
$('#btn2').on('click', function() {
	$('#btn2').hide();
	$('#btn1').show();
	var n = todoList.length;
	console.log('x')
	for (var i = 0; i < n; i++) {
		if (i == naman) {
			var name = $('#input').val();
			todoList.splice(i, 1, name);
		}
	}
	display();
});
function change(x) {
	for (var i = 0; i < todoList.length; i++) {
		if (i == x) {
			var checkbox = document.getElementById('check' + [ i ]);
			if (checkbox.checked) {
				completeList.push(todoList[i]);
				todoList.splice(i, 1);
			} else {
                todoList.push(completeList[i]);
                completeList.splice(i,1);
			}
		}
	}
    display();
    dis();
 }
function Delete(x) {
	for (var i = 0; i < todoList.length; i++) {
		if (i == x) {
			if (confirm('You want to delete it') == true) {
				todoList.splice(i, 1);
			}
		}
	}
	display();
}

function dis() {
	var html = '<ul>';
	for (var i = 0; i < completeList.length; i++) {
		html +=
			'<li><input type ="checkbox" id="uncheck' +
			[ i ] +
			'" onchange="change(' +
			i +
			')" checked>' +
			completeList[i] +
			' <button id="Edit" onclick="Editc(' +
			i +
			')">Edit</button> <button id="Delete" onclick="Deletec(' +
			i +
			')">Delete</button><br> ';
	}
	html += '</li></ul>';
	$('#completed').html(html);
}
