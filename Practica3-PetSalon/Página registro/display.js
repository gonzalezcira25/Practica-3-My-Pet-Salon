function displayCards(){
    //declaración de variables 
    const DIV = document.getElementById("mascotas");
    let card = "";


    //recorrer el arreglo pets[] o base de datos
    for(let i=0;i<pets.length;i++){   
        card+= `
            <div class="card">
                <p><b>Nombre: ${pets[i].nombre}</b></p>
                <p>Género: ${pets[i].genero}</p>
                <p>Animal: ${pets[i].animal}</p>
                <img class="imgFoto">
            </div>
        `;
        // += es concatenar

    }


    
    
    //crear el template de la tarjeta (HTML)
    //insertar la tartjeta en el HTML
    DIV.innerHTML=card;
}