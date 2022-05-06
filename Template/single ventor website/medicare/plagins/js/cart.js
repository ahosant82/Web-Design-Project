/********add-to-card************/
let carts = document.querySelectorAll('.cart-button');
console.log("run");
/* *
let product = [
  {
    name: 'JUMPER Electronic Blood Pressure Monitor',
    tag: 'mechine',
    price: 1200,
    incart: 1
  },
  {
    name: 'Face Mask',
    tag: 'mask',
    price: 200,
    incart: 1
  },
  {
    name: 'Hend Gloves',
    tag: 'gloves',
    price: 100,
    incart: 1
  },
  {
    name: 'ciring',
    tag: 'criring',
    price: 20,
    incart: 1
  },
  {
    name: 'Diabetic Check Mechine',
    tag: 'mechine',
    price: 1200,
    incart: 1
  }
]

for(i=0; i< carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartsNumbers(product[i]);
  })
}

function onLoedCartNumbers(){
  let productNumbers = localStorage.getItem("cartsNumbers");

  if(productNumbers){
    document.querySelector(".cart-item .count").textContent = productNumbers;

  }
}

function cartsNumbers(product){
  let productNumbers = localStorage.getItem("cartsNumbers");

  productNumbers = parseInt(productNumbers);

  if( productNumbers ){
    localStorage.setItem("cartsNumbers", productNumbers + 1);
    document.querySelector(".cart-item .count").textContent = productNumbers + 1;
  } else{
    localStorage.setItem("cartsNumbers", 1);
    document.querySelector(".cart-item .count").textContent = 1;
  }

  setItem(product)

}

function setItem(product){
  console.log("inside of setitem function");
  console.log("my product is ", product);
}

onLoedCartNumbers();
****/
let products = [
  {
    name: 'JUMPER Electronic Blood Pressure Monitor',
    tag: 'mechine',
    price: 1200,
    incart: 0
  },
  {
    name: 'Face Mask',
    tag: 'mask',
    price: 200,
    incart: 0
  },
  {
    name: 'Hend Gloves',
    tag: 'gloves',
    price: 100,
    incart: 0
  },
  {
    name: 'ciring',
    tag: 'criring',
    price: 20,
    incart: 1
  },
  {
    name: 'Diabetic Check Mechine',
    tag: 'mechine',
    price: 1200,
    incart: 1
  }
]
for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () =>{
    cartsNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoedCartsNumbers(){
  let productNumbers= localStorage.getItem('cartsNumbers');



  if( productNumbers) {
    document.querySelector('.cart-item .count').textContent = productNumbers;
  }
}


function cartsNumbers(products){
  let productNumbers= localStorage.getItem('cartsNumbers');

  productNumbers = parseInt(productNumbers);

  if( productNumbers) {
    localStorage.setItem('cartsNumbers', productNumbers+1);
    document.querySelector('.cart-item .count').textContent = productNumbers +1;
  }else{
    localStorage.setItem('cartsNumbers', 1);
    document.querySelector('.cart-item .count').textContent = 1;

  }
  setitem(products);
  
}
function setitem(products){
  let cartitems = localStorage.getItem('productsInCart')

  cartitems = JSON.parse(cartitems)

  if(cartitems != null){

    if(cartitems[products.tag] == undefined){
      cartitems = {
        ...cartitems ,
        [products.tag] : products
      }
    }

    cartitems[products.tag].incart += 1;
  } else{
    products.incart =1;

    cartitems ={
      [products.tag] : products
    }
  }
  
  

  localStorage.setItem('productsInCart',JSON.stringify(cartitems));
}

function totalCost(products){
  console.log("product price is : " , products.price);

  let cartCost = localStorage.getItem("totalCost")

  

  console.log("product cartCost is : " , cartCost);
  console.log(typeof cartCost);


  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price)
  } else{
    localStorage.setItem("totalCost" , products.price);
  }

  
}


function displayCart() {
  let cartitems = localStorage.getItem("productsInCart");
  cartitems = JSON.parse(cartitems);

  let productSection = document.querySelector(".product-section");

  console.log(cartitems);

  if( cartitems && productSection ){
    console.log("runing");

    productSection.innerHTML = '';
    Object.values(cartitems).map(item => {
      productSection.innerHTML += `
      <div class="product">
        <ion-icon name="close-circle"></ion-icon>
        <img src="${item.tag}S">
        <span>${item.name}</span>
      </div>
      `
      
    });
  }
}

onLoedCartsNumbers();
displayCart();