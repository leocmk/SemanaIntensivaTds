function changeimage(){
    const html = document.documentElement;
    html.classList.toggle("light")

    var imagem = document.querySelector('#profile')
    var btn = document.getElementById("btnStyle")
    var dt =document.getElementById("data")

        var registro = new Date();

        dt = formatarData(registro)

        if(html.classList.contains("light")){
            imagem.setAttribute("src", "./imagem/pic1.png");
            document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "lightgreen";
        btn.style.borderColor = "lighthgreen";
        }else{
            imagem.setAttribute("src", "./imagem/img2.png");
            document.getElementById("data").textContent = formatarData(registro);
            btn.style.color = "lightpink";
            btn.style.borderColor = "lighthpink";
        }
        

}



function formatarData(item){
    
    
    var options = {
        month: "long",
        day:"numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("pt-BR", options);


}