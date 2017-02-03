//version 2.0
var listaTarea = [];
var btn = document.getElementById("btn");
var area = document.getElementById("area");

function blocke() {
    if (area.value.length > 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function addWork() {
    var listaText = document.getElementById("text");

    var work = {
        nombre: '<span>' + area.value + '</span>',
        checkbox: '<input type="checkbox" class="inputcheck" onclick="cross(this)">',
        checkcircle: '<i class="fa fa-check-circle" aria-hidden="true"></i>',
        iconTrash: '<a href="#" onclick="erasedList(this)"><i class="fa fa-trash-o" aria-hidden="true"></i></a>',
    };
    var html;
    listaTarea.push(work);
    for (var i in listaTarea) {
        html = '<p>' + '<label>' + listaTarea[i].checkbox + listaTarea[i].checkcircle + '</label>' + listaTarea[i].nombre + listaTarea[i].iconTrash + '</p>';
    }
    listaText.innerHTML += html;
    area.value = '';
    area.focus();
    blocke();
}

function cross(_checkbox) {
    var text = _checkbox.parentNode.nextSibling;
    var conten = _checkbox.parentNode.parentNode;
    var trash = _checkbox.parentNode.nextSibling.nextSibling;
    var checkCircle = _checkbox.nextSibling;
    _checkbox.checked ? (text.classList.add("cross"), conten.classList.add("backgr"), trash.classList.add("trash"), checkCircle.classList.add("check")) : (text.classList.remove("cross"), conten.classList.remove("backgr"), trash.classList.remove("trash"), checkCircle.classList.remove("check"));
}

function erasedList(_buttonTrash) {
    var p = _buttonTrash.parentNode.parentNode;
    p.removeChild(_buttonTrash.parentNode);
}

/*
var listaTarea = [
    {
        nombre: "tarea",
        isDone: true
        },
    {
        nombre: "t2",
        isDone: false
        },
];

*/


/*
var lista = document.getElementById("add-list");
    
    for (var i in listaTarea) {
        var html = "<li><input type='checkbox' " + (listaTarea[i].isDone ? "checked" : "") + ">" + listaTarea[i].nombre + "</li>";
        lista.innerHTML += html;
    }
*/