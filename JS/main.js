var btn = document.getElementById("btn");
var text = document.getElementById("area");
text.onkeyup = function () {
    if (text.value.length > 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
    btn.addEventListener("click", add);
}
function add() {
    var lista = document.getElementById('add-list');
    var listatrash = document.getElementById('trash');
    var div = document.createElement("div");
    lista.appendChild(div);
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var span = document.createElement("span");
    var work = document.createTextNode(text.value);
    span.appendChild(work);
    div.appendChild(checkbox);
    div.appendChild(span);
    var div1 = document.createElement('div');
    var obj = {
        tagain: '<a href="#" class="list-group-item">',
        tagaend: '</a>',
        trashi: '<i class="fa fa-trash-o" aria-hidden="true"></i>',
    };
    div1.innerHTML = obj.tagain + obj.trashi + obj.tagaend;
    listatrash.appendChild(div1);

    div1.onclick = function () {
        this.parentNode.removeChild(this);
        div.parentNode.removeChild(div);
        return false;
    }
    if (lista.childElementCount > 0) {
        checkbox.addEventListener("click", cross);
    }
}
function cross(evt) {
    var checkbox = evt.target;
    var span = evt.target.parentNode.lastChild;
    var div = evt.target.parentNode;
    
    //console.log(evt.target.parentNode);
    if (checkbox.checked) {
        span.classList.add("cross");
        div.classList.add("backgr");
        
    } else {
        span.classList.remove("cross");
        div.classList.remove("backgr");
    }
}


















/*
    //version 1.0
    
    var lista = document.getElementById('add-list');
    var listatrash = document.getElementById('trash');

    function update() {
        var text = document.getElementById("area").value;
        var btn = document.getElementById("btn");
        var yes = function () {
            btn.disabled = true;
        }
        var no = function () {
            btn.disabled = false;
        }
        if (text.length == 0) {
            return yes;
        } else {
            add(text, lista, listatrash);
            //lista.addEventListener("change", cross())
            return no;
        }
    }

    function add(_text, _lista, _listatrash) {
        var div = document.createElement('div');
        div.innerHTML = '<input type="checkbox">' + _text;
        _lista.appendChild(div);
        var div1 = document.createElement('div');
        var obj = {
            tagain: '<a href="" >',
            tagaend: '</a>',
            trashi: '<i class="fa fa-trash-o" aria-hidden="true"></i>',
        };
        div1.innerHTML = obj.tagain + obj.trashi + obj.tagaend;
        _listatrash.appendChild(div1);

        div1.onclick = function () {
            this.parentNode.removeChild(this);
            div.parentNode.removeChild(div);
            return false;
        }
    }
    function cross(div) {
       var check=div.target.parentNode;
	if(div.target.checked)
		check.setAttribute("style","text-decoration:line-through");
	else
		check.setAttribute("style","text-decoration:none");
    }
*/