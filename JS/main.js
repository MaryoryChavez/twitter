    var lista = document.getElementById('add-list');
    var listatrash = document.getElementById('trash');

function update(){
    var text = document.getElementById("area").value;
    add(text, lista, listatrash);   
}

function add(_text, _lista, _listatrash){
    
    var div = document.createElement('div');
    div.innerHTML = '<input type="checkbox">'+_text;
    //div.className = "col-sm-6 col-xs-6";
    _lista.appendChild(div);
    
    var div1 = document.createElement('div');
    
    var obj = {
        tagain : '<a href="" >',
        tagaend : '</a>',
        trashi : '<i class="fa fa-trash-o" aria-hidden="true"></i>',
    };
    div1.innerHTML = obj.tagain + obj.trashi + obj.tagaend + _text;
    //div1.innerHTML = '<a href="" onclick="trash(); return false;"><i class="fa fa-trash-o" aria-hidden="true"></i></a>';
    //div1.className = "col-sm-6 col-xs-6 text-right";
    _listatrash.appendChild(div1);
    
    div1.onclick = function(){
        this.parentNode.removeChild(this); 
        div.parentNode.removeChild(div);
        return false;
    }
}

function cross(){
       
}



/*function trash(_div,_div1){
   var a=document.getElementsByTagName("A");
    _div.parentNode.removeChild(_div);
    _div1.parentNode.removeChild(_div1);
    return false;
}*/