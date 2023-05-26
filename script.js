function tabuada(){
    var num = document.getElementById("txtnum");
    var res = document.getElementById('res')
    var tabuad = '';

    if( num.value == '' ){
        window.alert('O campo não esta preenchido')
    }else if (num.value < 0){
         window.alert("O numero é negativo");
    }else{
        for(var cont = 0; cont <=10; cont ++){
            tabuad = tabuad +`${Number(num.value)} X ${cont} = ${Number(num.value) * cont}<br>`
        }
        res.innerHTML = tabuad;
    }
}