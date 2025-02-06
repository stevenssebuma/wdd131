
const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;


let productsBox = document.getElementById('product-name');
const products = [
    {
        id: "dl-1234-lt",
        name: "Dell Inspiron Laptop",
        averagerating: 4.5
    },
    {
        id: "ap-5678-ph",
        name: "Apple iPhone 13",
        averagerating: 4.8
    },
    {
        id: "sm-9101-tb",
        name: "Samsung Galaxy Tab S7",
        averagerating: 4.6
    },
    {
        id: "sn-1121-wm",
        name: "Sony Noise Cancelling Headphones",
        averagerating: 4.9
    },
    {
        id: "lg-3141-tv",
        name: "LG OLED TV 55 Inch",
        averagerating: 4.7
    },
    {
        id: "ms-5161-kb",
        name: "Microsoft Surface Keyboard",
        averagerating: 4.3
    }
];

function displayProducts(product){

    products.forEach(index => {

        const box = document.createElement("option");
        
        box.value = index.id;
        box.textContent = index.name;
        productsBox.appendChild(box);
    });

}

displayProducts(productsBox);

