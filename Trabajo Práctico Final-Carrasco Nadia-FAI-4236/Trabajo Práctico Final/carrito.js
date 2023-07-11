const carrito= document.getElementById("carrito");
const nuestrosProductos= document.getElementById("productos-tienda");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn= document.getElementById("vaciar-carrito");


cargarEventListeners();

function cargarEventListeners(){
    nuestrosProductos.addEventListener('click', comprarProducto);

    carrito.addEventListener('click', eliminarProducto);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

function comprarProducto(e){
    e.preventDefault();//evita que se recargue la imagen 
    if(e.target.classList.contains('agregar-carrito')){
        const producto = e.target.parentElement.parentElement;
        leerProducto(producto);
    }
}

function leerProducto(producto){
    const descripcionProducto= {
        imagen : producto.querySelector('img').src,
        titulo : producto.querySelector('h2').textContent,
        precio : producto.querySelector('span').textContent,
        id : producto.querySelector('a').getAttribute('data-id')
    }
    //console.log(descripcionProducto.id);
    let encontro=false;
    const productos=obtenerProductosLocalStorage();
    let i=0;
    while(i<productos.length && !encontro){
        encontro=descripcionProducto.id===productos[i].id;
        i++;
    }
    if(!encontro){
        insertarCarrito(descripcionProducto); 
    }
}

function insertarCarrito(producto){
    
    

    const row = document.createElement('tr'); //se crea un nodo elemento tr 
    row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width=100 >
        </td>
        <td>
            ${producto.titulo}
        </td>

        <td>
            &#36;${producto.precio}
        </td> 
       
        <td>
            <a href="#" class = "borrar" data-id="${producto.id}">X</a>
        </td>

    `;
    lista.appendChild(row); //se agrega en la lista un row con elemento tr con la info producto
    
    guardarProductoLocalStorage(producto);
    
}

function eliminarProducto(e){
    e.preventDefault();
    let producto, productoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove(); 
        producto = e.target.parentElement.parentElement;
        productoId= producto.querySelector('a').getAttribute('data-id');
        console.log(productoId);
    }
    eliminarProductoLocalStorage(productoId);
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    vaciarLocalStorage();
    return false;
}

function guardarProductoLocalStorage(producto){ //para que no se pierda la informacion de los productos
    let productos;
    productos = obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));//se envia al localstorage y cada vez que se recarga evita que se pierda la info

}

function obtenerProductosLocalStorage(){
    let productosLS;

    if(localStorage.getItem('productos')===null){ //si no hay productos
        productosLS = [];
    }else{ // si hay productos los agrega
        productosLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productosLS; //retorna los productos que se encuentran en local storage
}

function leerLocalStorage() {
    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function (producto){
        const row = document.createElement('tr'); 
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100 >
            </td>
            <td>
                ${producto.titulo}
            </td>

            <td>
                &#36;${producto.precio}
            </td>

            <td>
                <a href="#" class = "borrar" data-id="${producto.id}">X</a>
            </td>

        `;
        lista.appendChild(row); 

    });
}

function eliminarProductoLocalStorage(producto){
    let productosLS;

    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function(productoLS, index){
        if(productoLS.id === producto){
            productosLS.splice(index, 1); //verifica si exite el id del producto y si existe lo elimina
        }
    });
    localStorage.setItem('productos', JSON.stringify(productosLS));
}

function vaciarLocalStorage(){
    localStorage.clear();
}

//ver compra del carrito

let btnVerCompra=document.getElementById('verCompra');
let titulo=document.getElementById('titlePagProductos');
let cajaFiltro=document.getElementById("caja-filtro");

btnVerCompra.addEventListener('click',mostrarPaginaProductos);

function mostrarPaginaProductos(){
    nuestrosProductos.style.display="none";
    titulo.style.display="none";
    cajaFiltro.style.display="none";
    let div=document.getElementById('listacompras');
    let compras= document.getElementById('tusCompras');
    productosLS = obtenerProductosLocalStorage();
    var dataid=0;
    productosLS.forEach(function (producto){
        const row = document.createElement('tr'); 
        row.innerHTML = `
            <td>
             <img src="${producto.imagen}" width=100 >
            </td>

            <td id="tituloCompras">
            ${producto.titulo}
            </td>

            <td>
                &#36;<span id="productoPrecio">${producto.precio} </span>
            </td>
        
            `;
        div.appendChild(row);  
        
    }); 
       
        compras.style.display="block";

} 


    

    
    

