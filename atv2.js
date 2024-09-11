let uf = document.querySelector("#estado");
let cidades = document.getElementById("cidades");
let ddds = [];

let lista = document.createElement("ol");
uf.addEventListener('change', (evt)=>{
    lista.innerHTML = ''
    fetch(`https://brasilapi.com.br/api/ddd/v1/${parseInt(evt.target.value)}`, {
        method: "GET"
        })
        .then((response)=>{
        return response.json()
        })
        .then((data)=>{
            data.cities.forEach((c)=>{
                l = document.createElement("li");
                l.innerText = c
                lista.appendChild(l);
                cidades.appendChild(lista);
            })
            
            console.log(data.cities)
        })
        .catch((err)=>{
            alert('DEU erro')
            
        })
})





