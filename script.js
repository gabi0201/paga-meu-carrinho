let btnNao = document.getElementById("btn-nao");

btnNao.addEventListener('mouseover', function(){
    move(btnNao);
});

function move(el){  
    let container = document.querySelector(".container-button");

    let width = Math.ceil(el.clientWidth);
    let height = Math.ceil(el.clientHeight);

    let containerHeight = Math.floor(container.clientHeight);
    let containerWidth = Math.floor(container.clientWidth);

    var changeTop = Math.floor((Math.random() * (containerHeight - height + 1)));
    var changeLeft = Math.floor((Math.random() * (containerWidth - width + 1)));

    el.style.marginTop = changeTop + "px";
    el.style.marginLeft = changeLeft + "px";
}

document.getElementById("btn-sim").addEventListener('click', function(){
    document.getElementById("mensagem").innerText = "AI OBRIGADA TE AMO";
});
