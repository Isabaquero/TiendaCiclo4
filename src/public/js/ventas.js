$(document).ready( ()=>
{
    //Variables iniciales:
    let molde = $('#template-products').html();    //Template de venta por producto.
    let div_sale = $('#content-products');           //Div donde se imprimirá el contenido de la venta.

    //Imprimimos por defecto la plantilla.
    div_sale.append(molde);
    div_sale.append(molde);
    

    //Cuándo se desee consultar un usuario:
    $('#btn-consult-client').click( getUser );
    $('#btn-consult-product').click( getProduct );
    $('#btn-add-product')
});

function getUser(){

}

function getProduct(){

}