function update(){
    var text = document.getElementById("area").value;
    add(text);   
}

function add(_text){
    var lista = document.getElementById('add-list');
    var div = document.createElement('div');
    div.innerHTML = _text;
    //div.className = "col-sm-6 col-xs-6";
    lista.appendChild(div);
    
    var listatrash = document.getElementById('trash');
    var div1 = document.createElement('div');
    div1.innerHTML = "trash";
    //div1.className = "col-sm-6 col-xs-6 text-right";
    listatrash.appendChild(div1);

}

function cross(){
    
}

function trash(){
    
}