var btn = document.getElementById("btn");

btn.onclick = function verificar(area){
    var text = document.getElementById("area").value;
        if(area.value!=""){
            return btn.disabled = false;
            alert(text);
        }else{
            return btn.disabled = true;
            alert(text);
        }
    }

function erased(){
    
}

function cross(){
    
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