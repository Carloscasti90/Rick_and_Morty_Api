function buscarPersonaje(url = "https://rickandmortyapi.com/api/character") {

    fetch(url).then(respuesta => {
        console.log(respuesta)
        respuesta.json().then(datos => {
            console.log(datos)
            imprimirPersonajes(datos)
        })
    })
        .catch(error => console.log(error));
}

function imprimirPersonajes(list = []) {
    document.querySelector("#printer").innerHTML = ""
    document.querySelector("#botonesPagina").innerHTML = ""
    list.results.forEach(personaje => {

        document.querySelector("#printer").innerHTML += `
       
        <div class="card" style="width: 18rem;">
        <img src="${personaje.image} ">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${personaje.status}</h6>
          <p class="card-text">${personaje.species}</p>
         
        </div>
      </div>

`
    });
    document.querySelector("#botonesPagina").innerHTML += `
            <button class="btn btn-primary" onclick="buscarPersonaje('${list.info.prev}')" type="button" id="botonPrev"> Prev </button>
            <button class="btn btn-primary" type="button" onclick="buscarPersonaje('${list.info.next}')"  id="botonNext"> Next </button>
    `

}

buscarPersonaje();


