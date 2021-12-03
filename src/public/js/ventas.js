//Este archivo es sólamente usado para separar el ejs y js de ventas
var idMolde = '#template-products';
var idListProducts = '#content-products';
var idBtnSale = '#sendSale';

$(document).ready( ()=>
{
    //Variables iniciales:
    let molde = $(idMolde).html();          //Plantilla de registro por producto.
    let listProducts = $(idListProducts);   //tbody donde se almacenará cada registro de producto.

    //Imprimimos por defecto la plantilla.
    listProducts.append(molde);
    

    //EVENTOS:
    //Cuándo se desee consultar un usuario:
    $('#btn-consult-client').click( getUser );

    //Para el registro de productos:
    $(document).on('click', 'button[typeValue=btn_search]', getProduct);
    $(document).on('click', 'button[typeValue=btn_add]', saveProduct);
    $(document).on('click', 'button[typeValue=btn_delete]', deleteProduct);

    //Enviar venta:
    $(idBtnSale).click( sendSale );
});

function getUser(){
    let id = $('#cedula').val();
    let divNameCliente = $('#cliente');

    $.ajax({
        type: 'POST',
        data: {id},
        url: '/clientes/search',
        success: (res)=>{
            if(!res.success) toastr['error'](res.msj, 'Error ocurrido');
            else divNameCliente.val(res.client.name);
        }
    })
}

function getProduct(){

}

function saveProduct(){

}

function deleteProduct(){

}

function sendSale(){

}

//--- funciones genericas:
function searchAjax(){

}