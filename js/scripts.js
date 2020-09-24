function cambiarIMG(){
    var estado = document.getElementById('foco');
    if(estado.src.match('focoOn')){
        estado.src='img/focoOff.png';
    }
    else{
        estado.src='img/focoOn.png';
    }
    alert(estado.src);
}