let lista = [];

function buscarCategorias()
{
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(listaCategorias => {
        listaCategorias.forEach(cada => {
            categorias.innerHTML += `
            <li class="list-group-item">
            <h6>
                <input name="${cada.replace(" ","-")}" type="checkbox">
                <span>${cada}</span>
            </h6>
        </li>
        `;
        })
    });
}buscarCategorias();

function buscaProdutos(){
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(listaProdutos => {
        lista = listaProdutos;
        listaProdutos.forEach(cada => {
            products.innerHTML += `   
            <li >
                <div class="card">
                    <img src="${cada.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title" title="${cada.title}">${cada.title}</h5>
                        <div class=badge bg-secondary mb-2">${cada.category}</div>
                        <p class="card-text text-wrap">${cada.description}</p>
                        <a href="" class="btn btn-primary">Adicionar ao carrinho</a>
                </div>
            </div>
        </li>
        `
        })
    })
}buscaProdutos();

function filtro()
{
    let inputs = document.querySelectorAll('input:checked');
    let inputs_nomes = [];
    for(let i = 0; i < inputs.length; i++){
        inputs_nomes.push(inputs[i].name);
    }
    
    let lis = document.querySelectorAll("#products li");
    for(let i = 0; i < lis.length; i++){
        if(!lis[i].classList.contains(inputs_nomes.toString())){
            lis[i].getElementsByClassName.display = 'none'
        }
    }
}
