let gallery = ["https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2023/09/13122556/shutterstock_189037769-los-jeronimos-1024x727.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJ1QDHozmQEA1dnKtGPg1huOQWtQJ0lsRjw&s","https://img.freepik.com/fotos-premium/vista-catedral-angulo-contra-cielo-despejado_1048944-10690806.jpg?size=626&ext=jpg&ga=GA1.1.933601817.1717200000&semt=ais_user"];
let leyenda = ["iglesia", "rascacielo", "ruinas" ];

let texto = document.querySelector(".gallery");
let galeria = document.querySelector(".gallery");
let boton = document.querySelector('.add');

    for (cont=0; cont < gallery.length; cont ++){ 
    let picture = document.createElement("img");
    picture.src = gallery[cont];
    galeria.append(picture);
    let descrip = document.createElement("h1",);
    descrip= leyenda[cont];
    texto.append(descrip);
    }


    let descriplink = document.querySelector(".name-url");
    let imglink = document.querySelector(".picture-url");

    //Funcion del Boton
    
    boton.addEventListener('click', function(){
    if (imglink.value !== "" && descriplink.value !== ""){
    gallery.push(imglink.value);
    let picture = document.createElement("img");
    picture.src = (imglink.value);
    galeria.append(picture); 
    imglink.addEventListener("focus", function(){
        imglink.value= "";
    })
    leyenda.push(descriplink.value);
    let descrip = document.createElement("h1")
    descrip= leyenda[cont];
    texto.append(descrip);
    cont = cont + 1;
    descrip.addEventListener("focus", function(){
        descriplink.value= "";
    })
    } else{
      window.alert("Error, falta un contenido");
    }   
});

