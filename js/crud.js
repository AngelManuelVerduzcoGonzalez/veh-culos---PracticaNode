const btnListar = document.getElementById("listarBtn");
const btnAgregar = document.getElementById("agregarBtn");
const btnBuscar = document.getElementById("buscarBtn");
const btnEliminar = document.getElementById("eliminarBtn");

    btnListar.addEventListener('click', () => {
        fetch('http://localhost:3000/vehiculos')
            .then((response) => response.json())
            .then((datos) => {
                console.log(datos.vehiculos)
                let div = document.getElementById("resultado");
                let info = '';
                for (let i = 0; i < datos.vehiculos.length; i++)
                    info += `
                        <div>
                            <h3>${datos.vehiculos[i].placa}</h3>
                            <p>${datos.vehiculos[i].marca}</p>
                            <p>${datos.vehiculos[i].modelo}</p>
                        </div>
                    `;
                div.innerHTML=info;
            })
    })

    btnAgregar.addEventListener('click', () => {
        let placa = document.getElementById("placa").value;
        let marca = document.getElementById("marca").value;
        let modelo = document.getElementById("modelo").value;
        fetch("http://localhost:3000/vehiculos", {
            method: "POST",
            body: JSON.stringify({
                placa: placa,
                marca:marca,
                modelo:modelo
            }),
            headers: {
                "Content-Type":"application/json; charset=UTF-8"
            }
        })
    })

btnEliminar.addEventListener('click', () => {
    let placa = document.getElementById("placa").value;
    fetch(`http://localhost:3000/vehiculos/${placa}`, {
        method: 'DELETE'
    })
})

btnBuscar.addEventListener('click', () => {
    let placa = document.getElementById("placa").value;
    fetch(`http://localhost:3000/vehiculos/${placa}`)
        .then((response) => response.json())
        .then((datos) => {
            let div = document.getElementById("resultado")
            let info = datos.vehiculo
            div.innerHTML = `
                 <div>
                    <h3>${info.placa}</h3>
                    <p>${info.marca}</p>
                    <p>${info.modelo}</p>
                </div>
            `
        })
})