var products=[
    {id:1,name:'ArmyGreeFashion', image:'Media/Images/ArmyGreeFashion.jpg',price:3000,quantity:1},
    {id:2,name:'BomberJacketmen', image:'Media/Images/BomberJacketmen.jpg',price:2300,quantity:1},
    {id:3,name:'Casualmensjacket', image:'Media/Images/Casualmensjacket.jpg',price:1400,quantity:1},
    {id:4,name:'Designerleatherjacket', image:'Media/Images/Designerleatherjacket.jpg',price:1300,quantity:1},
    {id:5,name:'LeatherJacketmen', image:'Media/Images/LeatherJacketmen.jpg',price:1500,quantity:1},
    {id:6,name:'SpringMensjacket', image:'Media/Images/SpringMensjacket.jpg',price:1800,quantity:1},
    {id:7,name:'Womenbikerjacket', image:'Media/Images/Womenbikerjacket.jpg',price:1200,quantity:1},
    {id:8,name:'olrekmenscasualwear', image:'Media/Images/olrekmenscasualwear.jpg',price:3300,quantity:1},
    {id:9,name:'Mensnewjacketspring', image:'Media/Images/Mensnewjacketspring.jpg',price:4300,quantity:1},
    {id:10,name:'MensCottonJacket', image:'Media/Images/MensCottonJacket.jpg',price:5000,quantity:1},
    {id:11,name:'menfashion', image:'Media/Images/menfashion.jpg',price:1300,quantity:1},
    {id:12,name:'leatherjacketwomen', image:'Media/Images/leatherjacketwomen.jpg',price:2300,quantity:1},
    {id:13,name:'Bikerjacketwomen', image:'Media/Images/Bikerjacketwomen.jpg',price:3100,quantity:1},
    {id:14,name:'FallJacketmen', image:'Media/Images/FallJacketmen.jpg',price:1100,quantity:1},
    {id:16,name:'WomenJacket', image:'Media/Images/WomenJacket.jpg',price:2000,quantity:1},
    {id:17,name:'washjacket', image:'Media/Images/washjacket.jpg',price:1350,quantity:1},
    {id:18,name:'jeanjacketwash', image:'Media/Images/jeanjacketwash.jpg',price:1500,quantity:1},
    {id:19,name:'mensjacketblack', image:'Media/Images/mensjacketblack.jpg',price:2000,quantity:1},
    {id:20,name:'ladiesleatherjacke', image:'Media/Images/ladiesleatherjacke.jpg',price:2500,quantity:1},
    {id:21,name:'blezerman', image:'Media/Images/blezerman.jpg',price:2600,quantity:1},
    {id:22,name:'menscasualblezer', image:'Media/Images/menscasualblezer.jpg',price:2600,quantity:1},
    {id:23,name:'mensslimfitgrayblezer', image:'Media/Images/mensslimfitgrayblezer.jpg',price:2700,quantity:1},
    {id:24,name:'girlsblazer', image:'Media/Images/girlsblazer.jpg',price:1700,quantity:1},
    {id:25,name:'Girls blazer gray', image:'Media/Images/Girlsblazergray.jpg',price:1450,quantity:1},
    {id:26,name:'women jacket gray', image:'Media/Images/womenjacketgray.jpg',price:1650,quantity:1},
    {id:27,name:'women casual blazer', image:'Media/Images/womencasualblazer.jpg',price:2000,quantity:1},
    {id:28,name:'girls black blazer', image:'Media/Images/girlsblackblazer.jpg',price:4000,quantity:1},
    {id:29,name:'Shirt Black', image:'Media/Images/shirt.png',price:1300,quantity:1},
    {id:30,name:'T-Shirt Black', image:'Media/Images/shirt3.jpg',price:500,quantity:1},
    {id:31,name:'Shirt Black', image:'Media/Images/shirt4.jpg',price:1600,quantity:1},
    {id:32,name:'Shirt Black', image:'Media/Images/shirt5.jpg',price:2000,quantity:1},
    {id:33,name:'Shirt Gray', image:'Media/Images/shirt6.jpg',price:2500,quantity:1},
    {id:34,name:'Shirt Light Gray', image:'Media/Images/shirt7.jpg',price:1500,quantity:1},
    {id:35,name:'Shirt Pink White', image:'Media/Images/shirt8.jpg',price:3000,quantity:1},
    {id:36,name:'Shirt White', image:'Media/Images/shirt8.jpg',price:1450,quantity:1},
    
]

const product_container=document.querySelector('.product-gallery');
for(var i=0;i<products.length;i++)
{
    product_container.innerHTML+=`
        <div class="product-card" onclick="AddToCart(${products[i].id})">
            <img src=${products[i].image} alt="shirtImage" class="card-image">
            <span class="product-card-title">${products[i].name.slice(0,8).concat("...")}</span>
        </div>
    `
}

var cart=[];
function AddToCart(id)
{
    var item= cart.find((product)=>product.id===id)
    if(item)
    {
        item.quantity+=1;
    }
    else{
        const product=products.find((products)=>products.id===id);
        cart.push(product);
        console.log(cart);
        cart.length;
    }
    showCart();
    priceCalculation();
}

function showCart()
{
    const cart_container=document.querySelector('.product-details');
    cart_container.innerHTML="";
    for(var i=0;i<cart.length;i++)
    {
        console.log(cart[i].name);
        cart_container.innerHTML+=`
            <div class="item-details">
                <div class="notification-container">
                    <span class="notification">
                        ${cart[i].quantity}
                    </span>
                    <img src=${cart[i].image} alt="" class="item-image">
                </div>
                <span class="item-name">${cart[i].name}</span>
                <span class="item-price">${cart[i].price}</span>
                <span class="item-delete" onclick="deleteItem(${cart[i].id})"><i class="fas fa-trash"></i></span>
            </div>
            <hr>
        `
    }
}

function deleteItem(id)
{
    var item_index= cart.findIndex((product)=>product.id===id);
    cart.splice(item_index,1);
    showCart();
    priceCalculation();
}

function priceCalculation()
{   
    const subtotal=document.querySelector(".subtotal");
    const totalprice=document.querySelector(".total");
    const payprice=document.querySelector(".payprice");
    var total=0;
    for(var i=0;i<cart.length;i++)
    {
        total+=cart[i].price*cart[i].quantity;
    }
    subtotal.innerHTML="BDT"+total;
    totalprice.innerHTML="BDT"+total;
    payprice.innerHTML="BDT"+total;

}
Search();
function Search()
{
    const product_container=document.querySelector('.product-gallery');
    const search_bar=document.getElementById("searchbar");
    search_bar.addEventListener('keyup',(e)=>{
        console.log(e.target.value);
        const filterproducts=products.filter((product=>{
           return product.name.toLowerCase().includes(e.target.value.toLowerCase());
        }))
        product_container.innerHTML="";
        for(var i=0;i<filterproducts.length;i++)
        {
            product_container.innerHTML+=`
                <div class="product-card" onclick="AddToCart(${products[i].id})">
                    <img src=${products[i].image} alt="shirtImage" class="card-image">
                    <span class="product-card-title">${products[i].name.slice(0,8).concat("...")}</span>
                </div>
            `
        }
    })
    

}