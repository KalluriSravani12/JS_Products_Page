let products = [
    {
        name: "Banana",
        description: " A yellow banana. Some say it a berry.",
        price: 9
    },
    {
        name: "Apple",
        description: " A red apple, sweet and tasty.",
        price: 7


    },
    {
        name: "Orange",
        description: " A Orange. Its Orange.",
        price: 10

    }
];

// Display all products

function showProduts(){
    let html = '';

    //Loop over products
    for (let product of products){
        html += `
            <div class = "product">
                <h2>${product.name} </h2>
                <div class = "info">
                    <p>${product.price}</p>
                    <p>Pris: <b>${product.price}</b></p>
                </div>
                <button class = "remove" data-product-name= "${product.name}">Remove</button>
                <hr>
            </div>
        
        `;


    }
    //Add html to the document, products div
    document.querySelector('.products').innerHTML = html;


}


//Handle all click events
function handleEvents(){
    //Add event listener to entire body and listen for clicks
    document.querySelector('body').addEventListener('click', function(event){
        //Get the closet product-class to where we clicked
        let productClicked = event.target.closest('.product');
        //If you click somewhere unrelated , we just return
        if(!productClicked){return;}


        // Get teh info-div from the clicked product
        let infoProduct = productClicked.querySelector('.info');
        infoProduct.style.display = infoProduct.style.display === 'block' ? 'none' : 'block';

        // If the closet element is the remove button
        let removeButton = event.target.closest('.remove');
        if(removeButton){
            //Get the attribute data-product-name
            let productName= removeButton.getAttribute('data-product-name')
            // Remove product by nme from array
            products = products.filter((product) => product.name !== productName);
            productClicked.remove();
        }




    });


}
showProduts();
handleEvents();

